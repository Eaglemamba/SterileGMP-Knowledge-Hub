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

  var EN = (function () { try { return localStorage.getItem('sgk_rpg_lang') === 'en'; } catch (e) { return false; } })();
  function T(zh, en) { return EN ? en : zh; }

  var ZONE_STYLE = [
    { top: 0x9fd46a, lip: 0x7db450, ground: 0x9b7653, side: 0x5d6b82, accent: 0x2f6fb5, prop: 0xf4f6fa, tree: 0x4f9a4a },
    { top: 0x86d8bd, lip: 0x5fb79c, ground: 0x6f7f6a, side: 0x3b5f63, accent: 0x0f8a7e, prop: 0xe6fbf6, tree: 0x2f8f7a },
    { top: 0xc8b8f4, lip: 0xa48fe0, ground: 0x6d5aa0, side: 0x3e3366, accent: 0x6d3fd1, prop: 0xf1ebff, tree: 0x7a5cc8 }
  ];
  var STEP = 9, GAP = 30, PAD_R = 2.3;

  var renderer, scene, camera, world, raycaster, pointer = { x: 0, y: 0 };
  var pads = [], marker = null, pet = null, grow = null, clouds = [], flags = [];
  var target = { x: 0, z: 0 }, bounds = { min: 0, max: 0 }, zoom = 1, clock = 0, running = false;
  var card, hint, data = null, zoomSet = false;
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
    var size = (opts.size || 64) * 2, pad = 32;
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
    ctx.lineJoin = 'round'; ctx.lineWidth = opts.stroke === 0 ? 0 : 20; ctx.strokeStyle = opts.strokeColor || '#14151a';
    if (ctx.lineWidth) ctx.strokeText(text, w / 2, h / 2 + 2);
    ctx.fillStyle = opts.color || '#ffffff'; ctx.fillText(text, w / 2, h / 2 + 2);
    var tex = new THREE.CanvasTexture(cv);
    tex.minFilter = THREE.LinearFilter; tex.generateMipmaps = false;
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
  /* smooth radial wobble so every island outline is irregular but stable between visits */
  function wobble(geo, seed, amt) {
    var a1 = seed % 7, a2 = (seed * 3) % 11, pos = geo.attributes.position;
    for (var i = 0; i < pos.count; i++) {
      var vx = pos.getX(i), vz = pos.getZ(i), r = Math.sqrt(vx * vx + vz * vz);
      if (r < 1e-4) continue;
      var a = Math.atan2(vz, vx), k = 1 + amt * (0.6 * Math.sin(3 * a + a1) + 0.4 * Math.sin(5 * a + a2));
      pos.setX(i, vx * k); pos.setZ(i, vz * k);
    }
    pos.needsUpdate = true; geo.computeVertexNormals();
    return geo;
  }
  function jag(geo, seed, amt) {
    var rand = rng(seed), pos = geo.attributes.position;
    for (var i = 0; i < pos.count; i++) {
      if (pos.getY(i) > 0.49 * geo.parameters.height) continue;   // keep the rim that meets the soil
      pos.setX(i, pos.getX(i) * (1 + (rand() - 0.5) * amt)); pos.setZ(i, pos.getZ(i) * (1 + (rand() - 0.5) * amt));
      pos.setY(i, pos.getY(i) + (rand() - 0.5) * amt * 2);
    }
    pos.needsUpdate = true; geo.computeVertexNormals();
    return geo;
  }
  function disc(group, x, z, r, style, seed) {
    var rand = rng(seed), rr = r * (0.92 + rand() * 0.2), rot = rand() * 6.28;
    function piece(geo, color, y) { var m = new THREE.Mesh(geo, mat(color)); m.position.set(x, y, z); m.rotation.y = rot; group.add(m); return m; }
    piece(wobble(new THREE.CylinderGeometry(rr, rr, 0.5, 24), seed, 0.1), style.top || style.ground, -0.25);
    piece(wobble(new THREE.CylinderGeometry(rr * 1.01, rr * 0.97, 0.45, 24), seed, 0.1), style.lip || style.side, -0.72);
    piece(wobble(new THREE.CylinderGeometry(rr * 0.97, rr * 0.86, 1.6, 24), seed, 0.1), style.ground, -1.75);
    var h = 6 + rand() * 4;
    var under = piece(jag(wobble(new THREE.ConeGeometry(rr * 0.86, h, 12, 3), seed, 0.1), seed + 5, 0.22), style.side, -2.55 - h / 2);
    under.rotation.x = Math.PI;
  }
  var SHADOW = null;
  function shadow(group, x, z, r) {
    if (!SHADOW) SHADOW = new THREE.MeshBasicMaterial({ color: 0x1b2a3a, transparent: true, opacity: 0.16, depthWrite: false });
    var m = new THREE.Mesh(new THREE.CircleGeometry(r, 20), SHADOW); m.rotation.x = -Math.PI / 2; m.position.set(x, 0.03, z); group.add(m);
  }
  function tree(group, x, z, style, rand) {
    var g = new THREE.Group(), s = 0.8 + rand() * 0.6;
    var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 1.1, 6), mat(0x7a5536)); trunk.position.y = 0.55; g.add(trunk);
    var leaf = new THREE.Color(style.tree).offsetHSL((rand() - 0.5) * 0.04, 0, (rand() - 0.5) * 0.08).getHex();
    if (rand() > 0.4) {
      [[1.2, 1.6, 1.4], [0.9, 1.3, 2.3]].forEach(function (c) { var m = new THREE.Mesh(new THREE.ConeGeometry(c[0], c[1], 7), mat(leaf)); m.position.y = c[2]; g.add(m); });
    } else {
      var b = new THREE.Mesh(new THREE.IcosahedronGeometry(1.05, 0), mat(leaf)); b.position.y = 1.8; g.add(b);
    }
    g.scale.setScalar(s); g.position.set(x, 0, z); g.rotation.y = rand() * 6.28; group.add(g);
    shadow(group, x + 0.3, z + 0.3, 1.1 * s);
  }
  function lamp(group, x, z) {
    var pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.4, 6), mat(0x2a2d36)); pole.position.set(x, 1.2, z); group.add(pole);
    var bulb = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 6), new THREE.MeshLambertMaterial({ color: 0xfff2b0, emissive: 0xffd45a, emissiveIntensity: 0.8 })); bulb.position.set(x, 2.5, z); group.add(bulb);
  }
  function prop(group, zi, x, z, style, rand) {
    var m, pick = rand();
    if (pick < 0.55) { tree(group, x, z, style, rand); return; }
    if (pick < 0.68) { lamp(group, x, z); return; }
    if (zi === 0) {                       // small cleanroom lab: white block, pitched roof, blue window strip
      var w = 2 + rand() * 0.8, d = 1.8, hh = 1.5 + rand() * 0.6;
      m = new THREE.Group();
      var body = new THREE.Mesh(new THREE.BoxGeometry(w, hh, d), mat(style.prop)); body.position.y = hh / 2; m.add(body);
      var roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, d * 0.78, 0.9, 4, 1), mat(0x3d6fa8)); roof.rotation.y = Math.PI / 4; roof.scale.x = w / d; roof.position.y = hh + 0.45; m.add(roof);
      var win = new THREE.Mesh(new THREE.BoxGeometry(w * 0.7, 0.32, 0.05), new THREE.MeshLambertMaterial({ color: 0x8fd3ff, emissive: 0x3aa0e0, emissiveIntensity: 0.4 })); win.position.set(0, hh * 0.62, d / 2 + 0.03); m.add(win);
      m.position.set(x, 0, z); m.rotation.y = (rand() - 0.5) * 0.8; group.add(m);
      shadow(group, x + 0.3, z + 0.4, w * 0.8);
      return;
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
    shadow(group, x + 0.3, z + 0.3, 1.2);
  }
  /* distance from (x, z) to a polyline of {x, z} */
  function nearLine(line, x, z) {
    var best = 1e9;
    for (var i = 0; i < line.length; i++) {
      var a = line[i], b = line[i + 1] || a, dx = b.x - a.x, dz = b.z - a.z, L2 = dx * dx + dz * dz;
      var t = L2 ? Math.max(0, Math.min(1, ((x - a.x) * dx + (z - a.z) * dz) / L2)) : 0;
      var ex = a.x + t * dx - x, ez = a.z + t * dz - z;
      best = Math.min(best, Math.sqrt(ex * ex + ez * ez));
    }
    return best;
  }
  function cloud(group, x, z, s) {
    var g = new THREE.Group(), m = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.93 });
    [[0, 0, 0, 1], [1.3, -0.2, 0.3, 0.75], [-1.2, -0.1, -0.2, 0.8], [0.3, 0.5, -0.6, 0.7]].forEach(function (p) {
      var b = new THREE.Mesh(new THREE.SphereGeometry(p[3] * s, 8, 6), m); b.position.set(p[0] * s, p[1] * s, p[2] * s); g.add(b);
    });
    g.position.set(x, 2.2, z); g.userData.x = x; g.userData.ph = x * 0.37;
    group.add(g); clouds.push(g);
  }
  function seaCloud(group, x, z, s, rand) {
    var g = new THREE.Group(), m = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
    for (var i = 0; i < 5; i++) {
      var b = new THREE.Mesh(new THREE.SphereGeometry(s * (0.6 + rand() * 0.5), 10, 7), m);
      b.position.set((rand() - 0.5) * s * 2.6, (rand() - 0.5) * s * 0.3, (rand() - 0.5) * s * 1.2); b.scale.y = 0.42; g.add(b);
    }
    g.position.set(x, -13 - rand() * 3, z); g.userData.x = x; g.userData.ph = x * 0.21;
    group.add(g); clouds.push(g);
  }
  function tube(points, radius, color, emissive) {
    var curve = new THREE.CatmullRomCurve3(points.map(function (p) { return new THREE.Vector3(p.x, 0, p.z); }), false, 'catmullrom', 0.35);
    var geo = new THREE.TubeGeometry(curve, Math.max(8, points.length * 14), radius, 8, false);
    var m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: color, emissive: emissive || 0x000000, emissiveIntensity: 0.3 }));
    m.scale.y = 0.22; m.position.y = 0.06;
    return m;
  }

  function build() {
    data = window.SGKRpg.mapData();
    card.hidden = true;
    if (world) scene.remove(world);
    world = new THREE.Group(); scene.add(world);
    pads = []; clouds = []; flags = []; marker = null; pet = null; grow = null;
    if (!data) { host.hidden = true; return; }
    host.hidden = false;

    var L = layout(data), here = null, revealed = 0, lastSeg = null;
    L.forEach(function (Z, idx) {
      var style = ZONE_STYLE[Z.zi] || ZONE_STYLE[2], rand = rng(101 + Z.zi * 7919);
      var all = Z.nodes.concat(Z.sides);
      all.forEach(function (n, i) { disc(world, n.x, n.z, n.s.main ? 6.6 : 5.2, style, 31 + i * 17 + Z.zi * 101); });
      disc(world, Z.boss.x, Z.boss.z, 7.4, style, 977 + Z.zi);
      var route = Z.nodes.concat([Z.boss]), placed = all.concat([Z.boss]).map(function (n) { return { x: n.x, z: n.z, r: PAD_R + 1.4 }; });
      placed[placed.length - 1].r = 4.6;
      all.forEach(function (n) {
        for (var tries = 0, put = 0; tries < 8 && put < 3; tries++) {
          var ang = rand() * 6.28, dist = 3.4 + rand() * 2.4, px = n.x + Math.cos(ang) * dist, pz = n.z + Math.sin(ang) * dist;
          if (nearLine(route, px, pz) < 2.6) continue;
          if (placed.some(function (q) { var dx = q.x - px, dz = q.z - pz; return dx * dx + dz * dz < q.r * q.r; })) continue;
          placed.push({ x: px, z: pz, r: 1.5 }); put++;
          prop(world, Z.zi, px, pz, style, rand);
        }
      });

      var name = textSprite('ZONE ' + (Z.zi + 1) + '　' + Z.z.zh, { size: 52, scale: 3, bg: 'rgba(20,21,26,.82)', stroke: 0 });
      name.position.set((Z.x0 + Z.boss.x) / 2, 1.5, 14); world.add(name);

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
        addPad(n, T('支', 'S'), style, true);
        if (n.s.here) here = n;
      });
      if (Z.boss.shown) { line.push(Z.boss); addBoss(Z, style); } else cloud(world, Z.boss.x, Z.boss.z, 3.4);
      if (line.length > 1) { var t = tube(line, 0.75, 0xf6d36b, 0xd99a1a); world.add(t); lastSeg = { mesh: t, n: line.length }; }
      if (Z.z.done && L[idx + 1]) {                           // bridge to the next island
        var nx = L[idx + 1].nodes[0] || L[idx + 1].boss;
        world.add(tube([Z.boss, { x: (Z.boss.x + nx.x) / 2, z: (Z.boss.z + nx.z) / 2 + 3 }, nx], 0.6, 0xffffff, 0x12b5e5));
      }
    });

    addElites(L);
    var sr = rng(4242);
    for (var sx = L[0].x0 - 40; sx <= L[L.length - 1].x1 + 40; sx += 13) { seaCloud(world, sx, 10 + sr() * 14, 5 + sr() * 3, sr); seaCloud(world, sx + 6, -22 - sr() * 18, 5 + sr() * 3, sr); }

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
    // wide screens frame the whole current island; narrow screens follow the player
    var homeZ = L.filter(function (Z) { return at.x >= Z.x0 - 1 && at.x <= Z.boss.x + 1; })[0] || L[0];
    if (!zoomSet) { zoom = window.innerWidth < 640 ? 1.3 : 1; zoomSet = true; }
    var wide = host.clientWidth / Math.min(Math.max(window.innerHeight * 0.62, 340), 620) > 1.6;   // same height rule as resize()
    target.x = Math.max(bounds.min, Math.min(bounds.max, wide ? (homeZ.x0 + homeZ.boss.x) / 2 : at.x + 4)); target.z = 0;
    start();
  }

  function addPad(n, label, style, side) {
    var s = n.s, r = side ? PAD_R * 0.8 : PAD_R;
    var color = s.shell ? 0xb8bcc8 : s.cleared ? style.accent : s.here ? 0xff3d81 : 0xffffff;
    shadow(world, n.x + 0.35, n.z + 0.45, r * 1.35);
    var plinth = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.22, r * 1.32, 0.55, 10), mat(0xe7e1d3)); plinth.position.set(n.x, 0.27, n.z); plinth.userData = { stage: s }; world.add(plinth); pads.push(plinth);
    var m = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.04, 0.32, 28), new THREE.MeshLambertMaterial({ color: color, emissive: s.cleared || s.here ? color : 0x000000, emissiveIntensity: 0.28 }));
    m.position.set(n.x, 0.7, n.z); m.userData = { stage: s }; world.add(m); pads.push(m);
    var rim = new THREE.Mesh(new THREE.TorusGeometry(r * 1.02, 0.1, 6, 32), mat(0x2a2d36)); rim.rotation.x = Math.PI / 2; rim.position.set(n.x, 0.86, n.z); world.add(rim);
    var t = textSprite(s.cleared ? '✓' : label, { size: 72, scale: side ? 2 : 2.6, color: s.cleared ? '#ffffff' : '#14151a', strokeColor: s.cleared ? '#14151a' : '#ffffff' });
    t.position.set(n.x, 2.3, n.z); world.add(t);
    if (s.cleared) {
      var fx = n.x + r * 0.95, fz = n.z - r * 0.55;
      var pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 3.6, 6), mat(0x3a3d46)); pole.position.set(fx, 2.3, fz); world.add(pole);
      var knob = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), mat(0xffd45a)); knob.position.set(fx, 4.15, fz); world.add(knob);
      var tri = new THREE.Shape(); tri.moveTo(0, 0); tri.lineTo(1.5, -0.42); tri.lineTo(0, -0.84); tri.lineTo(0, 0);
      var flag = new THREE.Mesh(new THREE.ShapeGeometry(tri), new THREE.MeshLambertMaterial({ color: s.shiny ? 0x14b8a6 : 0xff5a6e, side: THREE.DoubleSide }));
      flag.position.set(fx, 4.0, fz); flag.userData.ph = n.x * 0.7; world.add(flag); flags.push(flag);
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
      sp = textSprite(done ? T('已擊敗', 'DEFEATED') : 'BOSS', { size: 60, scale: 2.4, color: done ? '#ffffff' : '#ffd23f' }); sp.position.set(b.x, 9.4, b.z);
    }
    world.add(sp);
    var tag = textSprite(Z.z.boss, { size: 48, scale: 2.2, bg: done ? 'rgba(23,166,115,.92)' : 'rgba(20,21,26,.9)', stroke: 0 }); tag.position.set(b.x, 11.6, b.z); world.add(tag);
  }

  /* Elite bosses: a dark archipelago behind the first island; under cloud until the class reaches ELITE_RANK. */
  function addElites(L) {
    var list = data.elites || [];
    if (!list.length) return;
    var dark = { ground: 0x3b3355, side: 0x1c1729 }, x0 = L[0].x0 + 2, Z0 = -33;
    var head = textSprite(T('ELITE　精英魔王', 'ELITE BOSSES'), { size: 56, scale: 3.2, bg: 'rgba(120,20,60,.9)', stroke: 0 });
    head.position.set(x0 - 12, 6, Z0); world.add(head);
    list.forEach(function (e, i) {
      var x = x0 + i * 16, z = Z0 + (i % 2) * 5;
      disc(world, x, z, 6.4, dark, 4001 + i * 37);
      if (!e.open) {
        cloud(world, x, z + 1, 2.7);
        var q = textSprite('？', { size: 96, scale: 3.2, color: '#14151a', strokeColor: '#ffffff' }); q.position.set(x, 5, z); world.add(q);
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
        sp = textSprite(e.won ? T('已擊敗', 'DEFEATED') : 'ELITE', { size: 60, scale: 2.1, color: e.won ? '#ffffff' : '#ffd23f' }); sp.position.set(x, 8.6, z);
      }
      world.add(sp);
      var tag = textSprite(e.name, { size: 48, scale: 2.1, bg: e.won ? 'rgba(23,166,115,.92)' : 'rgba(20,21,26,.9)', stroke: 0 }); tag.position.set(x, 10.6, z); world.add(tag);
    });
  }

  /* ---------- camera, render loop ---------- */
  function place() {
    var d = 56 * zoom;
    camera.position.set(target.x, d * 0.82, target.z + d * 0.74);
    camera.lookAt(target.x, 1.5, target.z - 5);
  }
  function draw() { if (renderer && scene) { place(); renderer.render(scene, camera); } }
  function frame(now) {
    if (!running) return;
    clock = now / 1000;
    if (marker) marker.position.y = marker.userData.y + Math.sin(clock * 2.4) * 0.35;
    if (pet) pet.position.y = pet.userData.y + Math.abs(Math.sin(clock * 3.1)) * 0.5;
    clouds.forEach(function (c) { c.position.x = c.userData.x + Math.sin(clock * 0.4 + c.userData.ph) * 0.8; });
    pads.forEach(function (p) { if (p.userData.spin) p.rotation.y = clock * 0.9; });
    flags.forEach(function (f) { f.rotation.y = Math.sin(clock * 2.2 + f.userData.ph) * 0.35; });
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
      card.appendChild(el('span', 'rpg-tag', s.rec ? T('推薦關卡', 'Recommended') : s.main ? T('主線關卡', 'Main stage') : T('支線關卡', 'Side stage')));
      card.appendChild(el('h3', '', s.title));
      card.appendChild(el('p', 'rpg-map3d-meta', s.shell ? T('內容準備中', 'Coming soon') : (s.cleared ? T('已通關', 'Cleared') : s.started ? T('已讀 ' + s.read + ' / ' + s.total + ' 節', s.read + ' / ' + s.total + ' sections read') : T('共 ' + s.total + ' 節', s.total + ' sections')) + (s.quiz ? T('・有章節挑戰', ' · section challenges') : '') + T('　', ' · ') + stars));
      if (!s.shell) { var a = el('a', 'rpg-btn', s.cleared ? T('再讀一次', 'Read again') : s.started ? T('繼續', 'Continue') : T('出發', 'Start')); a.href = s.href; card.appendChild(a); }
      if (s.guard === 'ready') { var g = el('a', 'rpg-btn rpg-btn-ghost', T('挑戰守關者', 'Fight the Gatekeeper')); g.href = s.guardHref; card.appendChild(g); }
      else if (s.guard === 'wait') card.appendChild(el('p', 'rpg-map3d-meta', T('守關者明天現身', 'The Gatekeeper appears tomorrow')));
      else if (s.guard === 'won') card.appendChild(el('p', 'rpg-map3d-meta', T('守關者已擊敗', 'Gatekeeper defeated')));
    } else if (u.boss) {
      var z = u.boss;
      card.appendChild(el('span', 'rpg-tag', 'BOSS'));
      card.appendChild(el('h3', '', z.boss + (z.done ? T('（已擊敗）', ' (defeated)') : '')));
      var tail = z.done ? T('，通往下一座島的橋已經架好。', '. The bridge to the next island is built.') : !z.hasBoss ? T('。這一區還沒有題庫，通關即升階。', '. This zone has no question bank yet; clearing it ranks you up.') : z.ready ? T('。魔王現身了，擊敗牠就能升階。', '. The boss has appeared: defeat it to rank up.') : T('，全部通關後魔王現身。', '. Clear them all and the boss appears.');
      card.appendChild(el('p', 'rpg-map3d-meta', T('升階試煉：', 'Rank trial: ') + z.rankName + T('。', '. ') + (z.anyOf ? T('任選通關 ', 'Any cleared ') : T('必讀通關 ', 'Required cleared ')) + z.got + ' / ' + z.need + tail));
      if (z.hasBoss && z.weak) card.appendChild(el('p', 'rpg-map3d-meta', T('弱點：', 'Weak to: ') + z.weak + (z.weakWon ? T('（已弱點擊破）', ' (weak point broken)') : '')));
      if (z.hasBoss && (z.ready && !z.beaten || z.beaten && !z.weakWon && z.canCounter)) {
        var fb = el('button', 'rpg-btn', z.beaten ? T('弱點擊破', 'Weak-Point Break') : T('挑戰魔王', 'Fight the boss')); fb.type = 'button';
        fb.onclick = function () { card.hidden = true; window.SGKRpg.fightBoss(z.ti); };
        card.appendChild(fb);
      }
    } else if (u.elite) {
      var e = u.elite;
      card.appendChild(el('span', 'rpg-tag', 'ELITE'));
      card.appendChild(el('h3', '', e.open ? e.name + (e.won ? T('（已擊敗）', ' (defeated)') : '') : '？？？'));
      card.appendChild(el('p', 'rpg-map3d-meta', e.open ? T('針劑風險：', 'Injectable risk: ') + e.risk + T('。選打，不影響升階。', '. Optional; does not affect rank.') : T('升到「' + e.unlock + '」後現身。', 'Appears once you reach ' + e.unlock + '.')));
      if (e.open) {
        card.appendChild(el('p', 'rpg-map3d-meta', T('弱點：', 'Weak to: ') + e.weak + (e.weakWon ? T('（已弱點擊破）', ' (weak point broken)') : '')));
        if (e.needName) card.appendChild(el('p', 'rpg-map3d-meta', T('入場條件：攜帶', 'Entry: bring a ') + e.needName + (e.hasItem ? T('（已持有）', ' (you have one)') : T('（到工坊合成）', ' (craft one at the Workshop)'))));
        var eb = el('button', 'rpg-btn', !e.won ? T('挑戰', 'Fight') : !e.weakWon && e.canCounter ? T('弱點擊破', 'Weak-Point Break') : T('再戰', 'Rematch')); eb.type = 'button';
        eb.onclick = function () { card.hidden = true; window.SGKRpg.fightElite(e.id); };
        card.appendChild(eb);
      }
    }
    var x = el('button', 'rpg-map3d-x', '×'); x.type = 'button'; x.setAttribute('aria-label', T('關閉', 'Close')); x.onclick = function () { card.hidden = true; };
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
    host.setAttribute('aria-label', T('3D 闖關地圖。左右方向鍵移動，下方有相同內容的關卡列表。', '3D stage map. Use the arrow keys to move; the same stages are listed below.'));
    host.appendChild(renderer.domElement);
    card = document.createElement('div'); card.className = 'rpg-map3d-card'; card.hidden = true; host.appendChild(card);
    hint = document.createElement('p'); hint.className = 'rpg-map3d-hint'; hint.textContent = window.innerWidth < 640 ? T('拖曳・雙指縮放・點關卡', 'Drag · pinch · tap a stage') : T('拖曳移動・滾輪或雙指縮放・點關卡看內容', 'Drag to move · scroll or pinch to zoom · tap a stage for details'); host.appendChild(hint);

    scene = new THREE.Scene();
    var sky = document.createElement('canvas'); sky.width = 4; sky.height = 256;
    var sg = sky.getContext('2d'), grad = sg.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, '#6fb2ee'); grad.addColorStop(0.55, '#b9dcfb'); grad.addColorStop(1, '#eef6ff');
    sg.fillStyle = grad; sg.fillRect(0, 0, 4, 256);
    scene.background = new THREE.CanvasTexture(sky);
    scene.fog = new THREE.Fog(0xdcecff, 80, 200);
    camera = new THREE.PerspectiveCamera(38, 2, 0.5, 400);
    scene.add(new THREE.HemisphereLight(0xf4f8ff, 0x7d8fb0, 0.7));
    var sun = new THREE.DirectionalLight(0xfff0d6, 0.62); sun.position.set(-30, 60, 40); scene.add(sun);
    var rimL = new THREE.DirectionalLight(0xbfd8ff, 0.18); rimL.position.set(40, 20, -50); scene.add(rimL);
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
