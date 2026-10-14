import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import path from 'node:path';
const root=path.resolve('public/visual-guidelines');
const html=readFileSync(path.join(root,'index.html'),'utf8');
test('guide is separate, proposed and not indexed',()=>{
 assert.match(html,/noindex,nofollow/);assert.match(html,/PROPOSED v0\.8/);assert.match(html,/not a production release/);
 assert(!html.includes('sharepoint.com'));assert(!html.includes('@gmail.com'));
});
test('all local file references exist',()=>{
 for(const [,link] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(link.startsWith('#')||link.startsWith('/')||link.startsWith('http'))continue;
  assert(existsSync(path.join(root,link)),`Missing ${link}`);
 }
});
test('twenty path-based solid-color logos and no embedded raster or fonts',()=>{
 const files=readdirSync(path.join(root,'assets')).filter(f=>f.endsWith('.svg'));assert.equal(files.length,20);
 for(const f of files){const svg=readFileSync(path.join(root,'assets',f),'utf8');assert.match(svg,/<path/);assert(!/<(?:image|text|linearGradient|radialGradient|mask|filter)\b/.test(svg),f);assert.match(svg,/viewBox=/);}
});
test('font license and token values supplied',()=>{
 assert.match(readFileSync(path.join(root,'fonts/OFL.txt'),'utf8'),/SIL OPEN FONT LICENSE/);
 const tokens=JSON.parse(readFileSync(path.join(root,'assets/brand-tokens.json'),'utf8'));assert.equal(tokens.colors.teal,'#087F80');assert.equal(tokens.colors.orange,'#F39A3B');
});
test('guide exposes all nine navigation anchors',()=>{
 for(const id of ['overview','identity','logo-lab','color','type','applications','social','rules','downloads'])assert(html.includes(`id="${id}"`));
});
