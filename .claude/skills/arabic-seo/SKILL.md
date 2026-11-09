---
name: arabic-seo
description: "When the user wants to rank, audit, or build organic search presence for Arabic-language pages or for searchers in Saudi Arabia and the GCC: Arabic keyword research, bilingual site structure, hreflang for Arabic and English, Arabic URLs and slugs, RTL technical SEO, Arabic meta titles and descriptions, Google Business Profile in Arabic, Arabic structured data, and appearing in AI answers for Arabic queries. Also use when the user mentions 'Arabic SEO,' 'Saudi SEO,' 'rank in Saudi,' 'Arabic keywords,' 'Arabic keyword research,' 'hreflang ar,' 'Arabic URLs,' 'Arabic slugs,' 'RTL SEO,' 'bilingual site SEO,' 'Google Business Profile Arabic,' 'local SEO Riyadh,' 'Arabic meta description,' 'Arabizi,' 'transliteration keywords,' 'ChatGPT Arabic answers,' or in Arabic 'سيو عربي,' 'السيو بالعربي,' 'تحسين محركات البحث,' 'نبي نطلع أول قوقل,' 'كلمات مفتاحية عربية,' 'بحث الكلمات المفتاحية,' 'الترتيب في قوقل بالسعودية,' 'روابط عربية,' 'عنوان الصفحة بالعربي,' 'وصف الميتا,' 'خرائط قوقل,' 'نشاطي التجاري,' 'الظهور في البحث,' 'محتوى عربي للسيو.' Use this for any organic search work where the language is Arabic or the market is Saudi/GCC, on top of the general skills. For the full technical and on-page audit method, see seo-audit. For AI search optimization fundamentals, see ai-seo. For structured data mechanics, see schema. For page hierarchy and navigation, see site-architecture. For writing the Arabic content itself, see arabic-copywriting. For market context, see saudi-market."
metadata:
  version: 1.0.0
---

# Arabic SEO

You are an SEO lead who has grown Arabic and bilingual sites in Saudi Arabia and the GCC. The general skills (**seo-audit**, **ai-seo**, **schema**, **site-architecture**, **programmatic-seo**) still apply. This skill adds the Arabic and Saudi layer: how Arabic searchers type, how Google handles Arabic, how bilingual sites should be built, and how local search works here.

Before starting: read `.agents/product-marketing.md` if it exists (or `.claude/product-marketing.md`, or the legacy `product-marketing-context.md`). Use it for product, audience, and market context. Ask only for what it does not cover.

## Step 1: Scope the Search Situation

Establish before recommending:

1. **Site language state**: Arabic only, English only wanting Arabic, bilingual already, or multi-country (ar-SA, ar-AE, ar-EG, en).
2. **Audience and query language**: Saudi consumers search mostly in Arabic (with dialect and transliteration variants); B2B tech, expats, and some luxury search in English. Many queries are mixed ("افضل لابتوب gaming"). Decide which language carries each intent cluster rather than defaulting to one.
3. **Platform**: Salla, Zid, Shopify, WordPress, custom. Each has different RTL and hreflang defaults and limits (Salla and Zid handle Arabic natively but constrain URL and template control; verify current capabilities).
4. **Current performance**: Google Search Console with country filter Saudi Arabia and query language split, if available. Ask for an export.
5. **Business model**: local service (Google Business Profile matters most), e-commerce (category and product pages, marketplaces competing), SaaS (English-heavy, Arabic for awareness), content (Arabic topical authority).

State the scope in two lines, then proceed.

## Step 2: Arabic Keyword Research

Arabic keyword research fails when done with English tools and assumptions. Do it this way:

**Build the seed set in four layers**
1. **MSA terms**: the dictionary form ("شراء سيارة مستعملة", "تطبيق توصيل طلبات").
2. **Dialect and colloquial forms**: how Saudis actually type ("سيارات مستعمله للبيع بالرياض", "ابغى توصيل", "وش افضل تطبيق"). Note common dropped hamza and taa marbuta spellings in queries ("مستعمله" for "مستعملة", "افضل" for "أفضل"). Google normalizes many of these but volume tools report them separately; aggregate them.
3. **Transliterations and brand forms**: brand and product names in Arabic script ("ايفون 15", "آيفون", "سناب شات", "واتساب") and in Latin inside Arabic queries ("iPhone 15 سعر"). Decide the canonical brand spelling for your content and capture the variants in body text and FAQs.
4. **Arabizi and mixed**: Latin-script Arabic ("3ard", "sa3r") is rare in search now but appears in social; English product terms inside Arabic queries are common ("gaming لابتوب", "سعر SUV").

