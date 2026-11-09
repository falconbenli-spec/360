# Arabic Keyword Research Method

## 1. Seed Collection

Collect seeds from five sources before touching a volume tool:

1. **Customer language**: Arabic support chats, WhatsApp conversations, reviews on Google Maps, noon, Amazon.sa, App Store and Google Play. Copy the exact phrases.
2. **Search Console**: export the last 16 months of queries, filter country = Saudi Arabia, tag each query Arabic / English / mixed.
3. **Google autocomplete in Arabic**: type the seed and each letter of the alphabet after it (الف، ب، ت...) and the common modifiers ("افضل", "سعر", "بالرياض", "كيف").
4. **People Also Ask and related searches** on Arabic SERPs, collected from a Saudi location setting (use a VPN or the tool's location parameter).
5. **Competitor Arabic pages**: titles, H1s, and FAQ questions of the top five Arabic results per seed.

## 2. Variant Expansion

For each seed, generate and record the variants:

| Variant type | Example seed: أفضل تطبيق توصيل | Notes |
|---|---|---|
| Hamza dropped | افضل تطبيق توصيل | Very common in typed queries |
| Taa marbuta as haa | سيارات مستعمله | Common; Google normalizes partly |
| Alif maqsura / yaa swap | على / علي | Normalized by Google, but tools split |
| Attached prefixes | للتوصيل، بالرياض، والتوصيل | Single tokens; include high-intent forms |
| Plural and dual | تطبيقات توصيل | Different intent sometimes (list vs single) |
| Dialect verb forms | ابغى توصيل، ابي توصيل | Lower volume, high intent, social-driven |
| Transliterated brand | هنقرستيشن / هنقر ستيشن / HungerStation | Capture all; pick one canonical for your content |
| English term in Arabic query | توصيل food، لابتوب gaming | Treat as its own cluster |
| Question forms | وش افضل تطبيق توصيل، ما هو افضل تطبيق توصيل | FAQ and AI-answer targets |

Group all variants under one cluster with one target page. Report the cluster's combined demand, not the single spelling.

## 3. Intent Classification

Assign one primary intent per cluster using the modifier lists:

- **Informational**: كيف، ما هو، وش، ليش، شرح، طريقة، معنى، الفرق بين
- **Commercial investigation**: افضل، مقارنة، مراجعة، تجربة، تقييم، بديل، vs، ايهما
- **Transactional**: سعر، اسعار، شراء، للبيع، عروض، خصم، كود خصم، تخفيضات، احجز، اطلب، توصيل، تحميل
- **Local**: بالرياض، في جدة، بالدمام، بالخبر، قريب مني، بالقرب مني، حي + district, شمال/جنوب/شرق/غرب + city
- **Navigational**: brand names and app names, "تسجيل دخول", "رقم" + brand

## 4. Language Assignment

For each cluster decide which page ranks:
- Arabic page when the query is Arabic or mixed with an Arabic head term.
- English page when the query is English (B2B tech, expats, some luxury).
- Both when the audience is split; build parity pages with hreflang and let Google choose by query language.

Do not try to rank the English page for Arabic queries by adding Arabic text to it; build the Arabic page.

## 5. Prioritization

Score each cluster on: demand (directional volume plus Search Console impressions), intent value, current rank, competition type (marketplace, publisher, brand, Maps pack), and content effort. Prioritize clusters where the top Arabic results are thin or non-local; these are the fastest wins in Saudi SERPs.

## 6. Keyword Map Template

| Cluster | Primary Arabic term | Variants | English equivalent | Intent | Target URL | Ranking language | Current rank (SA, mobile) | Competition type | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Used cars Riyadh | سيارات مستعملة للبيع بالرياض | سيارات مستعمله للبيع في الرياض؛ سيارات مستعمله الرياض | used cars for sale in Riyadh | Transactional + local | /ar/used-cars/riyadh/ | Arabic | [verify] | Classifieds (Haraj), marketplaces | High |

## 7. Tool Notes

- Google Keyword Planner: set location Saudi Arabia, language Arabic; volumes are bucketed; use for relative size.
- Google Trends: compare Arabic spellings and transliterations over 12 months, region Saudi Arabia, and check sub-region interest (Riyadh vs Makkah region vs Eastern Province).
- Semrush / Ahrefs: Saudi database exists; Arabic coverage is partial. Treat zero-volume Arabic terms as "unknown," not "no demand," when Search Console shows impressions.
- Search Console remains the most reliable Arabic demand source for an existing site.

Never present a tool's Arabic volume as a fact to a client without noting the coverage limitation.
