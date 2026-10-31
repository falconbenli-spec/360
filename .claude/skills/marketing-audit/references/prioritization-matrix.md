# Findings Prioritization Matrix

Collect every finding into one table before ranking. Score impact and effort, note dependencies, then sort.

## Scoring

**Impact on the objective (1–5)**
- 5: Directly blocks or unlocks the primary KPI (tracking absent, checkout broken, no retargeting on an ecommerce account)
- 4: Materially moves the KPI (wasted spend above a meaningful share, landing page mismatch, no lead follow-up)
- 3: Noticeable improvement (creative refresh, GBP cleanup, email welcome flow)
- 2: Incremental (schema, minor speed gains)
- 1: Cosmetic or hygiene

**Effort to fix (1–5)**
- 1: Hours, agency alone (add negatives, fix a conversion action, pin posts)
- 2: Days, agency alone (restructure campaigns, build a flow, rewrite a page)
- 3: Weeks, needs client input (positioning, new creative round, CRM fields)
- 4: One to two months, needs developer or multiple teams (CAPI, site sections, CRM integration)
- 5: Quarter or more (site rebuild, rebrand, new product content)

**Dependency**: name the finding that must be fixed first, if any. Common chains:
- Tracking → everything measured
- Positioning → messaging → creative → ads
- Conversion action definition → bidding strategy
- Lead routing → lead-gen campaigns scaling

## Ranking

1. Dependency roots first (usually tracking).
2. Then by impact ÷ effort, highest first.
3. Ties broken by speed to visible result (the client needs an early win).

## Table template

| # | Finding | Area | Evidence | Impact (1–5) | Effort (1–5) | Depends on | Priority | Owner | Phase (30/60/90) |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Google Ads conversion action counts page views as leads | Paid | Account > Conversions, action "Contact page view", 1,240 conversions vs 38 CRM leads in Sept | 5 | 1 | — | P1 | Agency | 30 |
| 2 | No abandoned-cart flow | Email | Store settings; no automation; 61% cart abandonment in GA4 Sept | 4 | 2 | #5 (consent capture) | P2 | Agency | 30 |
| | | | | | | | | | |

## Presenting priorities

- Executive summary: top five only.
- Roadmap: P1 and P2 in days 1–30; P3 in 31–60; larger items in 61–90 or later.
- Appendix: everything else, still with evidence, so nothing is lost.
