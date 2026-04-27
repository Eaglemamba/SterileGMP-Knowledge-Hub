import json
m = json.load(open(r'C:\Users\david.kuo\SterileGMP-Knowledge-Hub\figures-manifest.json', encoding='utf-8'))
figs = [f for f in m['TR43']['figures'] if f['type'] == 'figure']
png_figs = [f for f in figs if f['file'].endswith('.png')]
jpeg_figs = [f for f in figs if f['file'].endswith('.jpeg') or f['file'].endswith('.jpg')]
labeled = [f for f in figs if 'label' in f]
captioned = [f for f in figs if f.get('caption')]
print(f'Total figures: {len(figs)}')
print(f'  .png composite: {len(png_figs)}')
print(f'  .jpeg/.jpg no composite: {len(jpeg_figs)}')
print(f'  with label: {len(labeled)}')
print(f'  with caption: {len(captioned)}')
print(f'  fallback render: {sum(1 for f in figs if f.get("render") == "fallback")}')
