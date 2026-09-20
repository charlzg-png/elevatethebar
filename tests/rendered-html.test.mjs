import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete Elevate homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Meet me/i);
  assert.match(html, /Zero-proof drinks/i);
  assert.match(html, /Maitland/i);
  assert.match(html, /Estero/i);
  assert.match(html, /What(?:&apos;|')s on/i);
  assert.match(html, /First visit/i);
  assert.match(html, /Partnerships \+ Private Events/i);
  assert.match(html, /Website concept preview/);
  assert.match(html, /AI-generated concept imagery/);
  assert.match(html, /Kava \+ kratom/);
  assert.match(html, /noindex/);
  assert.doesNotMatch(html, /info@elevatesociallounge.com/);
  assert.doesNotMatch(html, /Wild berry lemonade|Pink sunset/);
});

test("all local image references resolve and guidance supports keyboard navigation", async () => {
  const html = await (await render()).text();
  const images = [...html.matchAll(/src="(\/[^"?]+\.(?:png|jpg|webp))"/g)];
  await Promise.all(images.map((match) => access(new URL(`../public${match[1]}`, import.meta.url))));
  const menu = await readFile(new URL('../app/MenuExplorer.tsx', import.meta.url), 'utf8');
  for (const key of ['ArrowRight', 'ArrowLeft', 'Home', 'End']) assert.ok(menu.includes(key));
  assert.match(menu, /hidden=\{active !== index\}/);
});

test("keeps the approved visual direction and bar-first campaign photography", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(css, /--teal:\s*#087f80/i);
  assert.match(css, /--orange:\s*#f47b38/i);
  assert.match(css, /--white:\s*#ffffff/i);
  assert.match(page, /elevate-evening-hero\.jpg/);
  assert.match(page, /elevate-event-pool\.jpg/);
  assert.match(page, /elevate-event-trivia\.jpg/);
  assert.match(page, /elevate-event-live\.jpg/);
  assert.match(page, /elevate-event-collab\.jpg/);
  assert.match(page, /elevate-first-visit\.jpg/);
  assert.doesNotMatch(page, /\u2014/);

  await Promise.all([
    access(new URL("../public/images/elevate-evening-hero.jpg", import.meta.url)),
    access(new URL("../public/images/elevate-event-pool.jpg", import.meta.url)),
    access(new URL("../public/images/elevate-event-trivia.jpg", import.meta.url)),
    access(new URL("../public/images/elevate-event-live.jpg", import.meta.url)),
    access(new URL("../public/images/elevate-event-collab.jpg", import.meta.url)),
    access(new URL("../public/images/elevate-first-visit.jpg", import.meta.url)),
  ]);
});
