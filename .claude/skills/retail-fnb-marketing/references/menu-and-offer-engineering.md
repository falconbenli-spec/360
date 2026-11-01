# Menu and Offer Engineering, Loyalty, and Franchise Funds

## Contents
- Menu item classification
- Offer design table
- Contribution check for any offer
- Limited-time item calendar
- Loyalty mechanics comparison
- Franchise marketing fund and co-op

## Menu Item Classification

Use the client's POS data for the last 8 to 12 weeks.

| Class | Popularity | Contribution per unit | Action |
|---|---|---|---|
| Star | High | High | Feature first on menus, apps, Google photos; protect quality |
| Plow-horse | High | Low | Reprice modestly, reduce cost, or pair with a high-contribution add-on |
| Puzzle | Low | High | Rename, re-describe in Arabic, add a photo, feature in content, sample it |
| Dog | Low | Low | Remove or rework |

Repeat quarterly; the classes move with seasons.

## Offer Design Table

| Purpose | Mechanic | Example (Arabic) | Measure |
|---|---|---|---|
| Fill a slow daypart | Time-bound bundle | "قهوة + كرواسون بـ [سعر] من ٢ إلى ٥ العصر" | Transactions in the daypart versus the prior 4 weeks |
| Lift ticket | Add-on or combo | "أضف حلى بـ [سعر] مع أي وجبة" | Average ticket |
| Trial a new item | Sample or launch price | "جرّب [الصنف] الجديد بـ [سعر] هذا الأسبوع" | Units and repeat purchase of the item |
| Delivery margin | Bundle built for delivery | "بوكس العائلة: [المحتوى] بـ [سعر]" | Contribution per delivery order |
| Slow days | Day-specific | "الاثنين: [الميزة]" | Day transactions |
| Loyalty push | Double points window | "نقاط مضاعفة حتى [التاريخ]" | Sign-ups and repeat rate |
| Opening | Reason to return | "استلم بطاقة ختم تبدأ بختمين" | Second-visit rate within 30 days |

Every offer is time-bound, has a code or a POS button for tracking, and passes the contribution check.

## Contribution Check for Any Offer

```
Current contribution per transaction           CB
Offer contribution per transaction             CO
Current transactions in the target window      TB
Required transactions to break even            TB × CB ÷ CO
Expected transactions (past offers; approximate) TE

Run only if TE comfortably exceeds the break-even, or if the purpose justifies a defined loss.
```

Log the result after the offer ends in `.agents/clients/<client>.md` under Learnings.

## Limited-Time Item Calendar

One limited-time item every 4 to 8 weeks keeps content, creators, and database sends supplied. For each:

| Field | Value |
|---|---|
| Item and story (why now; ingredient; season) | |
| Dates | |
| Price and contribution | |
| Photo and video assets | |
| Teaser week content | |
| Creator wave | |
| Database send (WhatsApp/SMS) | |
| App listing and Google post | |
| Target units and result | |
| Keep, repeat seasonally, or drop | |

## Loyalty Mechanics Comparison

| Mechanic | Best for | Pros | Cons |
|---|---|---|---|
| Stamp card (physical or digital) | Cafés, bakeries | Understood in one line; cheap | Weak data unless digital |
| Points in a loyalty app integrated with POS | Chains | Guest data, segmentation, repeat tracking | Cost, adoption effort |
| WhatsApp Business broadcast list | Any, early stage | High attention, fast to start | Template approval, per-message cost, needs opt-in discipline |
| SMS list | Any | Reach without app install | Deliverability and sender registration; opt-out management |
| Tiered perks (member, gold) | Premium concepts | Aspirational | Complexity |

Pick what operations can run every day. The result to track is repeat rate and visit frequency, not sign-ups.

## Franchise Marketing Fund and Co-op

**Fund structure (confirm against the franchise agreement; never assume the rate):**

| Element | Definition |
|---|---|
| Contribution | A percentage of each branch's gross sales paid to the brand fund |
| Use | National and regional campaigns, creative production, brand research, shared tools |
| Governance | Annual plan published to franchisees; quarterly spend report; a franchisee council for feedback |
| Transparency | Spend by category and by region; results against objectives |

**Co-op local campaigns:**

| Element | Definition |
|---|---|
| Eligibility | Approved local campaigns within brand templates |
| Match | The brand matches a share of local spend up to a cap |
| Approval | Local creative submitted through the kit workflow; turnaround defined |
| Reporting | Franchisee reports results with proof of spend; the brand aggregates |

**Local store marketing kit contents:**
- Google Business Profile standards and monthly checklist.
- Review response templates and escalation rules.
- Local creator brief and disclosure rules.
- Opening playbook.
- Offer templates with the contribution check.
- Social templates (Reels, stories, posts) and a content calendar skeleton.
- Brand guardrails: what franchisees may and may not do.

**Compliance audit per branch (quarterly):**

| Check | Pass / Fail |
|---|---|
| Google profile standards met | |
| Reviews replied within standard | |
| Local creative within brand guidelines | |
| Offers approved and tracked | |
| Loyalty program executed at the counter | |
| Signage and in-store media current | |
