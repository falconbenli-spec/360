# Bilingual (Arabic / English) Technical SEO Checklist

## URL and Structure

- [ ] One domain, language subdirectories ("/ar/", "/en/"), or a documented reason for anything else.
- [ ] Root language decided and documented (Arabic at root for Saudi consumer brands is acceptable; English at root acceptable with correct hreflang).
- [ ] Slug policy chosen site-wide (Arabic-script, transliterated, or English) and never mixed.
- [ ] Redirect map in place for any slug or structure change; 301s tested.
- [ ] No IP-based or browser-language auto-redirects; visible language switcher on every page linking to the equivalent page, not the home page.

## hreflang

- [ ] Every page in each language declares itself and all alternates.
- [ ] Codes correct: "ar", "en", or "ar-SA", "en-SA", "ar-AE" as appropriate; no invented codes like "ar-KSA".
- [ ] "x-default" present and pointing to the chosen default.
- [ ] Return links verified by crawl (missing return links invalidate the pair).
- [ ] hreflang implemented in HTML head, HTTP headers, or sitemap, not in two places with conflicts.
- [ ] Canonical on each page points to itself (same language), never cross-language.
- [ ] Non-indexable pages (noindex, 404, redirected) excluded from hreflang sets.

## HTML and Rendering

- [ ] `<html lang="ar" dir="rtl">` on Arabic pages; `lang="en" dir="ltr"` on English.
- [ ] UTF-8 charset declared; Arabic renders correctly in title tags, metas, OG tags, and schema.
- [ ] RTL CSS mirrors layout without hiding content on mobile; check off-canvas overflow.
- [ ] Open Graph and Twitter Card tags in the page's language; "og:locale" set to "ar_SA" or "ar_AR" for Arabic, "en_US" or "en_GB" for English; "og:locale:alternate" listed.
- [ ] Arabic fonts subset and preloaded; "font-display: swap"; Latin family not loaded on Arabic-only templates when unnecessary.
- [ ] Core Web Vitals measured separately for Arabic templates (home, category, product, article) on mobile.

## Sitemaps and Indexing

- [ ] Sitemap(s) include both languages with hreflang annotations, or separate sitemaps per language submitted in Search Console.
- [ ] robots.txt does not block "/ar/" assets or fonts.
- [ ] Search Console property covers both paths; international targeting checked.
- [ ] Indexed page counts per language compared against expected counts; orphaned Arabic pages found and linked.

## On-Page Parity

- [ ] Title, meta description, H1, alt text, and schema in the page's own language.
- [ ] Arabic pages carry the same core facts as English plus local detail; no thin translations.
- [ ] Internal links within language; cross-language only through the switcher.
- [ ] Breadcrumbs in the page's language with matching BreadcrumbList schema.
- [ ] Legal, privacy, and terms pages exist in both languages and are linked from both footers.

## Platform Notes

- Salla and Zid: verify current support for custom slugs, hreflang, and schema; some settings are theme-dependent. Check the store's robots and sitemap output after any theme change.
- Shopify: use Markets or a translation app; confirm hreflang is generated for "/ar" and that translated metafields populate titles and metas.
- WordPress: WPML or Polylang; disable browser-language redirect; set per-language sitemaps.
- Custom: build hreflang from a single source of truth (CMS locale mapping), not hand-edited tags.
