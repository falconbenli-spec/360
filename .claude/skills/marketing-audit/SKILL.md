---
name: marketing-audit
description: "When the agency needs a full current-state audit of a client's or prospect's marketing: website and conversion, SEO and content, paid media accounts, social presence, email and CRM, brand and messaging, analytics and tracking integrity, and a competitor snapshot, ending in prioritized findings and a 30/60/90 roadmap. Also use when the user says 'audit this client,' 'marketing audit,' 'where are they today,' 'current state assessment,' 'what's wrong with their marketing,' 'review their accounts,' 'pre-proposal audit,' 'onboarding audit,' 'health check,' 'teardown of our client,' 'what should we fix first,' or in Arabic 'تدقيق تسويقي,' 'سوّ أوديت,' 'قيّم وضع العميل,' 'مراجعة شاملة,' 'وش المشاكل عندهم,' 'راجع حساباتهم,' 'تقييم الوضع الحالي,' 'من وين نبدأ,' or 'خطة 90 يوم.' Use this at the start of an engagement, before a proposal, or when results stall and nobody knows why. This skill orchestrates the specialist audits: it runs seo-audit for SEO, cro for pages, conversion-tracking and analytics for measurement, ads for paid accounts, competitor-profiling for competitors, and brand-audit (if installed) for brand. For the proposal that follows a pre-sale audit, see client-proposal. For the plan that follows an onboarding audit, see marketing-plan. For a single-channel deep dive, use that channel's skill directly."
metadata:
  version: 1.0.0
---

# Marketing Audit

You produce a structured, evidence-based assessment of where a client's marketing stands today, what is broken or missing, and what to fix first. The audit is the foundation for a proposal, an onboarding plan, or a turnaround. Its value is in prioritization: a client can act on five ranked findings, not fifty observations.

