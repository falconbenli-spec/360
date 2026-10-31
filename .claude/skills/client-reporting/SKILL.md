---
name: client-reporting
description: "When the agency needs to report marketing results to a client: weekly updates, monthly reports, quarterly business reviews, campaign wrap-ups, dashboards, or explaining a bad month. Also use when the user says 'monthly report,' 'write the client report,' 'weekly update for the client,' 'QBR,' 'quarterly review,' 'campaign report,' 'end of campaign report,' 'performance summary,' 'the numbers are down, how do I tell the client,' 'which KPIs should we report,' 'dashboard for the client,' 'the client doesn't read our reports,' 'executive summary,' or in Arabic 'تقرير شهري,' 'تقرير أسبوعي,' 'تقرير الحملة,' 'تقرير الأداء,' 'ملخص تنفيذي,' 'المراجعة الربعية,' 'الأرقام نزلت كيف أشرح للعميل,' 'داشبورد للعميل,' or 'العميل ما يقرأ التقارير.' Use this for any communication of results to a client. For setting up the tracking the report depends on, see analytics and conversion-tracking. For reconciling numbers that disagree between tools, see attribution. For the client relationship around the report (expectations, renewals), see account-management. For building the dashboard file itself, use the data:build-dashboard skill if available."
metadata:
  version: 1.0.0
---

# Client Reporting

You write reports that clients read, understand, and act on. A report exists to answer three questions the client has: are we on track, why or why not, and what are you doing about it. Everything else is appendix.

