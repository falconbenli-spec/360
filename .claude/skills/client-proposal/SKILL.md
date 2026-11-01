---
name: client-proposal
description: "When the agency needs to qualify a lead, scope an engagement, price services, or write a proposal, pitch, quote, or RFP response for a client. Also use when the user says 'write a proposal,' 'proposal for this client,' 'scope this,' 'how should we price this,' 'retainer or project,' 'quote,' 'pitch deck for the client,' 'respond to this RFP,' 'tender,' 'Etimad,' 'SOW,' 'scope of work,' 'change order,' 'they want it cheaper,' 'discovery call questions,' or in Arabic 'عرض سعر,' 'اكتب عرض للعميل,' 'عرض فني ومالي,' 'نطاق العمل,' 'كم نسعّر,' 'ريتينر,' 'منافسة,' 'اعتماد,' 'رد على الـ RFP,' 'العميل يبي أرخص,' or 'بريزنتيشن للعميل.' Use this for anything between first contact with a prospective client and a signed agreement. For auditing the client's current marketing before proposing, see marketing-audit. For the agency's own positioning and case studies, see product-marketing. For sales collateral such as one-pagers and objection docs, see sales-enablement. For designing the agency's own service packages and guarantees, see offers. For the campaign brief once the work is sold, see campaign-brief. For the ongoing relationship after signature, see account-management."
metadata:
  version: 1.0.0
---

# Client Proposal

You help a marketing agency turn a prospective client into a signed engagement: qualify, discover, scope, price, write, present, and follow up. The proposal is a sales document first and a planning document second. Its job is to make the client feel understood, show a credible path to their goal, and make saying yes easy.

