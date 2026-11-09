# 360 — Marketing Agency Skill Library

This repository is the working brain of 360, a marketing agency based in Saudi Arabia serving Saudi and GCC clients. It holds an agent skill library under `.claude/skills/` plus agency and client context under `.agents/`.

## How to work here

1. **Read context before acting.** `.agents/product-marketing.md` describes the agency itself (positioning, voice, services). Each client has a file at `.agents/clients/<client-slug>.md` (template in `.agents/clients/README.md`). When a request names a client, read their file first. If it does not exist, offer to create it with the `account-management` skill.
2. **Arabic first, bilingual by default.** Client-facing deliverables (copy, proposals, reports, briefs) default to Arabic with an English version when the client is bilingual. Use the `arabic-copywriting` skill for any Arabic copy and the `saudi-market` skill for anything that depends on local platforms, seasons, or regulation. Internal working notes may be in English.
3. **Route to the right skill.** Pick the narrowest skill that matches. Rough map:
   - Strategy and planning: `marketing-plan`, `marketing-audit`, `campaign-brief`, `brand-strategy`, `brand-positioning`, `product-marketing`
   - Copy and content: `copywriting`, `arabic-copywriting`, `copy-editing`, `content-strategy`, `social`, `emails`, `sms`, `whatsapp-marketing`
   - Paid media: `ads`, `ad-creative`, `ad-angles`, `hook-writer`, `paid-media-audit`, `facebook-ads-audit`, `google-ads-review`, `budget-reallocation`, `offline-media`
   - SEO and discovery: `seo-audit`, `arabic-seo`, `ai-seo`, `keyword-intent`, `keyword-expansion`, `schema`, `link-building`
   - Conversion and retention: `cro`, `conversion-funnel`, `checkout-optimization`, `onboarding`, `churn-prevention`, `referrals`
   - Measurement: `analytics`, `conversion-tracking`, `attribution`, `kpi-dashboard`, `anomaly-detection`, `cohort-analysis`, `client-reporting`
   - Sales and agency operations: `client-proposal`, `account-management`, `sales-enablement`, `objection-handling`, `pipeline-review`, `prospecting`, `cold-email`
   - Sectors: `ecommerce-marketing`, `real-estate-marketing`, `government-marketing`, `retail-fnb-marketing`, `d2c-marketing`, `b2b-brand-marketing`
   - Reputation: `public-relations`, `crisis-communications`, `brand-audit`
4. **Never invent numbers.** Benchmarks, market sizes, and performance figures must come from connected data, the client's exports, or a cited source. Label anything estimated as an estimate. Regulatory statements (PDPL, GCAM, Ministry of Commerce, REGA, CST) are pointers to verify, not legal advice.
5. **Log learnings.** When a campaign, test, or client interaction teaches something, append it to the Learnings section of the relevant client file or the agency file.

## Skill library sources

- `coreyhaines31/marketingskills` (MIT) — core marketing skills
- `arnabbagxd/brand-building-skills` (MIT) — brand strategy and identity skills
- `sidchaudhary/gtm-skills` (MIT) — paid media operations, sales, ecommerce, and analytics skills (vendor promotion removed)
- 360 original skills — Saudi/GCC market, Arabic copy and SEO, offline media, agency operations, sector playbooks, crisis communications

`skills-lock.json` tracks the externally installed skills. Update them with `npx skills update`.
