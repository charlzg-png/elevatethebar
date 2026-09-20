# Elevate website release

This repository publishes the guest-facing concept at https://elevate.gdpbros.com/.
It is distinct from https://www.elevatesociallounge.com/.

## Current status

September 20, 2026: a concept preview with AI-generated campaign imagery.
The page labels the imagery and links to current location channels. Search indexing
is disabled until the business approves an official launch. This is not a privacy
control: everything in public is publicly accessible.

## Update workflow

1. Get current facts from the relevant location or approved source.
2. Change public location records in content/locations.ts and approved page copy.
3. Never copy internal documents, credentials or staff records into this repository.
4. Run pnpm test and pnpm typecheck. The test command rebuilds public/index.html
   and its client assets for the existing static Cloudflare deployment.
5. Review desktop and mobile, keyboard tabs and the destination links.
6. Commit and push the reviewed source and public assets to the existing GitHub main branch.
7. Verify the live page after Cloudflare deploys. Keep the prior commit for rollback.

No unattended system currently imports emails or meeting ideas into public content.
Automatic hosting of approved changes is distinct from automatic approval of claims.

## Before official launch

Confirm current hours, menus and prices for each store, a maintained events source,
the Estero contact route, image rights and real-location photography, product wording,
business ownership of accounts, and the domain decision. Remove preview status and
noindex only as part of that approved release.

## September 20 corrections

- Replaced invented menu items with ingredient-aware ordering guidance.
- Clearly named kava and kratom instead of relying only on botanical terminology.
- Removed an unverified general inquiry email and Estero phone number.
- Marked concept scenes and stopped presenting them as scheduled events.
- Added mobile navigation, working keyboard tabs and reduced search-index ambiguity.
- Preserved the existing white, teal and orange bar-first visual direction.
