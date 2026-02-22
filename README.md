# AXTL

![AXTL logo](assets/logo.png)

AI eXtensible Translation Language (AXTL)

Specification: v2.3 — Generated 2026-02-22

Maintainer: Pir8 Eye Web Solutions, LLC

Overview
- AXTL is a small, extensible XML-like schema for recording AI error reports, provenance, governance, and remediation metadata.
- This repository contains a compact static reference site and the canonical JSON specification describing the tag reference for AXTL v2.3.

Files in this repo
- `index.html` — Static reference UI for the tag catalog.
- `styles.css` — Site styling.
- `script.js` — Client-side code that loads the JSON spec and renders the catalog.
- `axtl-tags.json` — Canonical JSON specification for AXTL v2.3.

Quick start — preview locally
1. Open the site directly in your browser by opening `index.html`, or run a tiny static server from the repo root:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000 in your browser
```

2. Search, download, or copy the JSON from the UI.

Editing the spec
- The canonical spec is `axtl-tags.json`. Edit tags, attributes, or version history directly in that file.
- Keep JSON formatting tidy (2-space indent). Update `spec.version`, `spec.generated`, and `versionHistory` when publishing new releases.

Contributing
- Fork the repo and create a topic branch (e.g., `feature/add-tag` or `fix/typo`).
- Update `axtl-tags.json` and, where appropriate, `index.html` or `script.js` to reflect UI changes.
- Run a local preview (see Quick start) to verify rendering and search behavior.
- Open a pull request with a clear description of changes and why they are needed.

Guidelines
- Keep changes focused and small; a single PR should aim to do one logical thing.
- For new tags: include `layer`, `name`, `purpose`, `attributes` (with types), and `children` where applicable.
- For breaking changes (schema renames or attribute type changes) include a migration note in the PR.

Changelog (high level)
- v2.3 (2026-02-22): Renamed root name from XTML → AXTL to avoid naming conflict. Root tag name is now `axtl`. Long form changed to "AI eXtensible Translation Language".
- v2.2 (2026-02-21): Rhetorical layer, pedagogical events, and reasoning taxonomy additions.

License & Code of Conduct
- This repository does not include an explicit license file. If you want this project to be open source, add a `LICENSE` file (e.g., MIT, Apache-2.0) and update the README.
- Be respectful and follow standard open-source contribution etiquette.

Questions or support
- Open an issue on this repository describing your question, bug report, or suggested improvement.

--
Generated and maintained by Pir8 Eye Web Solutions, LLC
