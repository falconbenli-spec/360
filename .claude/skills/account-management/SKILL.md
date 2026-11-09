---
name: account-management
description: "When the agency needs to run the client relationship after signature: onboarding a new client, kickoff, collecting account access and brand assets, setting the approval workflow, communication cadence, managing expectations, handling scope creep, difficult feedback, churn risk, renewals, upsell moments, handing an account between team members, or creating and maintaining the client context file. Also use when the user says 'onboard this client,' 'kickoff meeting,' 'what access do we need,' 'client is unhappy,' 'client keeps asking for extra work,' 'scope creep,' 'renewal is coming up,' 'client might leave,' 'client health,' 'handover the account,' 'client context file,' 'set up the client file,' or in Arabic 'عميل جديد,' 'اجتماع الانطلاق,' 'وش نحتاج من العميل,' 'العميل زعلان,' 'العميل يطلب شغل زيادة,' 'خارج النطاق,' 'تجديد العقد,' 'العميل ممكن يمشي,' 'تسليم الحساب لزميل,' or 'ملف العميل.' Use this for any question about keeping a client well served and retained. For the proposal and pricing before signature, see client-proposal. For the reports themselves, see client-reporting. For the agency's own positioning, see product-marketing. For the client's cancellation flows and their customers' churn, see churn-prevention (that skill is about the client's customers; this one is about the agency's clients)."
metadata:
  version: 1.0.0
---

# Account Management

You help the agency keep clients well served, informed, and retained. Retention is cheaper than acquisition for an agency as much as for any business, and most client losses trace to communication and expectation failures rather than to results alone.

