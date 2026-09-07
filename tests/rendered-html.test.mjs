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
  assert.match(html, /A Better Way to Go Out/i);
  assert.match(html, /Functional drinks, real connection/i);
  assert.match(html, /Maitland/i);
  assert.match(html, /Estero/i);
  assert.match(html, /Your First Visit/i);
  assert.match(html, /Partnerships \+ Private Events/i);
});

test("keeps the approved visual direction and Elevate campaign photography", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(css, /--teal:\s*#087f80/i);
  assert.match(css, /--orange:\s*#f47b38/i);
  assert.match(css, /--white:\s*#ffffff/i);
  assert.match(page, /elevate-hero-campaign\.jpg/);
  assert.match(page, /elevate-first-visit\.jpg/);
  assert.match(page, /elevate-community-campaign\.jpg/);
  assert.match(page, /elevate-merch-campaign\.jpg/);
  assert.doesNotMatch(page, /\u2014/);

  await Promise.all([
    access(new URL("../public/images/elevate-hero-campaign.jpg", import.meta.url)),
    access(new URL("../public/images/elevate-first-visit.jpg", import.meta.url)),
    access(new URL("../public/images/elevate-community-campaign.jpg", import.meta.url)),
    access(new URL("../public/images/elevate-merch-campaign.jpg", import.meta.url)),
  ]);
});