Before starting: read `.agents/product-marketing.md` (the agency's own context) and any client context file under `.agents/clients/<client>.md` if it exists. The client file holds the objectives, KPIs, baselines, stakeholders, and the reporting cadence agreed in the proposal. Report against those, not against whatever metrics the platforms happen to show.

## Principles

1. **Outcomes first.** The first screen of any report states the objective, the result, and the verdict (on track, behind, ahead). Impressions and reach come later, if at all.
2. **Insight → action.** Every finding is followed by what the agency did or will do. A number without a decision is noise.
3. **Honest about bad months.** A client who learns about a problem from the report trusts the agency more than one who finds it in the platform. Lead with the miss, the cause, and the fix.
4. **Few metrics, consistent over time.** Pick the KPIs once (from the proposal), report the same ones every period, and add context metrics only when they explain the KPI.
5. **Numbers in tables, meaning in prose.** Prose explains; tables hold the figures.
6. **Compare to something.** Last period, same period last year, the target, and (carefully) a benchmark. A number alone is uninterpretable.
7. **No invented benchmarks.** If an industry benchmark is not from a source you can name and date, do not state it. Compare to the client's own history and targets instead.

## Workflow

1. **Collect** the data for the period: platform exports, analytics, CRM, call tracking, sales data from the client. List sources and their dates. Flag gaps.
2. **Reconcile** obvious conflicts before writing (platform conversions vs analytics vs CRM). If they disagree materially, say which number the report uses and why (see **attribution**).
3. **Diagnose**: for each KPI, is it on target, and what drove the result? Check the client file's learnings log for known causes.
4. **Decide**: what changes next period, with owners and dates.
5. **Write** using the template in [references/monthly-report-template.md](references/monthly-report-template.md).
6. **QA** with the checklist at the end of this file.
7. **Deliver** with a short cover message and, where agreed, a call.

If the data is incomplete, write the report with the gaps marked `[DATA MISSING: source, reason, ETA]` rather than delay or estimate. Never fill a gap with a plausible number.

---

## Choose KPIs by Objective

Report three to five primary KPIs. The objective decides them. Use the dictionary in [references/kpi-dictionary.md](references/kpi-dictionary.md).

| Objective | Primary KPIs | Supporting context |
|---|---|---|
| Awareness | Reach (unique), share of search or branded search volume, video views to completion, aided recall if surveyed | Impressions, frequency, CPM |
| Lead generation | Qualified leads, cost per qualified lead, lead-to-opportunity rate | Form submissions, call volume, WhatsApp conversations, CPL |
| Ecommerce | Revenue, ROAS or MER, orders, AOV, new vs returning customers | Conversion rate, add-to-cart rate, CAC |
| App | Installs, activation rate, cost per activated user, retained users (D7/D30) | CPI, store conversion rate |
| Retention / CRM | Repeat purchase rate, email revenue, churn or lapse rate | Open and click rates, list growth |
| Brand / content | Organic sessions, rankings for target terms, engagement rate on owned content, mentions | Followers, posts published |

Rules:
- "Qualified" must be defined in the client file. If it is not, define it with the client before the first report.
- Vanity metrics (followers, likes, impressions) can appear as context, never as the headline, unless the objective is explicitly awareness and they were agreed as KPIs.
- Rate metrics divide matching windows: this month's spend over this month's results, not full-month spend over leads that arrived by mid-month.
- Report blended metrics (MER, blended CAC) alongside platform-reported ones when the client has multiple channels; platform-reported ROAS overstates in-platform contribution.

---

## Report Structure

### Weekly update (email, 10 lines)

Subject: `[Client] – ملخص الأسبوع [date range]`

1. One line: on track / behind / ahead against the monthly target, with the KPI number.
2. Three bullets: what happened (one per channel or initiative), each with a number and the action taken.
3. One line: what we need from the client this week (approvals, access, content).
4. One line: next week's focus.

No charts. No attachments unless asked. The weekly update exists to prevent surprises in the monthly report.

Worked example (lead-gen client, Arabic):

> **الموضوع:** [العميل] – ملخص الأسبوع 7–13 أكتوبر
> الحالة: على المسار. 118 عميلًا محتملًا مؤهلًا حتى اليوم مقابل مستهدف شهري 300 (39% عند 42% من الشهر).
> • قوقل: تكلفة العميل المحتمل 92 ريالًا، أقل من الأسبوع الماضي بنسبة 11% بعد إضافة الكلمات السلبية الجديدة.
> • سناب شات: إعلان الفيديو الجديد حقق ضعف نسبة النقر مقارنة بالقديم؛ حوّلنا 60% من الميزانية إليه.
> • الموقع: تم إصلاح خطأ النموذج على الجوال يوم الثلاثاء؛ كان يمنع الإرسال على بعض أجهزة أندرويد.
> نحتاج منكم: اعتماد تصاميم حملة اليوم الوطني قبل الخميس.
> الأسبوع القادم: إطلاق تجربة صفحة الهبوط الجديدة وتوسيع حملة الدمام.

Same example in English:

> **Subject:** [Client] – Week of 7–13 Oct
> Status: on track. 118 qualified leads month to date vs a 300 target (39% at 42% of the month).
> • Google: CPL 92 SAR, down 11% week on week after the new negative keywords.
> • Snapchat: the new video doubled CTR vs the old one; shifted 60% of budget to it.
> • Site: mobile form bug fixed Tuesday; it was blocking submissions on some Android devices.
> We need: National Day creative approval by Thursday.
> Next week: launch the landing page test, expand the Dammam campaign.

### Monthly report (document or deck, 8 to 15 pages)

1. **Executive summary** (one page). Objective, headline results vs target, verdict, three key insights, three actions. Written last, placed first. Bilingual when the audience is mixed.
2. **Scorecard**: the agreed KPIs, this month, last month, target, variance, trend arrow. One table.
3. **What drove the result**: the two to four factors that explain the scorecard, each with evidence and the action taken.
4. **Channel sections** (one page each, only for active channels): spend, results, what worked, what did not, what changes. Include one chart per channel at most.
5. **Creative and content**: top performers with the asset shown, bottom performers and why, what the next round tests.
6. **Audience and market observations**: anything learned about who converts, seasonality, competitor moves.
7. **Next month plan**: initiatives, owners, dates, expected effect on KPIs.
8. **Requests from the client**: approvals, access, data, decisions, with dates.
9. **Appendix**: full metric tables, methodology notes, data sources and dates.

### Quarterly business review (presentation, 45 to 60 minutes)

Use [references/qbr-outline.md](references/qbr-outline.md). The QBR looks at the quarter against the annual objectives, reviews the strategy, proposes changes to scope or budget, and sets next quarter's targets. It is also the main renewal and upsell moment (see **account-management**).

### Campaign wrap-up report

For a bounded campaign: objective, plan vs actual (budget, timeline, deliverables), results vs target, what we learned, what we would do differently, assets delivered, recommendation for next time. Add the learnings to the client file.

---

## Writing the Executive Summary

The executive summary is read by people who read nothing else. Format:

**Arabic (formal, outcome-first):**

> **الملخص التنفيذي – [الشهر]**
> الهدف: [الهدف الشهري بالأرقام].
> النتيجة: [الرقم المتحقق] ([نسبة] من المستهدف)، [أعلى/أقل] من الشهر الماضي بنسبة [X%].
> **أبرز ما حدث:** (1) [السبب الأول مع الدليل]. (2) [السبب الثاني]. (3) [السبب الثالث].
> **ما قمنا به:** [الإجراء]. **ما سنفعله الشهر القادم:** [الإجراءات مع التواريخ].
> **نحتاج منكم:** [الطلبات مع التواريخ].

**English:**

> **Executive summary – [Month]**
> Target: [monthly target in numbers]. Result: [actual] ([X%] of target), [up/down X%] vs last month.
> **What drove it:** (1) [cause with evidence]. (2) [cause]. (3) [cause].
> **What we did:** [actions]. **Next month:** [actions with dates].
> **We need from you:** [requests with dates].

Rules for the summary:
- Verdict in the first two lines. Do not make the reader hunt for whether the month was good.
- Causes are specific and evidenced ("CPL rose 30% because Snapchat CPMs rose during the last ten days of Ramadan and we held spend; see page 5"), not vague ("market conditions").
- Actions have owners and dates.
- Apply the **copywriting** AI-tell rules: no "it's not X, it's Y," no stock phrases, no exclamation marks.

---

## Explaining a Bad Month

A bad month handled well strengthens the account. A bad month hidden ends it.

1. **Say it first.** The verdict line states the miss plainly: "Leads came in at 62% of target."
2. **Separate causes into three buckets**: what the agency controlled (creative fatigue, a tracking break we missed, a late launch), what the client controlled (approvals, stock-outs, price change, site downtime), and what neither controlled (platform outage, CPM inflation, competitor promotion, public event). Attribute honestly, including to yourselves.
3. **Show you saw it early.** Reference the weekly update where it was flagged, and what was changed mid-month.
4. **Quantify the fix.** "We paused the two fatigued ad sets on the 14th; CPL in the second half was 28% lower than the first half."
5. **Commit to a specific recovery**: what changes, by when, and what the realistic target is for next month. Do not promise full recovery unless the cause is fully removed.
6. **Ask for the client-side fixes directly** when the cause is on their side, without blame: "Approvals averaged nine days this month against the three agreed. Could we agree a backup approver for August?"

Phrasing options are in [references/bad-month-phrasing.md](references/bad-month-phrasing.md).

What never goes in a report: blaming the platform without evidence, blaming the client without first checking the agency's own work, or burying the miss on page seven.

---

## Dashboards

A dashboard replaces the appendix, not the report. The report still carries the insight and the decision.

Dashboard rules:
- One screen per audience: an executive view (KPIs vs target, trend) and an operator view (channel detail).
- Same KPI definitions as the report; link each KPI to its definition.
- Show target lines on every KPI chart.
- Refresh schedule stated on the dashboard, with the data sources and their last refresh.
- Give the client view access; do not email screenshots as the primary delivery.

When building a dashboard, use the `data:build-dashboard` skill and the `dataviz` skill where available. Where data connectors exist (ad platforms, analytics, CRM through MCP tools), automate the data pull and keep a monthly manual reconciliation step.

---

## Benchmarks

Clients ask "is this good?" Answer in this order:

1. Against their target (from the proposal).
2. Against their own history (last period, same period last year).
3. Against other accounts the agency runs in the same sector, anonymized and stated as "accounts we manage in this category," only with the agency's permission.
4. Against a published benchmark, only with the source named and dated, and with the caveat that benchmarks vary by market, sector, and tracking setup.

Never state a benchmark you cannot source. "Industry average CTR is 2%" without a source is a fabrication in a client document.

---

## Automating Reports

Standardize so that monthly reporting takes hours, not days:

- A fixed data sheet per client with the KPI definitions and the sources, refreshed on a schedule.
- A report template per client built from [references/monthly-report-template.md](references/monthly-report-template.md), with placeholders for the period's figures.
- The scorecard and channel tables generated from the data sheet; the narrative written by a person (or drafted by the agent and reviewed).
- Learnings appended to `.agents/clients/<client>.md` after each report so the next month's narrative starts from known context.
- A **marketing-loops** workflow can schedule the data pull and the first draft on the first business day of the month.

---

## Reporting by Engagement Type

The structure holds; the scorecard changes.

| Engagement | Scorecard KPIs | Channel pages | Special sections |
|---|---|---|---|
| Paid media only | Spend, results, cost per result, conversion rate, MER or blended CAC | One per platform with spend share | Creative performance, search terms and audience learnings, budget pacing vs plan |
| Social media management | Reach, engagement rate, net followers (context), link clicks or DMs, community response time | One per platform | Content calendar delivered vs planned, top and bottom posts with reasons, community themes and complaints |
| SEO and content | Organic sessions (brand vs non-brand), organic conversions, target keywords in top 10 and top 3, pages published, backlinks earned | Technical, content, local, links | Ranking movements with causes, content pipeline, technical issues open and closed |
| Email, SMS, WhatsApp | Attributed revenue or leads, list growth (net), click rate, flow performance | One per flow or campaign type | Deliverability (bounces, complaints, authentication), consent and list hygiene actions |
| Full-service retainer | Three to five business KPIs from the proposal (revenue, leads, CAC) | One per active channel, short | Cross-channel insight, roadmap progress (30/60/90), scope delivered vs plan |
| Campaign (bounded) | Campaign KPI vs target, spend vs budget, deliverables vs plan | By channel in the campaign | Plan vs actual timeline, creative learnings, what to repeat and what to drop |
| Website or project | Milestones delivered vs plan, open items, risks | None | Change orders, dependencies waiting on the client, launch readiness |

Rules across types:
- A retainer report always shows what was delivered against the scope in the client file. Clients who see the deliverables count rarely dispute the fee.
- A project report is about dates and blockers, not performance, until launch.
- When several engagement types run for one client, one report with one executive summary; channel pages inside.

## Common Reporting Mistakes

- **Screenshots of platform dashboards** pasted as the report. No insight, inconsistent definitions, and the client learns to read the platform instead of the agency.
- **Platform ROAS as the headline** on a multi-channel account. Each platform claims the same sale. Lead with MER or blended CAC.
- **Vanity first.** Followers and impressions in the summary of a lead-gen account.
- **Hiding the miss.** The verdict appears on page six after good news about engagement.
- **Changing KPIs month to month.** The client cannot see a trend; it looks like the agency picks whatever went up.
- **Unsourced benchmarks.** "Industry average" with no source. If challenged, the whole report loses credibility.
- **Actions without owners or dates.** "We will optimize" is not an action.
- **The same report every month.** If the narrative could be last month's with new numbers, it is not a report.
- **Mixed windows.** Full-month spend divided by leads counted to the 25th because the CRM export was early.
- **Late.** A report that arrives on the 20th is history, not management. Agree a date (first five business days is common) and keep it.

## QA Checklist Before Sending

- [ ] Verdict in the first two lines of the executive summary
- [ ] Every KPI has this period, last period, target, and variance
- [ ] Every finding has an action with an owner and a date
- [ ] Rate metrics use matching windows
- [ ] Numbers consistent between summary, scorecard, and channel pages
- [ ] Data sources and dates listed; gaps marked, not estimated
- [ ] Any benchmark has a named, dated source
- [ ] Bad results stated plainly with causes in three buckets
- [ ] Client requests listed with dates
- [ ] Client name, period, and currency correct on every page
- [ ] Language and register match the audience (Arabic formal for executives, bilingual when mixed)
- [ ] No AI tells, no exclamation marks, no unexplained jargon
- [ ] Learnings copied to the client context file

## Output

Deliver the report (or the section asked for) in the format requested: email text for a weekly update, a markdown document for the monthly report, a slide outline for a QBR. Precede it with one line listing the data sources used and any `[DATA MISSING]` items. Follow it with the list of learnings to append to the client file.
