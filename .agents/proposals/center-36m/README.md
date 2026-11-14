# Center (36-month scope) — technical proposal deck

- `center-proposal.html`: interactive version (published at https://claude.ai/artifact/QQ54NKSEZ2KAhEN37jHzmL), same order and content as the deck, with formal cover fields, table of contents and brief-mapping annex.

- `center-proposal.pptx`: 27-slide RTL Arabic deck in 3,6T identity, built from the client's 15-item scope of work, ordered like the Shihab proposal (cover, TOC, one-minute summary, 01–11, annex, closing).
- `build.js`: pptxgenjs generator. Run with `SKILL_DIR=<pptx skill dir> NODE_PATH=<dir with pptxgenjs> node build.js out.pptx`. Asset paths point at the session scratchpad; update `ASSETS` to `.agents/brand/` before rebuilding.
- Font: Alexandria (Google Fonts). Install it on the presenting machine or PowerPoint substitutes another Arabic font.

## Fill before submission
- Cover: official entity name and tender number (dashed boxes), project name exactly as in the tender booklet.
- Team slide: names, CVs and photos.

## Lessons
- pptxgenjs does not carry `rtlMode` into bullet items; set `rtlMode: true` on each bullet item or bullets render on the left in PowerPoint. The generator now checks every Arabic paragraph has `rtl="1"`.
