import { cp, mkdir, writeFile } from 'node:fs/promises';
import worker from '../dist/server/index.js';

const response = await worker.fetch(new Request('https://elevate.gdpbros.com/', {
  headers: { accept: 'text/html' },
}), { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } },
{ waitUntil() {}, passThroughOnException() {} });
if (!response.ok) throw new Error(`Static export failed: ${response.status}`);
const html = await response.text();
if (!html.includes('Website concept preview') || !html.includes('Kava + kratom')) {
  throw new Error('Static export did not contain the current page');
}
await mkdir('public/assets', { recursive: true });
await cp('dist/client/assets', 'public/assets', { recursive: true });
await writeFile('public/index.html', html);
console.log('Current page and client assets exported for Cloudflare.');