Before starting: read `.agents/product-marketing.md` (the agency's own context) and any client context file under `.agents/clients/<client>.md` if it exists. If the audit is for a prospect, create a minimal client file with what is known.

## Scope the Audit First

Ask or decide:

1. **Purpose**: pre-sale (to win the engagement), onboarding (to plan the first 90 days), or diagnostic (results stalled). Pre-sale audits are shorter and public-data only; onboarding audits use account access.
2. **Access**: which accounts can you see? Without access, mark sections as "external view only" and say what access would reveal.
3. **Objective**: what is the client trying to achieve? Every finding is judged against that. If unknown, audit against the most plausible objective and state the assumption.
4. **Depth**: a two-hour snapshot or a two-week full audit. Say which, and size the deliverable accordingly.

Record the scope at the top of the audit document.

### Timeboxing by depth

| Depth | Time | Areas | Output |
|---|---|---|---|
| Snapshot (pre-sale) | 2 to 4 hours | Quick tests below, public data, ad libraries, competitor glance | 4 to 6 pages, top five findings |
| Standard (onboarding) | 3 to 5 working days | All nine areas with account access | 15 to 30 pages plus appendix, roadmap |
| Deep (diagnostic or large account) | 1 to 2 weeks | All areas plus reconciliation, customer research touchpoints, sales team interviews | Full document, workshop with the client |

### Requesting access for the audit

Send the access list from **account-management**'s onboarding checklist, trimmed to what the audit needs. Script for a prospect who hesitates:

> نحتاج صلاحية "قراءة فقط" على حسابات الإعلانات وتحليلات الموقع لمدة التدقيق، ولا نحتاج كلمات مرور. الصلاحية تُمنح من حسابكم وتُلغى بضغطة زر بعد التدقيق. بدونها سيقتصر التقييم على ما يظهر للعامة، وسنوضح ذلك في التقرير.

> We need read-only access to the ad accounts and site analytics for the audit period, granted from your own accounts and revocable in one click. No passwords. Without it the assessment is limited to what is publicly visible, and the report will say so.

## Evidence Rules

- Every finding cites evidence: a URL, a screenshot description, a metric with its source and date, an account setting.
- Severity is tied to the objective: a missing schema markup is minor for a lead-gen site with no organic strategy, major for a content business.
- No fabricated metrics or benchmarks. Where you lack data, write `[NEED ACCESS: ...]` or `[NOT VERIFIED]`.
- Separate observations from recommendations. First what is, then what to do.
- Test what you can: submit the lead form, place a test order to the payment step, open the site on a phone on a slow connection, search the brand name, check the pixel with the browser tools.

---

## Audit Areas

Run each area, using the named specialist skill for depth. Score each area 1 to 5 using the rubric in [references/audit-scorecard.md](references/audit-scorecard.md).

### 1. Business and objectives (context, not scored)

From the client file or discovery: goals, audience, offer, pricing, seasonality, constraints. If the audience and positioning are unclear, that is itself a finding (see **product-marketing** and, if installed, **brand-positioning**).

### 2. Website and conversion

Use **cro** for the page analysis. Check:
- Mobile experience on a real phone: speed, layout, tap targets, Arabic rendering and RTL correctness
- Core pages: homepage, key product or service pages, pricing, contact, checkout or lead form
- Value proposition clarity in five seconds; who it is for; what to do next
- Conversion paths: forms (fields, validation, confirmation), WhatsApp buttons, phone links, booking, checkout steps
- Trust: reviews, certifications, Maroof or commercial registration where relevant, policies, security badges, real contact details
- Language: Arabic and English parity, quality of Arabic (translated feel or native), language switcher behavior
- Technical: Core Web Vitals, broken links, 404s, SSL, redirects
- Speed to lead: does the form or WhatsApp get a reply, and how fast (test it)

### 3. SEO and content

Use **seo-audit** for technical and on-page, **content-strategy** for the content gap, **ai-seo** for AI visibility. Check:
- Indexation and crawl issues, sitemap, robots, canonicals, hreflang for ar/en
- Rankings for brand and the ten most commercial non-brand terms in Arabic and English
- Content inventory: what exists, what ranks, what is thin or duplicated
- Backlink profile summary
- Local SEO: Google Business Profile for each branch, categories, reviews, Arabic and English names
- AI search presence: does the brand appear for category queries in AI assistants

### 4. Paid media accounts

Use **ads** for structure and optimization, **conversion-tracking** for the tracking layer. For each platform (Google, Meta, Snapchat, TikTok, X, LinkedIn):
- Account structure: campaigns by objective, naming, audience overlap
- Conversion actions: which are counted, are they real conversions or clicks, are they firing
- Spend distribution and obvious waste: search terms report, placements, geo (spend outside target cities), hours, broad match without negatives
- Creative: number of active ads, age, fatigue signals, formats used, Arabic creative quality
- Bidding and budgets: strategy fit for the goal and data volume
- Landing pages used and their match to the ad
- Results trend over the last 3 to 6 months with cost per result

### 5. Social presence (organic)

Use **social**. Per platform the audience uses (in Saudi usually Instagram, Snapchat, TikTok, X, and LinkedIn for B2B):
- Profile completeness, bio, link, highlights, pinned content
- Posting frequency and consistency over 90 days
- Content mix: promotional vs value vs community; formats (video share)
- Engagement rate and comment quality; response time to comments and DMs
- Visual and tone consistency with the brand
- Influencer and UGC activity observed

### 6. Email, SMS, WhatsApp, and CRM

Use **emails**, **sms**, and **revops**. Check:
- Does a CRM exist, and does marketing data reach it (source, campaign)?
- List size, growth, hygiene; consent and PDPL compliance of collection points
- Automated flows: welcome, abandoned cart, post-purchase, win-back; or none
- Sending domain authentication (SPF, DKIM, DMARC)
- Lead handling: routing, speed, follow-up sequence, lead status definitions
- WhatsApp Business setup: catalog, auto-replies, agent coverage

### 7. Brand and messaging

Use **product-marketing** and, if installed, **brand-audit** and **brand-messaging**. Check:
- Is the positioning clear and consistent across site, social, ads, and sales materials?
- Visual consistency: logo use, colors, typography across touchpoints
- Voice consistency and Arabic register
- Differentiation vs the top three competitors: can a stranger tell them apart?
- Proof: case studies, reviews, numbers, certifications in use

### 8. Analytics and tracking integrity

Use **analytics** and **conversion-tracking**. This area decides whether anything else can be measured, so weight it heavily:
- GA4: installed, configured (conversions, internal traffic filter, data retention), events matching the funnel
- GTM: container health, duplicate tags, consent handling
- Pixels and CAPI per ad platform; event match quality
- UTM discipline on campaigns, email, social links
- Call and WhatsApp lead tracking
- Dashboards or reports in use; who looks at them
- Reconciliation: do platform conversions, analytics, and CRM roughly agree? Where they diverge, why?

### 9. Competitor snapshot

Use **competitor-profiling** (short form) and **reverse-engineer-marketing** for the top one or two. For the top three competitors: positioning, channels active, estimated activity level (ads library, posting frequency), offers, reviews, SEO visibility for the shared terms. Output: where the client is behind, at par, ahead.

---

## Prioritize Findings

Collect every finding into one table, then score using the matrix in [references/prioritization-matrix.md](references/prioritization-matrix.md):

- **Impact** on the client's objective (1 to 5)
- **Effort** to fix (1 to 5, 5 = hardest)
- **Dependency**: does something else need fixing first (tracking before optimization, positioning before creative)

Priority order:
1. Anything that makes measurement impossible (tracking broken or absent). Nothing else can be judged without it.
2. High impact, low effort ("leaks": wasted spend, broken forms, missing conversion actions, no retargeting, no abandoned-cart flow).
3. High impact, high effort (positioning, site rebuild, CRM integration), sequenced into the roadmap.
4. Low impact items, listed in an appendix, not in the summary.

Limit the executive summary to the top five findings. Each: what we found, evidence, why it matters for the objective, what to do, expected effect (direction, not a fabricated number).

---

## The 30/60/90 Roadmap

Translate the prioritized findings into a roadmap:

- **Days 1 to 30: Measure and stop the leaks.** Tracking fixed, conversion actions defined, wasted spend cut, broken conversion paths repaired, quick creative refresh, lead response process fixed.
- **Days 31 to 60: Foundations.** Positioning and messaging settled, core pages improved, account restructured, automated flows live, content plan started, GBP and local SEO cleaned.
- **Days 61 to 90: Build and scale.** New campaigns on the fixed foundation, testing program running, content publishing on cadence, first full-funnel report, decide the next channel.

Each item carries an owner (agency or client), a dependency, and a measure of done.

---

## Quick Tests to Run in the First Hour

These expose the most common and most expensive problems fast. Record the result of each as evidence.

1. **Submit the lead form or WhatsApp button** with a test identity. Time the reply. No reply within a business day is a top-five finding regardless of anything else.
2. **Open the site on a phone over mobile data.** Note load time, layout breaks, Arabic text rendering, tap targets, and whether the main action is visible without scrolling.
3. **Search the brand name on Google in Arabic and English.** Check what appears: the site, GBP, reviews, competitor ads on the brand term, outdated listings.
4. **Search the three most commercial category terms** in Arabic and English. Is the client anywhere on page one? Who is?
5. **Check the ad libraries** (Meta, TikTok, Google transparency, Snapchat where available) for the client and the top three competitors. Count active ads, note formats and ages.
6. **View page source and run the browser tag tools** on the homepage and the conversion page: GA4, GTM, pixels present, firing on the conversion event.
7. **Place a test order to the payment step** or book a test appointment. Count steps, note friction, abandon and see if a recovery message arrives.
8. **Read the last thirty social posts and the comments.** Posting gaps, unanswered questions, complaints, tone drift.
9. **Check the Google Business Profile** for each branch: ownership, categories, hours, photos, review responses, Arabic and English names.
10. **Ask the sales or front-line team** what customers ask most and complain about most. Ten minutes with them often beats a day of analysis.

## Common Findings by Sector

Patterns seen often; verify each for the specific client rather than assuming.

| Sector | Frequent findings |
|---|---|
| Restaurants and F&B | Delivery-platform dependence with no owned ordering path; GBP neglected per branch; menu not indexable; Snapchat creative generic; no customer database |
| Retail and ecommerce | Platform ROAS used as truth; no abandoned-cart or post-purchase flows; product feed errors; Arabic product content thin or translated; slow mobile checkout |
| Real estate | Leads lost in WhatsApp with no CRM; speed to lead slow; project pages without pricing or availability; heavy OOH with no digital capture; no retargeting of site visitors |
| Clinics and healthcare | Claims that need regulatory review; booking friction; reviews unmanaged; location pages missing; ads disapproved for policy reasons |
| Education and training | Seasonal demand not planned in budget; long forms; no nurture between enquiry and enrollment; generic course pages |
| B2B and SaaS | Positioning unclear; LinkedIn under-used; no lead scoring or routing; form fills counted as conversions regardless of quality; English-only site in an Arabic-buying market |
| Government and semi-government | Awareness campaigns with no measurement beyond reach; inconsistent identity across platforms; comment management policies absent; bilingual parity gaps |
| Automotive | Dealer-level pages missing; lead forms without model selection; no test-drive booking tracking; creative not localized by city |

## Output Document

Use [references/audit-report-template.md](references/audit-report-template.md). Structure:

1. Cover and scope (purpose, access level, dates, objective audited against)
2. Executive summary: overall score, top five findings, the single most important recommendation
3. Scorecard: nine areas with score and one-line verdict
4. Findings by area: observations with evidence, then recommendations
5. Prioritized findings table
6. 30/60/90 roadmap
7. What we could not verify and what access would reveal
8. Appendix: full checklists, screenshots list, data exports

Length: a snapshot audit is 4 to 6 pages; a full audit 15 to 30 pages plus appendix. Write the executive summary in the client's language; for Saudi corporate clients, Arabic first with English technical terms. Apply the **copywriting** AI-tell rules; no exclamation marks, no stock openers.

### Arabic executive summary pattern

> **الملخص التنفيذي**
> التقييم العام: [X من 5]. أهم ما وجدناه: (1) [الاكتشاف الأول مع الدليل وأثره على الهدف]. (2) ... (3) ...
> التوصية الأهم: [إصلاح القياس / وقف الهدر / تثبيت التموضع] خلال الثلاثين يومًا الأولى، لأن [السبب].
> ما لم نتمكن من التحقق منه بدون صلاحيات: [القائمة].

---

## Delivery

- **Pre-sale**: present the top five findings live, hold the full detail for after signature; the audit demonstrates competence without giving away the plan. Then move to **client-proposal**.
- **Onboarding**: deliver the full document, walk through it with the client, agree the roadmap, record baselines and learnings in the client file, then move to **marketing-plan** or straight into execution.
- **Diagnostic**: focus on the areas tied to the stalled metric; deliver findings and a corrective plan; update the client file.

State at the top of your response which audit type you ran, which areas you could verify, and which skills you invoked for depth.
