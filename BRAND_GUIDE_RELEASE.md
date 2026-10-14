# Elevate visual guide

Proposed v0.8, 2026-10-13. Public concept page at /visual-guidelines/.
No changes to the homepage or existing consumer identity assets.

20 deterministic SVGs, hand-drawn wordmark paths and outlined DM Sans descriptor.
DM Sans is self-hosted with its SIL OFL 1.1 notice. The custom wordmark is not
a complete font or a representation that trademark rights are cleared.

Build artwork: install fonttools in an isolated Python environment, then run
scripts/build-brand-assets.py from the repository. Review visual output before
packaging. The font source is Google Fonts ofl/dmsans, official upstream.

Run node --test tests/brand-guide.test.mjs. Test logo selection, reverse colors,
transparent PNG export, profile download, mobile menu and the ZIP download in
a browser. Confirm the live route after the GitHub/Cloudflare release.

The merchandise image uses built-in ImageGen with the exported stacked logo
as reference. Prompt: photorealistic premium merchandise still on warm plaster,
cream canvas tote with teal stacked logo, white cap with diamond embroidery,
teal tumbler with white symbol, folded cream tee with small wordmark, orange
coaster, daylight and natural textures. No people or extra copy. The image is
illustrative, not exact production artwork, inventory or a store photo.

Only this public design material belongs in this route. Never add internal
records, correspondence, legal files, approval evidence or credentials.