Before starting: read `.agents/product-marketing.md` (the agency's own context) and any client context file under `.agents/clients/<client>.md` if it exists. If the client file does not exist and the task concerns a specific client, create it from the template in [references/client-context-template.md](references/client-context-template.md) as the first deliverable.

## The Client Context File

Every client has one file at `.agents/clients/<client-slug>.md`. It is the memory of the account: what the client's business is, who the stakeholders are, what was promised, what was learned. Every other agency skill (copywriting, ads, client-reporting, campaign-brief) reads it before working on that client.

Sections (full template in the reference):
1. Business overview and products
2. Audience and positioning (link to the client's own product-marketing doc if one was built)
3. Brand voice and visual rules
4. Objectives, KPIs, targets, baselines (from the proposal)
5. Scope summary and what is excluded
6. Accounts and access (where the credentials are kept, never the credentials themselves)
7. Stakeholders, roles, approval rules, preferences
8. Cadence: meetings, reports, review windows
9. Commercial: term, renewal date, fee, payment behavior
10. Health score and risk notes
11. Learnings log (dated entries)
12. Decision log (dated entries)

Keep it current. After every monthly report, QBR, or significant conversation, append to the learnings and decision logs.

---

## Onboarding a New Client

The first thirty days set the tone for the whole engagement. Goals: everything needed to work is in hand, the client knows exactly what happens when, and an early visible win lands.

### Week 1: Kickoff

Run the kickoff within five business days of signature. Agenda (60 to 90 minutes):

1. Introductions: who does what on both sides, who approves what.
2. Restate the objectives, KPIs, and targets from the proposal. Confirm them. Any change is recorded.
3. Walk the timeline: phases, milestones, approval points.
4. Access and assets: go through the checklist live (see [references/onboarding-checklist.md](references/onboarding-checklist.md)) and assign owners and dates for each item.
5. Approval workflow: who, how (tool, email, WhatsApp), within how many days, what happens if silent.
6. Communication: cadence, channels, escalation path.
7. Brand and compliance rules: sector constraints, forbidden claims, language preferences, religious and cultural sensitivities, approval for anything public.
8. Early win: agree one visible deliverable for the first two to three weeks.

Send minutes the same day. Create the client file from the minutes.

### Weeks 1 to 2: Access and assets

The access list usually blocks more launches than anything else. Chase it daily. Common items:

- Ad accounts: Meta Business Manager (partner access, not a shared login), Google Ads (manager account link), Snapchat Ads Manager, TikTok Business Center, X Ads, LinkedIn Campaign Manager
- Analytics: GA4 property (editor), Google Tag Manager (publish), Search Console, Meta Pixel and Conversions API, platform pixels
- Web: CMS access, hosting or developer contact, domain DNS contact
- CRM and lead routing: CRM user, lead notification settings, WhatsApp Business
- Social profiles: admin or partner roles, not passwords
- Store and app: Salla, Zid, Shopify, or custom store admin; App Store Connect and Play Console roles
- Brand: logo files, fonts, color codes, brand guidelines, photography, product shots, previous campaign assets
- Data: historical performance exports, customer lists where legally shareable, sales data format
- Legal: signed agreement, NDA, PDPL data processing terms, invoicing details

Rule: all accounts are owned by the client and shared with the agency through partner or user roles. The agency never creates a client's ad account under the agency's ownership. This prevents disputes at offboarding.

### Weeks 2 to 4: Foundations and first win

- Audit (see **marketing-audit**) and tracking plan (see **analytics**, **conversion-tracking**).
- Strategy presentation and sign-off.
- Deliver the early win and tell the client it landed.
- First weekly update goes out in week 2, even if it mostly reports setup progress.

### Day 30 check-in

A short call: how is the experience so far, is the cadence right, is anything unclear. Fix friction now.

---

## Communication Cadence

Default cadence for a retainer; adjust in the client file:

| Rhythm | Format | Content |
|---|---|---|
| Daily (during campaigns) | WhatsApp or Slack group | Launch confirmations, urgent issues, quick approvals |
| Weekly | 10-line email + optional 20-minute call | Status vs target, actions, requests (see **client-reporting**) |
| Monthly | Report + 45-minute call | Results, insights, plan |
| Quarterly | QBR, 60 minutes, decision maker present | Strategy, budget, scope, targets |
| Annually | Renewal meeting | Year review, next-year plan, contract |

Rules:
- Every client message gets an acknowledgment within business hours the same day, even if the answer comes later.
- Bad news goes by call first, then in writing. Never let a client discover a problem from a report or a platform.
- Keep WhatsApp for speed; keep decisions in email or a shared document so they can be found later.
- One agency voice: the account lead speaks for the team; specialists join calls but do not create side channels.

---

## Expectation Management

Most disputes come from a gap between what the client imagined and what was delivered. Close the gap early.

- **Restate the deliverables** in the kickoff and in month one's report. Clients forget proposals.
- **Set result timelines honestly**: tracking and creative take weeks before results are readable; SEO takes months. Say so at kickoff and in writing.
- **Define "done"** for each deliverable type: what the client receives, in what format, with how many revision rounds.
- **Flag dependencies before they bite**: "The launch on the 15th depends on approval by the 10th."
- **Pre-explain variance**: results fluctuate weekly; the monthly trend is what we manage to.
- **Write down every promise** made in a meeting, with a date, in the decision log.

---

## Scope Creep

Extra requests are normal and are often a sign of trust. Handle them so they stay profitable.

1. **Recognize it.** Anything not in the scope table: an extra channel, an extra deliverable, a new product line, an event, a crisis response, a "quick" design for the sales team.
2. **Say yes to the relationship, then quote the work.** "Happy to help with the event creative. It sits outside the current scope; here is what it would take and cost, and the effect on this month's deliverables."
3. **Three options**: do it as a paid add-on, swap it for something in the current scope, or schedule it for next month within scope.
4. **Small goodwill is fine, once.** A one-hour favor builds the account. Log it so the pattern is visible, and say "on us this time" so it is not assumed free.
5. **Pattern means re-scope.** Three extra requests in a quarter means the scope is wrong. Bring an updated scope and fee to the QBR.

Arabic phrasing for a polite out-of-scope response:

> يسعدنا المساعدة في هذا الطلب. هو خارج نطاق العقد الحالي، وأعددنا لكم تقديرًا سريعًا للتكلفة والوقت، مع توضيح أثره على تسليمات هذا الشهر. أي الخيارات تفضلون؟

Change order language is in **client-proposal** (`references/sow-terms.md`).

---

## Handling Difficult Feedback

When the client is unhappy with work or results:

1. **Listen fully before responding.** Let them finish. Take notes. Reflect back: "So the main issue is the tone of the Ramadan creative, and secondarily the delay."
2. **Separate the facts from the feelings.** Both matter. Acknowledge the feeling without arguing the facts in the same sentence.
3. **Own what is yours immediately.** "The delay was ours. We should have flagged it on Tuesday."
4. **Do not defend in the moment.** Get the specifics, propose a time to come back with a plan (same day or next morning).
5. **Come back with a written plan**: what changes, by when, how you will confirm it worked.
6. **Follow up after the fix.** "The revised creative went live Sunday. Here is how it is performing."
7. **Log it.** In the client file, with the cause and the fix. Patterns across clients are the agency's process debt.

If the feedback is wrong on the facts (for example, they compare platform ROAS to blended), explain gently with the numbers, in writing, after the call.

---

## Client Health Score

Score every client monthly. Rubric in [references/health-score-rubric.md](references/health-score-rubric.md). Dimensions:

- **Results**: KPIs vs target over the last three months
- **Engagement**: meeting attendance, approval speed, response time
- **Sentiment**: tone of feedback, escalations, compliments
- **Commercial**: payment timeliness, scope stability, budget direction
- **Relationship breadth**: how many stakeholders we know; is the champion still there
- **Strategic fit**: are they growing, is marketing a priority for them

Red on two or more dimensions means a save plan this month, not at renewal.

### Churn risk signals

- Approvals slow down or stop; meetings get cancelled or delegated downward
- The champion leaves or is reorganized
- A new CMO or agency "friend" appears
- Requests for raw data exports and account access lists
- "Can you send the contract?" with no context
- Payments slip for the first time
- Budget cut with no discussion of scope
- Praise disappears; feedback becomes only corrections
- A sudden request for a results summary "for the board"

### Save plays

- **Reconnect at the top**: the agency lead calls the client's decision maker. Ask directly: "How are we doing, honestly?"
- **Re-audit and re-plan**: a fresh short audit with three concrete changes, delivered free.
- **Change the team** if the relationship is the problem. A new account lead resets dynamics.
- **Re-scope to their current reality**: if budgets shrank, propose a smaller scope rather than lose the account.
- **Quantify the switching cost** factually: tracking, learnings, creative library, account structure. Do not threaten; inform.
- **Fix the actual problem.** If results are the issue, nothing else works for long.

---

## Renewals

Renewal starts 90 days before the term ends, not 2 weeks.

- **Day −90**: review the health score; fix anything red. Collect the year's results and learnings.
- **Day −60**: QBR with the decision maker. Present the year, the plan for next year, and the renewal proposal (same scope, expanded scope, or adjusted). Price changes are presented here with reasoning.
- **Day −45**: send the renewal document. Use **client-proposal** structure, shorter, leading with results delivered.
- **Day −30**: confirm or negotiate. Trades for any discount (term length, advance payment, case study).
- **Day −14**: signature. If not signed, escalate agency lead to client lead.
- **Day 0**: if renewed, a thank-you and a plan kickoff. If not, a clean offboarding (below).

Playbook with scripts in [references/renewal-playbook.md](references/renewal-playbook.md).

### Upsell and cross-sell moments

Offer more when it helps the client reach their goal, and say why:
- A channel is saturating → propose the next channel with a test budget.
- Leads are up but sales follow-up is slow → propose CRM and lead nurture work (**revops**, **emails**).
- A launch or season is coming → propose a campaign project (**campaign-brief**).
- Results are strong → propose increasing media budget with the marginal-return evidence.
- The client's website is the bottleneck → propose CRO or a rebuild (**cro**).

Present upsells in the QBR with evidence, not in a random email.

---

## Handover Between Team Members

When an account changes hands:

1. The outgoing lead updates the client file fully: stakeholders, preferences, open promises, risks, in-flight work.
2. A handover meeting between outgoing and incoming leads, with the file open.
3. Joint call with the client introducing the new lead; the outgoing lead praises the incoming one and stays available for two weeks.
4. The incoming lead sends a note within 48 hours restating the current priorities and the next three dates.
5. Agency lead checks in with the client after 30 days.

---

## Offboarding

When a client leaves, leave well. They refer, they return, they review.

- Thank them, ask for honest feedback in a short call, log the reasons.
- Transfer all account access and ownership confirmation within the agreed window.
- Export campaigns, creative, audiences, and documentation; hand over the tracking setup documentation.
- Remove agency access after handover; confirm in writing.
- Final invoice and reconciliation of any third-party costs.
- Ask for a testimonial if the relationship was good, and permission for a case study.
- Archive the client file; keep the learnings.

---

## Meeting Templates

### Weekly call (20 minutes)
1. Status vs monthly target (2 min, from the weekly email)
2. What launched or changed this week and early signals (5 min)
3. Approvals pending and anything blocked (5 min)
4. Next week's plan (3 min)
5. Client news: anything changing in the business (5 min)
Minutes: decisions and actions only, sent within two hours.

### Monthly call (45 minutes)
1. Executive summary walkthrough (10 min)
2. What drove the result and what we changed (10 min)
3. Creative and content review with the assets on screen (10 min)
4. Next month plan and requests (10 min)
5. Open discussion (5 min)

### Escalation call (30 minutes, agency lead present)
1. Restate the issue as the client sees it (client speaks first)
2. What we found and own (agency)
3. The plan with dates
4. How we will confirm it is fixed
5. Agreement on follow-up date

Arabic agenda header for client-facing invites:
> **جدول الاجتماع:** الحالة مقابل المستهدف · ما تم تنفيذه · الموافقات المطلوبة · خطة الأسبوع القادم · مستجدات من جانبكم

## Common Account Management Mistakes

- **No kickoff minutes.** Three months later nobody agrees on what was promised.
- **Chasing access by email only.** Access is a phone call and a screen-share; email requests sit for weeks.
- **Agency-owned accounts.** The client's ad account under the agency's business manager becomes a hostage situation at offboarding and damages the agency's reputation.
- **Specialists talking to the client directly without the account lead.** Mixed messages and side promises.
- **Letting approvals drift.** Every silent approval delay is accepted once and then becomes the norm. Enforce the window from month one, politely.
- **Good news only.** The client learns about problems from the platform or the report, and trusts the agency less for every surprise.
- **Treating the champion as the client.** Champions leave. Know the decision maker and at least one more stakeholder.
- **Renewal in the last two weeks.** The decision was made in month nine; the agency just did not notice.
- **Not logging learnings.** Each new team member repeats the same failed angle.
- **Offboarding badly.** Delayed handovers and withheld access end referrals and invite public complaints.

## Output

Depending on the ask, deliver one of: kickoff agenda and minutes template, the access and asset checklist with owners and dates, the client context file (new or updated), a scope-creep response with options and pricing, a difficult-feedback response plan, a health score with risks and a save plan, a renewal plan with dates, or a handover package. State which client file you read or created.
