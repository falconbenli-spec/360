# KPI Dictionary by Objective

Every KPI in a client report needs a written definition agreed with the client. Copy the relevant rows into `.agents/clients/<client>.md` and fill the source and the window.

## Awareness

| KPI | Definition | Source | Notes |
|---|---|---|---|
| Reach | Unique people who saw at least one impression in the period | Ad platforms (per platform; cannot be summed across platforms without overlap) | Report per platform; state that totals overlap |
| Frequency | Impressions ÷ reach | Ad platforms | Above a certain frequency, cost rises without added reach; the threshold depends on format and market |
| Video completion rate | Completed views ÷ video starts (define "complete": 100% or platform's threshold) | Ad platforms | Platforms define views differently (2s, 3s, 6s); state the definition |
| Branded search volume | Searches for the brand name and variants | Google Search Console, keyword tools | Leading indicator of awareness lift; slow-moving |
| Share of search | Brand searches ÷ category searches | Keyword tools | Needs a stable competitor set |
| Aided / unaided recall | Survey-based | Brand lift studies, surveys | Only with a real study; never estimated |

## Lead generation

| KPI | Definition | Source | Notes |
|---|---|---|---|
| Leads (raw) | Form submissions + calls + WhatsApp conversations + chat leads, deduplicated | CRM or form tool, call tracking | Deduplicate by phone/email |
| Qualified leads (MQL/SQL) | Leads meeting the client's written criteria (e.g. correct city, budget stated, decision maker) | CRM | Definition must be in the client file |
| Cost per lead (CPL) | Media spend ÷ raw leads, same window | Ad platforms + CRM | State whether agency fees are included |
| Cost per qualified lead | Media spend ÷ qualified leads | | |
| Lead-to-opportunity rate | Opportunities created ÷ qualified leads | CRM | Depends on client sales follow-up; report with follow-up time |
| Speed to lead | Time from lead creation to first contact | CRM | Client-side metric that strongly affects conversion |

## Ecommerce

| KPI | Definition | Source | Notes |
|---|---|---|---|
| Revenue | Completed orders value, excluding cancellations and returns where data allows | Store platform | State whether VAT and shipping are included |
| Orders | Completed orders | Store platform | |
| Average order value | Revenue ÷ orders | | |
| Conversion rate | Orders ÷ sessions | Analytics | Mobile vs desktop separately |
| ROAS (platform) | Platform-attributed revenue ÷ platform spend | Ad platform | Overstates; attribution windows differ by platform |
| MER / blended ROAS | Total revenue ÷ total media spend | Store + ad platforms | The honest top-line number for multi-channel accounts |
| CAC | Media spend ÷ new customers | Store + ad platforms | New customer flag required |
| New vs returning | Share of orders from first-time customers | Store platform | |
| Add-to-cart rate, checkout rate | Funnel steps ÷ sessions | Analytics | Diagnostic |

## App

| KPI | Definition | Source | Notes |
|---|---|---|---|
| Installs | First opens (not store downloads) | MMP (AppsFlyer, Adjust) or Firebase | |
| Cost per install | Spend ÷ installs | | |
| Activation rate | Users completing the defined activation event ÷ installs | MMP / analytics | Define the event with the client |
| Cost per activated user | Spend ÷ activated users | | |
| Retention D1 / D7 / D30 | Users active on day N ÷ installs in cohort | MMP / analytics | Cohort-based |
| Store conversion rate | Installs ÷ store page views | App Store Connect, Play Console | See aso |

## Retention and CRM

| KPI | Definition | Source | Notes |
|---|---|---|---|
| Repeat purchase rate | Customers with 2+ orders ÷ customers, in window | Store / CRM | |
| Email or WhatsApp attributed revenue | Revenue from sessions attributed to the channel | ESP + analytics | State attribution rule |
| Churn / lapse rate | Customers with no purchase in N days ÷ active customers at start | CRM | Define N per business |
| List growth (net) | New subscribers − unsubscribes − bounces | ESP | |
| Open rate, click rate | Standard ESP definitions | ESP | Open rates are inflated by mail privacy features; prefer clicks |

## Organic and content

| KPI | Definition | Source | Notes |
|---|---|---|---|
| Organic sessions | Sessions from organic search | Analytics | Brand vs non-brand split where possible |
| Organic conversions | Conversions from organic sessions | Analytics | |
| Keywords in top 10 | Target keywords ranking in positions 1–10 | Rank tracker | Fixed target list from the content strategy |
| Engagement rate (social) | (Reactions + comments + shares + saves) ÷ reach | Platform insights | Define per platform |
| Followers (net) | Gained − lost | Platform insights | Context only |

## Window and reconciliation rules

- Always state the period and the attribution window.
- Rate metrics divide matching windows.
- When platform and analytics numbers disagree, the report names which is used for the KPI and shows the other in the appendix.
- Changes to tracking during the period are noted in the appendix, with the date.