Before starting: read `.agents/product-marketing.md` (the agency's own context: services, positioning, case studies, team, rate card, voice) and any client context file under `.agents/clients/<client>.md` if it exists. If the agency context has no rate card or standard packages, ask for them once and suggest saving them there.

## Workflow

1. **Qualify** the lead. Decide whether to invest in a proposal at all.
2. **Discover** with a structured call or questionnaire. Never write a proposal from a one-line brief.
3. **Scope** the work into deliverables with boundaries.
4. **Price** using a model that fits the client and the work.
5. **Write** the proposal from the template in [references/proposal-template.md](references/proposal-template.md).
6. **Present** it live when possible, then send the document.
7. **Follow up** on a fixed cadence and handle objections.

State which step you are on when you respond, and which inputs are missing. Missing inputs are listed as `[NEED: ...]`, never guessed.

---

## Step 1: Qualify the Lead

A proposal costs the agency real hours. Qualify before writing one. Score the lead on these five questions:

| Question | Good sign | Bad sign |
|---|---|---|
| Budget | They state a range, or their spend elsewhere implies one | "What's the cheapest option" before any discussion of goals |
| Authority | You are talking to the decision maker or their direct delegate | Three layers of approval you cannot reach |
| Need | A specific business problem with a deadline or a cost of inaction | "We want to be more active on social" with no reason |
| Timing | A trigger: launch, new funding, new leader, season, failed previous agency | "Sometime next year, just exploring" |
| Fit | Their sector and size match the agency's case studies | A category the agency has never worked in and cannot credibly learn in time |

Two or more bad signs: offer a paid audit (see **marketing-audit**) or a short discovery workshop instead of a full proposal. One bad sign: proceed, but keep the proposal lean. A lead that refuses to share any budget range gets a tiered proposal (three price points) so the price conversation happens on paper.

### Red flags that justify declining

- They are asking four or more agencies for proposals and will decide on price alone.
- They describe the previous two agencies as incompetent in the same words.
- They want performance-only pricing with no tracking in place and no willingness to install it.
- The timeline is impossible and they will not move it ("full campaign live in 5 days, approvals take a week").
- They want the proposal to include the actual strategy and creative concepts for free. Give the approach, not the deliverables.

Decline politely and leave the door open. A decline that recommends a smaller engagement often converts later.

---

## Step 2: Discovery

Run discovery before scoping. Use the question bank in [references/discovery-questions.md](references/discovery-questions.md). The minimum set:

1. What does success look like in 6 and 12 months, in numbers? (revenue, leads, sales, downloads, awareness measures)
2. What have you tried, what worked, what did not, and why do you think so?
3. Who buys from you, and who do you wish bought from you?
4. Who are the three competitors you lose to, and why?
5. What budget range are you working with for media and for services, separately?
6. Who approves work, and how long do approvals take?
7. What tracking exists today? (analytics, pixels, CRM, call tracking)
8. What is the one thing that would make this engagement a failure for you?

Record answers in the client context file (`.agents/clients/<client>.md`, template in **account-management**). The proposal's "Situation" section is written from these answers in the client's own words.

**Push for the business goal behind the marketing ask.** "We need Instagram content" usually means "sales are flat and the owner thinks Instagram is the fix." Propose against the business goal and include the ask as one component. A proposal that solves the stated ask only competes on price.

---

## Step 3: Scope

Scope is a list of deliverables, each with a quantity, a boundary, and an owner. Write every deliverable so that a stranger could tell whether it was delivered.

Weak: "Social media management."
Strong: "Instagram and Snapchat: 16 feed posts and 20 stories per month, Arabic and English, designed from client-approved monthly content calendar. Includes community replies within business hours. Excludes paid promotion, influencer fees, and video shoots."

For each deliverable capture:
- **What** (the artifact or activity) and **how many** per period
- **Included** and **excluded** (be explicit about shoots, media spend, influencer fees, tools, translation, printing)
- **Client dependencies** (approvals within N business days, access to accounts, brand assets, product information)
- **Revision rounds** (two rounds per asset is the common default; the third is billable)

Group deliverables into phases when the engagement is longer than three months: Phase 0 setup and audit, Phase 1 foundations (tracking, positioning, assets), Phase 2 campaigns, Phase 3 scale and optimize. Phasing makes the timeline believable and lets the client start smaller.

### Scope boundaries that prevent disputes

Put these in every proposal:
- Media spend is paid by the client directly to the platforms or billed at cost plus the agreed fee, and is never part of the service fee.
- Third-party costs (influencers, production crews, stock, tools, printing, event venues) are estimated separately and approved before commitment.
- Work outside the listed deliverables goes through a change order (clause language in [references/sow-terms.md](references/sow-terms.md)).
- Timelines assume approvals within the stated window. Delayed approvals shift delivery dates day for day.

---

## Step 4: Price

### Choose the pricing model

| Model | Use when | Watch out for |
|---|---|---|
| **Monthly retainer** | Ongoing work with a steady scope (content, always-on media, SEO, community) | Scope creep; define the deliverable count and the hours cap |
| **Project fee** | A bounded deliverable: website, brand identity, launch campaign, audit | Revisions and dependencies blowing the estimate; phase the payments |
| **Media fee (% of spend)** | Paid media management where spend is meaningful | Below a spend floor the % does not cover the work; set a minimum monthly fee |
| **Performance / hybrid** | Mature tracking, clear attribution, a client who shares revenue data | Never pure performance without a base fee; attribution disputes end relationships |
| **Hourly / day rate** | Consulting, workshops, overflow work | Clients buy hours and argue about them; use for small or undefined work only |

Most agency engagements are a retainer with a setup project in front of it. Propose that shape unless the client's need is clearly bounded.

### How to arrive at a number

1. **Cost-up floor.** Estimate hours per role per month (strategist, account manager, designer, copywriter, media buyer, analyst). Multiply by the agency's loaded hourly cost per role, add overhead, then the target margin. This is the floor; never go below it without cutting scope.
2. **Value check.** What is the outcome worth to the client? If the engagement credibly adds a meaningful share of their annual revenue, a fee that is a modest fraction of that is defensible. Price toward value, not away from cost.
3. **Market sanity.** Compare to what the agency has charged for similar scopes and what the client is likely paying elsewhere. Do not invent competitor prices; use the agency's own history and what the client has disclosed.
4. **Package into three tiers** when the budget is unknown: a lean option that solves the core problem, the recommended option, and an extended option. Make the middle one obviously best. Name tiers by outcome, not by size ("Foundation / Growth / Scale" beats "Bronze / Silver / Gold").

Use the worksheet in [references/pricing-worksheet.md](references/pricing-worksheet.md).

### Pricing rules

- Quote in SAR for Saudi clients unless they ask otherwise, and state whether VAT (15%) is included. Default to "exclusive of VAT" and say so.
- Anchor with the recommended tier first in the presentation, not the cheapest.
- A discount is traded, never given: a longer term, a faster decision, a case study right, a smaller scope.
- Setup fees are legitimate: audits, tracking, account structure, brand foundations are real work done once.
- Payment terms: monthly in advance for retainers; 40/40/20 or 50/50 for projects; a deposit before any production costs are incurred.

---

## Step 5: Write the Proposal

Use [references/proposal-template.md](references/proposal-template.md). Structure:

1. **Cover**: client name, project name, date, validity period (30 days is standard).
2. **Situation** (نظرة على الوضع الحالي): what we heard, in their words. Two to four short paragraphs. This section wins or loses the proposal because it proves listening.
3. **Objectives** (الأهداف): numbered, measurable, with a time frame. Tie each to the business goal.
4. **Approach** (المنهجية): the strategy in plain language. Why this channel mix, why this sequence. Enough to be credible, not enough to execute without you.
5. **Deliverables and scope** (نطاق العمل): the table from Step 3, grouped by phase.
6. **Timeline** (الجدول الزمني): phases with weeks, milestones, and client approval points.
7. **Team** (فريق العمل): names, roles, one line of relevant experience each. Clients buy people.
8. **Measurement** (القياس والتقارير): KPIs, reporting cadence, dashboard access (see **client-reporting**).
9. **Investment** (الاستثمار): tiers or single fee, what each includes, payment terms, VAT note, what is excluded.
10. **Why us** (لماذا نحن): two or three case studies with a number each, chosen for similarity to this client. Pull from `.agents/product-marketing.md`.
11. **Terms** (الشروط): term, notice, IP, confidentiality, change orders. Summary here, full clauses in the agreement.
12. **Next steps** (الخطوة التالية): exactly what happens when they say yes, with dates.

### Writing rules

- Lead every section with the client, not the agency. "Your Q4 campaign needs to..." before "We will...".
- Match the client's language. Saudi corporate and government clients usually expect Arabic as the primary language with English technical terms; startups and multinationals often prefer English with Arabic headings. Ask if unclear. Bilingual headings are the safe default.
- Specific over impressive. "Build a 3-stage lead nurture with 9 emails" beats "holistic lifecycle strategy."
- No fabricated results. If a case study number cannot be verified, describe the work and the direction of the result without the number.
- Apply the **copywriting** skill's AI-tell rules: no "it's not X, it's Y," no negation lists, no stock openers.
- Keep it short. Ten to fifteen pages for a retainer proposal; a quote for a small project is one page.

### Arabic executive summary example

Use this register for Saudi corporate clients: formal, direct, outcome-first.

> **الملخص التنفيذي**
> تهدف شركة [العميل] إلى مضاعفة الطلبات الواردة من القناة الرقمية خلال 12 شهرًا مع خفض تكلفة الاكتساب. يقترح هذا العرض برنامجًا من ثلاث مراحل: تأسيس القياس والهوية الرقمية خلال الشهر الأول، ثم إطلاق حملات الاستحواذ على قوقل وسناب شات وتيك توك، ثم التوسع بناءً على البيانات. يتضمن العرض فريقًا مخصصًا، وتقارير شهرية، ولوحة متابعة مباشرة.

---

## RFP and Tender Responses

Formal RFPs (government, semi-government, large corporates) follow their own structure. Rules:

- **Answer in their order, with their numbering.** Evaluators score against a checklist. A beautiful proposal that reorders their sections loses points.
- **Separate technical and financial proposals** when required (العرض الفني والعرض المالي). Never put prices in the technical volume.
- **Compliance matrix first.** A table listing every requirement and where you address it. Mark any requirement you cannot meet and offer an alternative.
- **Mandatory documents**: commercial registration, VAT certificate, chamber of commerce membership, GOSI and Zakat certificates, Saudization (Nitaqat) status, bank letter, and for government work, registration on the Etimad platform (منصة اعتماد). Keep current copies in a shared folder and confirm validity dates before every submission.
- **Etimad basics**: government tenders in Saudi Arabia are published and submitted through Etimad. Registration requires an active commercial registration and the agency's authorized representative. Tenders have a document purchase fee, a bid bond (initial guarantee, commonly a small percentage of the bid value; verify the percentage in the tender document), and a performance bond after award. Deadlines are fixed; late submissions are rejected automatically. Read the tender's scoring weights (technical vs financial) and write to them.
- **Local content**: many government tenders weigh local content and Saudi staffing. State the agency's Saudization percentage and local production capacity where true.
- **Clarification questions** are usually allowed within a window. Use them; the answers are shared with all bidders and often reveal the real priority.

Use the checklist in [references/rfp-checklist.md](references/rfp-checklist.md).

---

## Step 6: Present

Present live before sending when the fee is meaningful. The deck mirrors the proposal:

1. What we heard (Situation)
2. Where you want to be (Objectives)
3. How we get there (Approach, one slide per phase)
4. What you get (Deliverables)
5. Who does it (Team)
6. How we measure (KPIs and reporting)
7. Investment (recommended tier first, then alternatives)
8. Proof (case studies)
9. Next steps and dates

Twenty minutes of presenting, twenty of discussion. Stop after the investment slide and ask a direct question: "Does this match what you had in mind for budget?" Silence after the price is normal; do not fill it with a discount.

Send the document the same day with a summary email that restates the three objectives and the recommended tier.

---

## Step 7: Objections and Follow-up

### Common objections

| Objection | Response |
|---|---|
| "It's more than we expected" | Ask what they expected and what drove the gap. Offer to cut scope, not price: "We can start with Foundation and add media management in month three." |
| "Another agency quoted half" | Compare scope line by line. Ask what the other proposal excludes (shoots, revisions, tracking, reporting). Do not criticize the other agency. |
| "Can we do performance-only?" | Explain the tracking and data access required, and propose a hybrid: base fee plus a bonus above an agreed target once attribution is verified for a quarter. |
| "We need to think about it" | Agree, and ask what specifically they need to decide. Offer a reference call with a current client. Set a date for the next conversation. |
| "Can you guarantee results?" | Guarantee effort, process, and transparency. Commit to specific leading indicators by date. Never guarantee rankings, sales, or followers. |
| "We want to own everything" | Agree on IP: final deliverables transfer on payment; agency tools, templates, and methods stay with the agency. |

### Follow-up cadence

- Day 1: summary email with the proposal attached.
- Day 3: a short message adding one useful thing (a relevant example, a quick insight about their site).
- Day 7: call to ask for the decision or the blocker.
- Day 14: final follow-up offering a smaller starting point or a reference call.
- After day 21 with no answer: close the loop politely, log it in the CRM, and schedule a check-in in 90 days.

Log every proposal with its tier, price, outcome, and the reason given. Review quarterly: win rate by tier, by sector, by price band. That log is how the agency's pricing improves.

---

## Proposal Variations by Service Type

The template holds; the emphasis shifts.

| Service | Lead with | Scope specifics | Pricing default | Typical trap |
|---|---|---|---|---|
| Paid media management | Tracking state and wasted spend found in the audit; the plan to fix measurement in month one | Platforms, campaign count, creative refresh cadence, landing page work included or not, reporting | Setup fee + monthly fee or % of spend with a floor | Promising ROAS before tracking is verified |
| Social media management | Content pillars and a sample month; the approval workflow | Posts and stories per platform per month, community management hours, shoots included or not, Arabic and English | Monthly retainer with a content count | Unlimited revisions and "quick" extra posts |
| SEO and content | The gap between current rankings and the commercial terms; the timeline honesty (months, not weeks) | Technical fixes list, content pieces per month, link outreach, local SEO per branch | Retainer, 6 to 12 months minimum | Guaranteeing rankings |
| Website or landing pages | Conversion problems found; the page map | Pages, languages, CMS, integrations, tracking, content provided by whom, hosting | Project fee by milestones | Content delays from the client blowing the timeline; add a content deadline clause |
| Brand and identity | The positioning problem; the process (discovery, strategy, identity, guidelines) | Deliverables list (logo system, palette, typography, templates, guidelines document), number of concepts and rounds | Project fee, phased | Endless rounds; fix the concept count and rounds |
| Campaign (seasonal or launch) | The objective and the idea process; the timeline against the date | Concepts, assets by format, production, media plan, reporting | Project fee + media fee | Starting too late for approvals and production |
| Full-service retainer | The marketing audit and the 90-day roadmap | Everything above, phased, with a monthly hours or deliverable cap | Setup project + retainer | Scope creep across departments; name the single client owner |
| Consulting or fractional CMO | The decisions the client needs made; the cadence | Days per month, deliverables (plan, reviews, hiring support), what is not included (execution) | Day rate or monthly fee | Being pulled into execution without a fee |

For government and semi-government clients, add: local content statement, Saudization figures, data residency and PDPL handling, Arabic as the contract language, and the payment cycle reality (invoices often take longer; price the cash-flow cost).

## Common Proposal Mistakes

- **Leading with the agency.** Three pages of "about us" before the client's problem. Move credentials to the end.
- **Solving the ask instead of the goal.** The client asked for Instagram; the goal was sales. Propose against sales, include Instagram as a component.
- **Vague deliverables.** "Social media management" invites disputes. Count everything.
- **No exclusions list.** Everything not listed is assumed included by the client.
- **One price with no alternative.** The client has no way to say yes at a lower number except by negotiating the same scope down.
- **Fabricated proof.** A case study number that cannot be verified ends the relationship when it surfaces.
- **Timeline without approval time.** Five client approvals at five days each is five weeks the plan did not show.
- **Sending without presenting.** A proposal read alone is judged on price. Present it.
- **No validity date.** Costs change; a proposal from last year should not bind this year's prices.
- **Forgetting VAT.** A 15% surprise at invoice time reads as dishonesty.

## Output

Deliver, in this order:
1. A one-line statement of which step you are on and what is missing (`[NEED: ...]`).
2. The document for that step (qualification notes, discovery questions, scope table, pricing worksheet, full proposal, RFP compliance matrix, or objection responses).
3. Open questions for the agency, if any, in a short list.

Write the proposal in the client's preferred language with bilingual headings. When the language is unknown, default to Arabic headings with English body text and say so.
