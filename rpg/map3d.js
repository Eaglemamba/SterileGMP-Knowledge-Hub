/* SterileGMP Knowledge Hub — 3D stage map (map.html only).
 *
 * Draws the current class's main line as floating low-poly islands: one island
 * per tier, one pad per document, a boss at the end of each island. Only the
 * stages reached so far exist; clearing a stage grows the path to the next
 * one, and defeating a boss builds the bridge to the next island.
 *
 * Needs three.js (global THREE, r128) and rpg/rpg.js (window.SGKRpg). If either
 * is missing or WebGL is unavailable the container stays hidden and the flat
 * stage list below it is all the visitor sees.
 */
(function () {
  'use strict';

  var host = document.getElementById('rpg-map3d');
  if (!host) return;

  var ZONE_STYLE = [
    { ground: 0x8fb0cf, side: 0x55718f, accent: 0x2f6fb5, prop: 0xe8eef5 },
    { ground: 0x74cdb9, side: 0x3c8f7f, accent: 0x0f8a7e, prop: 0xe6fbf6 },
    { ground: 0xa890ea, side: 0x6a4fc0, accent: 0x6d3fd1, prop: 0xf1ebff }
  ];
  var STEP = 9, GAP = 30, PAD_R = 2.3;

  var renderer, scene, camera, world, raycaster, pointer = { x: 0, y: 0 };
  var pads = [], marker = null, pet = null, grow = null, clouds = [];
  var target = { x: 0, z: 0 }, bounds = { min: 0, max: 0 }, zoom = 1, clock = 0, running = false;
  var card, hint, data = null;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- small helpers ---------- */
  function rng(seed) { var s = seed % 2147483647 || 1; return function () { s = s * 16807 % 2147483647; return (s - 1) / 2147483646; }; }
  function mat(color, opts) {
    var o = { color: color, flatShading: true };
    if (opts) for (var k in opts) o[k] = opts[k];
    return new THREE.MeshLambertMaterial(o);
  }
  function textSprite(text, opts) {
    opts = opts || {};
    var size = opts.size || 64, pad = 16;
    var cv = document.createElement('canvas'), ctx = cv.getContext('2d');
    var font = (opts.weight || '900') + ' ' + size + 'px "Noto Sans TC","Microsoft JhengHei",sans-serif';
    ctx.font = font;
    var w = Math.ceil(ctx.measureText(text).width) + pad * 2, h = size + pad * 2;
    cv.width = w; cv.height = h;
    ctx.font = font; ctx.textBaseline = 'middle'; ctx.textAlign = 'center';
    if (opts.bg) {
      ctx.fillStyle = opts.bg;
      var r = h / 2; ctx.beginPath(); ctx.moveTo(r, 0); ctx.arcTo(w, 0, w, h, r); ctx.arcTo(w, h, 0, h, r); ctx.arcTo(0, h, 0, 0, r); ctx.arcTo(0, 0, w, 0, r); ctx.fill();
    }
    ctx.lineJoin = 'round'; ctx.lineWidth = opts.stroke === 0 ? 0 : 10; ctx.strokeStyle = opts.strokeColor || '#14151a';
    if (ctx.lineWidth) ctx.strokeText(text, w / 2, h / 2 + 2);
    ctx.fillStyle = opts.color || '#ffffff'; ctx.fillText(text, w / 2, h / 2 + 2);
    var tex = new THREE.CanvasTexture(cv);
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
    var scale = opts.scale || 3;
    sp.scale.set(scale * w / h, scale, 1);
    return sp;
  }
  /* Image as an upright billboard. `round` crops it to a ringed circle (avatars). */
  function imageSprite(src, height, round, ring) {
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false, opacity: 0 }));
    sp.scale.set(height, height, 1);
    var img = new Image();
    img.onload = function () {
      var cv = document.createElement('canvas'), n = 256; cv.width = n; cv.height = n;
      var ctx = cv.getContext('2d');
      if (round) {
        ctx.save(); ctx.beginPath(); ctx.arc(n / 2, n / 2, n / 2 - 12, 0, Math.PI * 2); ctx.clip();
        ctx.fillStyle = '#dfe2ea'; ctx.fillRect(0, 0, n, n);
        var s = Math.max(n / img.width, n / img.height), w = img.width * s, h = img.height * s;
        ctx.drawImage(img, (n - w) / 2, img.height > img.width ? 0 : (n - h) / 2, w, h);
        ctx.restore();
        ctx.lineWidth = 12; ctx.strokeStyle = ring || '#ff3d81'; ctx.beginPath(); ctx.arc(n / 2, n / 2, n / 2 - 8, 0, Math.PI * 2); ctx.stroke();
      } else {
        var k = Math.min(n / img.width, n / img.height), iw = img.width * k, ih = img.height * k;
        ctx.drawImage(img, (n - iw) / 2, n - ih, iw, ih);
      }
      sp.material.map = new THREE.CanvasTexture(cv);
      sp.material.opacity = sp.userData.opacity || 1;
      sp.material.needsUpdate = true;
      draw();
    };
    img.src = src;
    return sp;
  }

  /* ---------- layout ---------- */
  function layout(d) {
    var x = 0, out = [];
    d.zones.forEach(function (z, zi) {
      // pages without content yet are left off the 3D map (they would block the path); the list below still shows them
      var live = z.stages.filter(function (s) { return !s.shell; });
      var main = live.filter(function (s) { return s.main; }), side = live.filter(function (s) { return !s.main; });
      var frontier = main.length;
      for (var i = 0; i < main.length; i++) if (!main[i].cleared) { frontier = i; break; }
      var nodes = main.map(function (s, k) {
        return { s: s, x: x + k * STEP, z: 6.5 * Math.sin(k * 1.15 + zi * 1.7), shown: z.unlocked && (k <= frontier || s.started || s.cleared) };
      });
      var bossShown = z.unlocked && (z.done || frontier >= main.length);
      var boss = { x: x + main.length * STEP + 2, z: 6.5 * Math.sin(main.length * 1.15 + zi * 1.7), shown: bossShown };
      var sides = side.map(function (s, j) {
        return { s: s, x: x + 3 + j * 7.5, z: -15 - (j % 2) * 6.5, shown: z.unlocked };
      });
      var endX = Math.max(boss.x, sides.length ? sides[sides.length - 1].x : 0);
      out.push({ z: z, zi: zi, nodes: nodes, sides: sides, boss: boss, frontier: frontier, x0: x, x1: endX });
      x = endX + GAP;
    });
    return out;
  }

  /* ---------- scene building ---------- */
  function disc(group, x, z, r, style, seed) {
    var rand = rng(seed), rr = r * (0.9 + rand() * 0.25);
    var top = new THREE.Mesh(new THREE.CylinderGeometry(rr, rr * 0.92, 2.2, 9), mat(style.ground));
    top.position.set(x, -1.1, z); top.rotation.y = rand() * 3;
    var under = new THREE.Mesh(new THREE.ConeGeometry(rr * 0.9, 6 + rand() * 4, 7), mat(style.side));
    under.position.set(x, -2.2 - under.geometry.parameters.height / 2, z); under.rotation.x = Math.PI; under.rotation.y = rand() * 3;
    group.add(top, under);
  }
  function prop(group, zi, x, z, style, rand) {
    var m;
    if (zi === 0) {                       // crates and lockers
      var h = 1.5 + rand() * 2.5;
      m = new THREE.Mesh(new THREE.BoxGeometry(1.6 + rand(), h, 1.6 + rand()), mat(style.prop)); m.position.set(x, h / 2, z);
    } else if (zi === 1) {                // tanks and pipes
      var th = 2 + rand() * 3;
      m = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, th, 8), mat(style.prop)); m.position.set(x, th / 2, z);
      var cap = new THREE.Mesh(new THREE.SphereGeometry(0.9, 8, 5), mat(style.accent)); cap.position.set(x, th, z); cap.scale.y = 0.5; group.add(cap);
    } else {                              // crystals
      var ch = 2 + rand() * 4;
      m = new THREE.Mesh(new THREE.OctahedronGeometry(1.1), new THREE.MeshLambertMaterial({ color: style.prop, emissive: style.accent, emissiveIntensity: 0.35, flatShading: true, transparent: true, opacity: 0.85 }));
      m.scale.y = ch / 2; m.position.set(x, ch / 2, z);
    }
    m.rotation.y = rand() * 3;
    group.add(m);
  }
  function cloud(group, x, z, s) {
    var g = new THREE.Group(), m = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.93 });
    [[0, 0, 0, 1], [1.3, -0.2, 0.3, 0.75], [-1.2, -0.1, -0.2, 0.8], [0.3, 0.5, -0.6, 0.7]].forEach(function (p) {
      var b = new THREE.Mesh(new THREE.SphereGeometry(p[3] * s, 8, 6), m); b.position.set(p[0] * s, p[1] * s, p[2] * s); g.add(b);
    });
    g.position.set(x, 2.2, z); g.userData.x = x; g.userData.ph = x * 0.37;
    group.add(g); clouds.push(g);
  }
  function tube(points, radius, color, emissive) {
    var curve = new THREE.CatmullRomCurve3(points.map(function (p) { return new THREE.Vector3(p.x, 0.25, p.z); }), false, 'catmullrom', 0.35);
    var geo = new THREE.TubeGeometry(curve, Math.max(8, points.length * 14), radius, 6, false);
    return new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: color, emissive: emissive || 0x000000, emissiveIntensity: 0.5 }));
  }

  function build() {
    data = window.SGKRpg.mapData();
    card.hidden = true;
    if (world) scene.remove(world);
    world = new THREE.Group(); scene.add(world);
    pads = []; clouds = []; marker = null; pet = null; grow = null;
    if (!data) { host.hidden = true; return; }
    host.hidden = false;

    var L = layout(data), here = null, revealed = 0, lastSeg = null;
    L.forEach(function (Z, idx) {
      var style = ZONE_STYLE[Z.zi] || ZONE_STYLE[2], rand = rng(101 + Z.zi * 7919);
      var all = Z.nodes.concat(Z.sides);
      all.forEach(function (n, i) { disc(world, n.x, n.z, n.s.main ? 6.6 : 5.2, style, 31 + i * 17 + Z.zi * 101); });
      disc(world, Z.boss.x, Z.boss.z, 7.4, style, 977 + Z.zi);
      for (var p = 0; p < all.length; p++) if (rand() > 0.45) prop(world, Z.zi, all[p].x + (rand() - 0.5) * 7, all[p].z + (all[p].s.main ? 4.2 : -3.6) + rand(), style, rand);

      var name = textSprite('ZONE ' + (Z.zi + 1) + '　' + Z.z.zh, { size: 56, scale: 3.4, bg: 'rgba(20,21,26,.86)', stroke: 0 });
      name.position.set((Z.x0 + Z.boss.x) / 2, 13, -6); world.add(name);

      if (!Z.z.unlocked) {                                   // whole island under cloud
        for (var cx = Z.x0 - 4; cx <= Z.x1 + 4; cx += 6.5) { cloud(world, cx, 5 * Math.sin(cx), 4.4); cloud(world, cx + 3, -13 + 3 * Math.cos(cx), 3.6); }
        var q = textSprite('？', { size: 96, scale: 7, color: '#14151a', strokeColor: '#ffffff' }); q.position.set((Z.x0 + Z.boss.x) / 2, 8, 2); world.add(q);
        return;
      }

      var line = [];
      Z.nodes.forEach(function (n, k) {
        if (!n.shown) { cloud(world, n.x, n.z, 2.6); return; }
        revealed++;
        line.push(n);
        addPad(n, String(k + 1), style, false);
        if (n.s.here) here = n;
      });
      Z.sides.forEach(function (n, j) {
        revealed++;
        addPad(n, '支', style, true);
        if (n.s.here) here = n;
      });
      if (Z.boss.shown) { line.push(Z.boss); addBoss(Z, style); } else cloud(world, Z.boss.x, Z.boss.z, 3.4);
      if (line.length > 1) { var t = tube(line, 0.5, 0xffc21f, 0xff9d00); world.add(t); lastSeg = { mesh: t, n: line.length }; }
      if (Z.z.done && L[idx + 1]) {                           // bridge to the next island
        var nx = L[idx + 1].nodes[0] || L[idx + 1].boss;
        world.add(tube([Z.boss, { x: (Z.boss.x + nx.x) / 2, z: (Z.boss.z + nx.z) / 2 + 3 }, nx], 0.6, 0xffffff, 0x12b5e5));
      }
    });

    addElites(L);

    /* the path grows when a new stage has appeared since the last visit */
    var prev = window.SGKRpg.mapSeen(revealed);
    if (lastSeg && prev !== null && revealed > prev && !reduced) {
      var total = lastSeg.mesh.geometry.index.count, from = Math.floor(total * Math.max(0, lastSeg.n - 2) / (lastSeg.n - 1));
      lastSeg.mesh.geometry.setDrawRange(0, from);
      grow = { geo: lastSeg.mesh.geometry, from: from, to: total, t: 0 };
    }

    var first = L[0].nodes[0] || L[0].boss;
    var at = here || first;
    marker = imageSprite(data.avatar, 4.2, true);
    marker.position.set(at.x - 1.2, 6.4, at.z); marker.userData.y = 6.4; world.add(marker);
    if (data.pet) { pet = imageSprite(data.pet, 4.4, false); pet.position.set(at.x + 2.6, 3.0, at.z + 0.6); pet.userData.y = 3.0; world.add(pet); }

    bounds.min = L[0].x0 - 6; bounds.max = L[L.length - 1].x1 + 6;
    target.x = Math.min(bounds.max, at.x + 10); target.z = 0;
    start();
  }

  function addPad(n, label, style, side) {
    var s = n.s, r = side ? PAD_R * 0.8 : PAD_R;
    var color = s.shell ? 0xb8bcc8 : s.cleared ? style.accent : s.here ? 0xff3d81 : 0xffffff;
    var m = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.08, 0.7, 20), new THREE.MeshLambertMaterial({ color: color, emissive: s.cleared || s.here ? color : 0x000000, emissiveIntensity: 0.35 }));
    m.position.set(n.x, 0.35, n.z); m.userData = { stage: s }; world.add(m); pads.push(m);
    var rim = new THREE.Mesh(new THREE.TorusGeometry(r * 1.12, 0.16, 6, 28), mat(0x14151a)); rim.rotation.x = Math.PI / 2; rim.position.set(n.x, 0.72, n.z); world.add(rim);
    var t = textSprite(s.cleared ? '✓' : label, { size: 72, scale: side ? 2 : 2.6, color: s.cleared ? '#ffffff' : '#14151a', strokeColor: s.cleared ? '#14151a' : '#ffffff' });
    t.position.set(n.x, 2.3, n.z); world.add(t);
    if (s.cleared) {
      var pole = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 4.2, 6), mat(0x14151a)); pole.position.set(n.x + r * 0.7, 2.4, n.z - r * 0.5); world.add(pole);
      var flag = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.9, 0.06), mat(s.shiny ? 0x14b8a6 : 0xffd23f)); flag.position.set(n.x + r * 0.7 + 0.8, 4.0, n.z - r * 0.5); world.add(flag);
    }
  }
  function addBoss(Z, style) {
    var b = Z.boss, done = Z.z.done;
    var base = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.8, 0.9, 6), new THREE.MeshLambertMaterial({ color: done ? 0x17a673 : 0x14151a, emissive: done ? 0x17a673 : 0xff3d81, emissiveIntensity: 0.3, flatShading: true }));
    base.position.set(b.x, 0.45, b.z); base.userData = { boss: Z.z }; world.add(base); pads.push(base);
    var sp;
    if (Z.z.bossImg) { sp = imageSprite(Z.z.bossImg, 9.5, false); sp.userData.opacity = done ? 0.4 : 1; sp.position.set(b.x, 5.4, b.z); }
    else {
      var gem = new THREE.Mesh(new THREE.OctahedronGeometry(2.6), new THREE.MeshLambertMaterial({ color: done ? 0x9aa0ad : 0x3a1030, emissive: done ? 0x000000 : 0xff3d81, emissiveIntensity: 0.6, flatShading: true }));
      gem.position.set(b.x, 4.4, b.z); gem.scale.y = 1.4; gem.userData.spin = !done; world.add(gem); pads.push(gem); gem.userData.boss = Z.z;
      sp = textSprite(done ? '已擊敗' : 'BOSS', { size: 60, scale: 2.4, color: done ? '#ffffff' : '#ffd23f' }); sp.position.set(b.x, 9.4, b.z);
    }
    world.add(sp);
    var tag = textSprite(Z.z.boss, { size: 48, scale: 2.2, bg: done ? 'rgba(23,166,115,.92)' : 'rgba(20,21,26,.9)', stroke: 0 }); tag.position.set(b.x, 11.6, b.z); world.add(tag);
  }

  /* Elite bosses: a dark archipelago behind the first island; under cloud until the class reaches ELITE_RANK. */
  function addElites(L) {
    var list = data.elites || [];
    if (!list.length) return;
    var dark = { ground: 0x3b3355, side: 0x1c1729 }, x0 = L[0].x0 + 2, Z0 = -38;
    var head = textSprite('ELITE　精英魔王', { size: 56, scale: 3.2, bg: 'rgba(120,20,60,.9)', stroke: 0 });
    head.position.set(x0 - 13, 5, Z0 + 2); world.add(head);
    list.forEach(function (e, i) {
      var x = x0 + i * 16, z = Z0 + (i % 2) * 5;
      disc(world, x, z, 6.4, dark, 4001 + i * 37);
      if (!e.open) {
        cloud(world, x, z + 1, 3.6);
        var q = textSprite('？', { size: 96, scale: 4.2, color: '#14151a', strokeColor: '#ffffff' }); q.position.set(x, 6.5, z); world.add(q);
        var lock = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 0.4, 6), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
        lock.position.set(x, 1.5, z); lock.userData = { elite: e }; world.add(lock); pads.push(lock);
        return;
      }
      var col = new THREE.Color(e.color);
      var base = new THREE.Mesh(new THREE.CylinderGeometry(3, 3.4, 0.9, 6), new THREE.MeshLambertMaterial({ color: e.won ? 0x17a673 : 0x14151a, emissive: e.won ? 0x17a673 : col, emissiveIntensity: 0.35, flatShading: true }));
      base.position.set(x, 0.45, z); base.userData = { elite: e }; world.add(base); pads.push(base);
      var sp;
      if (e.img) { sp = imageSprite(e.img, 8.5, false); sp.userData.opacity = e.won ? 0.45 : 1; sp.position.set(x, 5, z); }
      else {
        var gem = new THREE.Mesh(new THREE.OctahedronGeometry(2.2), new THREE.MeshLambertMaterial({ color: e.won ? 0x9aa0ad : 0x1a1024, emissive: e.won ? 0x000000 : col, emissiveIntensity: 0.7, flatShading: true }));
        gem.position.set(x, 4, z); gem.scale.y = 1.4; gem.userData = { spin: !e.won, elite: e }; world.add(gem); pads.push(gem);
        sp = textSprite(e.won ? '已擊敗' : 'ELITE', { size: 60, scale: 2.1, color: e.won ? '#ffffff' : '#ffd23f' }); sp.position.set(x, 8.6, z);
      }
      world.add(sp);
      var tag = textSprite(e.name, { size: 48, scale: 2.1, bg: e.won ? 'rgba(23,166,115,.92)' : 'rgba(20,21,26,.9)', stroke: 0 }); tag.position.set(x, 10.6, z); world.add(tag);
    });
  }

  /* ---------- camera, render loop ---------- */
  function place() {
    var d = 56 * zoom;
    camera.position.set(target.x, d * 0.82, target.z + d * 0.74);
    camera.lookAt(target.x, 1.5, target.z - 2);
  }
  function draw() { if (renderer && scene) { place(); renderer.render(scene, camera); } }
  function frame(now) {
    if (!running) return;
    clock = now / 1000;
    if (marker) marker.position.y = marker.userData.y + Math.sin(clock * 2.4) * 0.35;
    if (pet) pet.position.y = pet.userData.y + Math.abs(Math.sin(clock * 3.1)) * 0.5;
    clouds.forEach(function (c) { c.position.x = c.userData.x + Math.sin(clock * 0.4 + c.userData.ph) * 0.8; });
    pads.forEach(function (p) { if (p.userData.spin) p.rotation.y = clock * 0.9; });
    if (grow) {
      grow.t = Math.min(1, grow.t + 0.012);
      grow.geo.setDrawRange(0, Math.floor((grow.from + (grow.to - grow.from) * grow.t) / 3) * 3);
      if (grow.t >= 1) grow = null;
    }
    draw();
    requestAnimationFrame(frame);
  }
  function start() {
    draw();
    if (reduced || running) return;
    running = true; requestAnimationFrame(frame);
  }
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) running = false; else if (data && !reduced && !running) { running = true; requestAnimationFrame(frame); }
  });

  function resize() {
    var w = host.clientWidth, h = Math.round(Math.min(Math.max(window.innerHeight * 0.62, 340), 620));
    host.style.height = h + 'px';
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    draw();
  }

  /* ---------- interaction: drag to move, wheel/pinch to zoom, tap a pad ---------- */
  function pick(ev) {
    var r = renderer.domElement.getBoundingClientRect();
    pointer.x = ((ev.clientX - r.left) / r.width) * 2 - 1;
    pointer.y = -((ev.clientY - r.top) / r.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    var hit = raycaster.intersectObjects(pads, false)[0];
    return hit ? hit.object.userData : null;
  }
  function showCard(u) {
    while (card.firstChild) card.removeChild(card.firstChild);
    function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }
    if (u.stage) {
      var s = u.stage, stars = '';
      for (var i = 0; i < s.maxStars; i++) stars += i < s.stars ? '★' : '☆';
      card.appendChild(el('span', 'rpg-tag', s.rec ? '推薦關卡' : s.main ? '主線關卡' : '支線關卡'));
      card.appendChild(el('h3', '', s.title));
      card.appendChild(el('p', 'rpg-map3d-meta', s.shell ? '內容準備中' : (s.cleared ? '已通關' : s.started ? '已讀 ' + s.read + ' / ' + s.total + ' 節' : '共 ' + s.total + ' 節') + (s.quiz ? '・有章節挑戰' : '') + '　' + stars));
      if (!s.shell) { var a = el('a', 'rpg-btn', s.cleared ? '再讀一次' : s.started ? '繼續' : '出發'); a.href = s.href; card.appendChild(a); }
      if (s.guard === 'ready') { var g = el('a', 'rpg-btn rpg-btn-ghost', '挑戰守關者'); g.href = s.guardHref; card.appendChild(g); }
      else if (s.guard === 'wait') card.appendChild(el('p', 'rpg-map3d-meta', '守關者明天現身'));
      else if (s.guard === 'won') card.appendChild(el('p', 'rpg-map3d-meta', '守關者已擊敗'));
    } else if (u.boss) {
      var z = u.boss;
      card.appendChild(el('span', 'rpg-tag', 'BOSS'));
      card.appendChild(el('h3', '', z.boss + (z.done ? '（已擊敗）' : '')));
      var tail = z.done ? '，通往下一座島的橋已經架好。' : !z.hasBoss ? '。這一區還沒有題庫，通關即升階。' : z.ready ? '。魔王現身了，擊敗牠就能升階。' : '，全部通關後魔王現身。';
      card.appendChild(el('p', 'rpg-map3d-meta', '升階試煉：' + z.rankName + '。' + (z.anyOf ? '任選通關 ' : '必讀通關 ') + z.got + ' / ' + z.need + tail));
      if (z.hasBoss && z.weak) card.appendChild(el('p', 'rpg-map3d-meta', '弱點：' + z.weak + (z.weakWon ? '（已弱點擊破）' : '')));
      if (z.hasBoss && (z.ready && !z.beaten || z.beaten && !z.weakWon && z.canCounter)) {
        var fb = el('button', 'rpg-btn', z.beaten ? '弱點擊破' : '挑戰魔王'); fb.type = 'button';
        fb.onclick = function () { card.hidden = true; window.SGKRpg.fightBoss(z.ti); };
        card.appendChild(fb);
      }
    } else if (u.elite) {
      var e = u.elite;
      card.appendChild(el('span', 'rpg-tag', 'ELITE'));
      card.appendChild(el('h3', '', e.open ? e.name + (e.won ? '（已擊敗）' : '') : '？？？'));
      card.appendChild(el('p', 'rpg-map3d-meta', e.open ? '針劑風險：' + e.risk + '。選打，不影響升階。' : '升到「' + e.unlock + '」後現身。'));
      if (e.open) {
        card.appendChild(el('p', 'rpg-map3d-meta', '弱點：' + e.weak + (e.weakWon ? '（已弱點擊破）' : '')));
        if (e.needName) card.appendChild(el('p', 'rpg-map3d-meta', '入場條件：攜帶' + e.needName + (e.hasItem ? '（已持有）' : '（到工坊合成）')));
        var eb = el('button', 'rpg-btn', !e.won ? '挑戰' : !e.weakWon && e.canCounter ? '弱點擊破' : '再戰'); eb.type = 'button';
        eb.onclick = function () { card.hidden = true; window.SGKRpg.fightElite(e.id); };
        card.appendChild(eb);
      }
    }
    var x = el('button', 'rpg-map3d-x', '×'); x.type = 'button'; x.setAttribute('aria-label', '關閉'); x.onclick = function () { card.hidden = true; };
    card.appendChild(x);
    card.hidden = false;
  }
  function bind() {
    var cv = renderer.domElement, down = null, pinch = 0, pts = {};
    cv.style.touchAction = 'pan-y';
    cv.addEventListener('pointerdown', function (e) {
      pts[e.pointerId] = { x: e.clientX, y: e.clientY };
      down = { x: e.clientX, y: e.clientY, tx: target.x, tz: target.z, moved: false };
      cv.setPointerCapture(e.pointerId);
    });
    cv.addEventListener('pointermove', function (e) {
      if (pts[e.pointerId]) pts[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(pts);
      if (ids.length === 2) {
        var a = pts[ids[0]], b = pts[ids[1]], dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinch) { zoom = Math.max(0.55, Math.min(1.9, zoom * pinch / dist)); draw(); }
        pinch = dist; if (down) down.moved = true;
        return;
      }
      if (!down) { cv.style.cursor = pick(e) ? 'pointer' : 'grab'; return; }
      var dx = e.clientX - down.x, dy = e.clientY - down.y;
      if (Math.abs(dx) + Math.abs(dy) > 6) down.moved = true;
      var k = 0.085 * zoom * (900 / Math.max(480, cv.clientWidth));
      target.x = Math.max(bounds.min, Math.min(bounds.max, down.tx - dx * k));
      target.z = Math.max(-30, Math.min(10, down.tz - dy * k));
      if (hint) hint.hidden = true;
      draw();
    });
    function up(e) {
      delete pts[e.pointerId]; pinch = 0;
      if (down && !down.moved) { var u = pick(e); if (u) showCard(u); else card.hidden = true; }
      down = null;
    }
    cv.addEventListener('pointerup', up);
    cv.addEventListener('pointercancel', up);
    cv.addEventListener('wheel', function (e) {
      if (!e.ctrlKey && Math.abs(e.deltaX) < Math.abs(e.deltaY) && !e.shiftKey) {
        e.preventDefault();
        zoom = Math.max(0.55, Math.min(1.9, zoom * (e.deltaY > 0 ? 1.08 : 0.93))); draw();
      }
    }, { passive: false });
    host.addEventListener('keydown', function (e) {
      var step = e.key === 'ArrowRight' ? 6 : e.key === 'ArrowLeft' ? -6 : 0;
      if (!step) return;
      e.preventDefault(); target.x = Math.max(bounds.min, Math.min(bounds.max, target.x + step)); draw();
    });
  }

  /* ---------- boot ---------- */
  function init() {
    if (!window.THREE || !window.SGKRpg) return;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (e) { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    host.setAttribute('tabindex', '0');
    host.setAttribute('role', 'application');
    host.setAttribute('aria-label', '3D 闖關地圖。左右方向鍵移動，下方有相同內容的關卡列表。');
    host.appendChild(renderer.domElement);
    card = document.createElement('div'); card.className = 'rpg-map3d-card'; card.hidden = true; host.appendChild(card);
    hint = document.createElement('p'); hint.className = 'rpg-map3d-hint'; hint.textContent = '拖曳移動・滾輪或雙指縮放・點關卡看內容'; host.appendChild(hint);

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xcfe6ff, 70, 190);
    camera = new THREE.PerspectiveCamera(38, 2, 0.5, 400);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x6f86a8, 0.62));
    var sun = new THREE.DirectionalLight(0xfff4e0, 0.5); sun.position.set(-30, 60, 40); scene.add(sun);
    raycaster = new THREE.Raycaster();

    bind();
    window.addEventListener('resize', resize);
    window.SGKRpg.onChange(build);
    build();
    resize();
  }
  if (window.SGKRpg && window.SGKRpg.ready) init();
  else document.addEventListener('sgk-rpg-ready', init, { once: true });
})();