**Morphology matters**: Arabic attaches prefixes (ال، و، ب، ل، ف، ك) and suffixes (ـات، ـين، ـه، ـها). "للبيع", "بالرياض", "والتوصيل" are single tokens that tools may miss. Google handles most of this; your keyword list should still include the attached forms that appear in high-intent queries ("شقق للايجار بالرياض").

**Tools**: Google Keyword Planner (Saudi Arabia, Arabic), Google Search Console queries, Google Trends (Saudi Arabia, compare Arabic and transliterated terms), Google autocomplete and People Also Ask in Arabic, Semrush and Ahrefs Saudi database (coverage for Arabic is thinner than English; treat volumes as directional). Verify any volume figure before quoting it to a client.

**Intent mapping in Arabic**: common intent markers
- Informational: "كيف", "ما هو", "وش", "ليش", "شرح", "طريقة", "افضل"
- Commercial: "افضل", "مقارنة", "مراجعة", "تجربة", "vs", "بديل"
- Transactional: "سعر", "اسعار", "شراء", "للبيع", "عروض", "خصم", "كود خصم", "توصيل", "احجز"
- Local: "بالرياض", "في جدة", "قريب مني", "بالقرب", "الشرقية", "حي" + district name

Deliver the keyword map as clusters: intent, primary Arabic term, variant spellings, English equivalent if the page is bilingual, target page, and whether Arabic or English should be the ranking page.

Reference: [references/arabic-keyword-research.md](references/arabic-keyword-research.md)

## Step 3: Bilingual Site Structure and hreflang

- **URL structure**: use subdirectories per language ("/ar/" and "/en/") on one domain for most sites. Separate ccTLDs or subdomains split authority and are rarely worth it unless there are separate country businesses. Decide which language sits at the root. For a Saudi consumer brand, Arabic at the root ("/" is Arabic, "/en/" is English) matches the audience; many platforms default to English at root, which is acceptable if hreflang is correct.
- **hreflang**: use language-region codes when content differs by country ("ar-SA", "en-SA", "ar-AE"), plain language codes ("ar", "en") when it does not. Add "x-default" pointing to the language-selection or the primary language page. Every page must reference itself and all its alternates; missing return links are the most common error. Validate with a crawler.
- **Do not auto-redirect by IP or browser language**; let Google crawl both versions. Offer a visible switcher.
- **Separate sitemaps per language** or one sitemap with hreflang annotations. Submit both in Search Console; use the international targeting report where available.
- **Content parity**: translated pages should carry the same core content, but Arabic pages often need more context (local proof, Saudi FAQs, regulatory lines). Do not leave Arabic as a thin translation of English; thin Arabic pages lose to Arabic-native competitors.
- **Canonical tags** point to the same-language page, never across languages.
- **Internal links**: Arabic pages link to Arabic pages; English to English. Cross-language links only through the switcher.

Reference: [references/bilingual-technical-checklist.md](references/bilingual-technical-checklist.md)

## Step 4: Arabic URLs and Slugs

Three options; pick one site-wide and document it:

| Option | Example | Pros | Cons |
|---|---|---|---|
| **Arabic-script slugs** | /ar/سيارات-مستعملة/ | Keyword match in the URL is visible to Arabic users in SERPs; Google indexes them fine | Percent-encoded when shared (long ugly strings in WhatsApp and X), some tools and analytics mangle them, CMS support varies |
| **Transliterated Latin slugs** | /ar/sayarat-mustamala/ | Clean sharing, stable tooling | Transliteration conventions vary; little ranking value; users do not read them |
| **English slugs under /ar/** | /ar/used-cars/ | Simplest to maintain; parity with English site | No Arabic keyword signal; fine for most commercial sites |

Practical default: English or transliterated slugs under "/ar/" for e-commerce and SaaS (sharing and tooling win), Arabic-script slugs for content-heavy Arabic publishers where SERP display matters. Never mix. Never change slugs on a live site without 301s and a redirect map.

## Step 5: RTL Technical SEO

- "lang" and "dir" attributes: `<html lang="ar" dir="rtl">` on Arabic pages; `lang="ar-SA"` when region-specific. Mismatched lang attributes confuse language detection.
- Charset UTF-8 everywhere, including sitemaps and feeds.
- Core Web Vitals on Arabic pages: Arabic web fonts are heavy; subset and preload the Arabic font, use "font-display: swap", and avoid loading both Latin and Arabic full families on every page. Test LCP on the Arabic home and category pages separately.
- Mirrored layout must not hide content: check that RTL CSS does not push text off-canvas on mobile; Google renders and may treat hidden text as less important.
- Images: Arabic alt text on Arabic pages, English on English pages. File names in Latin script are fine.
- Breadcrumbs and navigation in Arabic with matching BreadcrumbList schema (see **schema**).
- Pagination, faceted navigation, and filters generate the same duplicate issues as English; in Salla and Zid, check what the platform exposes and canonicalizes.
- Mixed-language pages (Arabic UI with English product names) are normal; make sure the primary language is clearly Arabic by volume and in the lang attribute.

## Step 6: On-Page Arabic Content

- **Title tags**: Arabic, primary keyword near the start, brand at the end after a separator ("|" or "-"). Keep to roughly 55 to 60 characters; Arabic characters are narrower in pixels, so a few more fit. Example: "سيارات مستعملة للبيع في الرياض | اسم المتجر".
- **Meta descriptions**: Arabic, 140 to 160 characters, with the benefit and a call to action in white Arabic ("اطلب الآن", "تصفح العروض"). Google rewrites them often; still write them.
- **Headings**: one H1 in Arabic with the primary term; H2s follow user questions in their words ("كم سعر...؟", "كيف أطلب...؟").
- **Content depth**: Arabic SERPs for commercial terms are often thinner than English, which is an opportunity; a complete Arabic page with specs, prices, FAQs, delivery details per city, and local proof can outrank marketplaces. Write it with **arabic-copywriting** (white Arabic for most pages).
- **Register for SEO**: white Arabic body with dialect forms in FAQ questions where users actually type them ("وش الفرق بين...؟"). Do not stuff misspelled variants into visible copy; mention them naturally once in FAQs or let Google normalize.
- **Entity and brand consistency**: pick one Arabic spelling of the brand and use it everywhere (site, GBP, social, directories). Inconsistent spellings fragment the entity.
- **Dates, prices, and units**: SAR with "ر.س" or "ريال", VAT-inclusive, Western numerals unless brand style says otherwise.
- **Arabic FAQs with FAQPage schema** (where Google still shows it) capture long-tail dialect queries.

## Step 7: Local SEO in Saudi Arabia

- **Google Business Profile**: create or claim with the Arabic name as primary and English as a secondary language where the interface allows; use the Saudi National Address (building number, street, district, city, postal code, additional number); choose the most specific primary category; add Arabic descriptions, Arabic posts, Arabic Q&A, products, and photos with Saudi context. Respond to reviews in Arabic.
- **Reviews**: ask customers via WhatsApp with a direct review link after delivery or service. Reply to every review. Never buy reviews; Google and the Ministry of Commerce both act on fake reviews.
- **NAP consistency**: name, address, phone identical across GBP, website footer, Maroof, Apple Maps, Snapchat and Instagram profiles, and local directories (verify which Saudi directories currently matter; many are low value).
- **City and district pages**: for multi-location services, build real pages per city with local content (hours, team, address, local proof), not doorway pages. District names in Arabic ("حي العليا", "حي الروضة") are common query modifiers.
- **Maps in Arabic**: many Saudis search Maps in Arabic for "قريب مني" (near me) terms. The business category and Arabic name drive those results.
- **Apple Maps and Snap Map**: claim listings; Snapchat's map is a discovery surface for cafes and retail among young Saudis.

Reference: [references/saudi-local-seo-checklist.md](references/saudi-local-seo-checklist.md)

## Step 8: AI Search and Answer Engines in Arabic

Apply **ai-seo** fundamentals, with these Arabic adjustments:
- AI assistants (Google AI Overviews, ChatGPT, Perplexity, Gemini) answer Arabic queries largely from Arabic-language sources, and the Arabic web is thinner, so a clear, factual Arabic page can earn citations more easily than its English equivalent.
- Write Arabic pages with direct answers near the top: a two-sentence definition or answer under the H1, then detail. Use question-form H2s in the user's words.
- Keep facts consistent across the Arabic and English versions; conflicting numbers reduce citation confidence.
- Provide "llms.txt" and clean HTML; avoid Arabic text embedded in images.
- Use Arabic entity names consistently and connect them with "sameAs" to social profiles and Wikidata where entries exist.
- Monitor Arabic brand mentions in AI answers by testing a fixed set of Arabic prompts monthly ("أفضل تطبيق توصيل في الرياض", "وش أفضل بنك رقمي بالسعودية") and logging which sources are cited.

## Step 9: Arabic Structured Data

Follow **schema** for implementation; the Arabic specifics:
- Set "inLanguage": "ar" (or "ar-SA") on WebPage and Article entities.
- Use Arabic "name" and "description" values on the Arabic pages; English on English pages. Do not duplicate English schema onto Arabic pages.
- Organization and LocalBusiness: Arabic legal name plus English alternateName; Saudi address with "addressCountry": "SA"; phone in +966 format; opening hours reflecting Friday closures or prayer-time breaks if applicable.
- Product: "priceCurrency": "SAR", VAT-inclusive price, availability, and Arabic product names; include GTIN where available.
- FAQPage and HowTo in Arabic where eligible.
- BreadcrumbList with Arabic names.
- Validate with Rich Results Test on the Arabic URLs specifically; RTL rendering does not affect schema but encoding errors do.

## Step 10: Measuring Arabic Rankings

- Search Console: filter by country (Saudi Arabia) and by page path ("/ar/"), export queries, and tag them Arabic or English and by intent. Track impressions and clicks per language separately.
- Rank tracking: set the tracker to Saudi Arabia, Arabic interface, mobile, and city-level where the tool supports it (Riyadh, Jeddah, Dammam). Arabic SERPs differ by city for local intent.
- Track both the canonical spelling and the top variants of each head term; report them as one cluster.
- Watch marketplaces (noon, Amazon.sa, Haraj for classifieds) and Maps packs as competitors in the Arabic SERP; strategy differs when the top results are marketplaces.
- Report Arabic organic conversion rate separately; it often differs from English because of audience mix and trust signals (see **saudi-market**).
- Log winning Arabic terms and content patterns in `.agents/product-marketing.md` under Learnings.

## Common Arabic SEO Mistakes

1. Machine-translated Arabic pages with no local detail; they index but do not rank or convert.
2. hreflang without return links, or pointing "ar" at an English page.
3. Auto-redirecting by IP so Googlebot (US) never sees Arabic.
4. Mixed slug policies (some Arabic, some English) and slug changes without redirects.
5. Loading full Arabic and Latin font families on every page, hurting LCP.
6. Inconsistent Arabic brand spelling across site, GBP, and social.
7. Ignoring dialect and misspelled variants in research, then wondering why "volume" looks tiny.
8. English-only schema on Arabic pages.
9. Treating Saudi as part of a "MENA" SEO plan run from Dubai with ar-AE targeting.
10. Thin city pages that are the same text with the city name swapped.

## Output Format

Deliver an **Arabic SEO Plan** or **Arabic SEO Audit** with:
1. **Scope**: languages, platform, markets, current baseline.
2. **Keyword map**: clusters with primary Arabic term, variants, intent, target page, ranking language.
3. **Structure and hreflang**: URL policy, hreflang matrix, sitemap plan, issues found.
4. **Technical RTL findings**: lang/dir, fonts and CWV, rendering, canonicals.
5. **On-page recommendations**: titles, metas, H1/H2s in Arabic for the priority pages (write them).
6. **Local SEO actions**: GBP setup, NAP, reviews, city pages.
7. **AI search and schema actions**.
8. **Measurement plan**: Search Console segmentation, rank tracking settings, KPIs by language.
9. **Prioritized roadmap**: impact, effort, owner, and what to do first.

Hand page writing to **arabic-copywriting**, technical fixes to **seo-audit**, and schema code to **schema**.

## Related Skills

- **seo-audit**: full technical and on-page audit method
- **ai-seo**: AI search optimization fundamentals
- **schema**: structured data implementation
- **site-architecture**: hierarchy, navigation, and URL planning
- **programmatic-seo**: scaled Arabic pages from data
- **arabic-copywriting**: writing the Arabic content
- **saudi-market**: audience, trust signals, and calendar
