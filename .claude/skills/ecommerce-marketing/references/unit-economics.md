# Unit Economics Worksheet

Fill with the client's numbers. Where a number is unknown, write MISSING and give the client the question to answer; do not estimate.

## Contents
- Per-order contribution
- Break-even and target ROAS
- Customer lifetime value horizon
- Payment method cost table
- Cash-on-delivery adjustment
- Promotion impact check
- Worked example (illustrative numbers only)

## Per-Order Contribution

| Line | Amount (SAR) | Source |
|---|---|---|
| Average order value (incl. VAT) | | Store orders, last 90 days |
| less VAT (if the client reports net) | | Finance |
| less cost of goods sold | | Finance, per category if it varies |
| less payment fee (weighted by method mix) | | Gateway statements |
| less shipping cost not charged to customer | | Carrier invoices ÷ orders |
| less packaging and handling | | Operations |
| less expected return cost (return rate × cost per return) | | Returns log |
| less platform or app fees per order (if any) | | Platform invoices |
| **= Contribution per order** | | |

Compute per category when margins differ widely; a blended number hides the products that lose money on ads.

## Break-even and Target ROAS

```
Break-even ROAS  = AOV ÷ contribution per order
Target ROAS      = AOV ÷ (contribution per order − desired profit per order)
Max CPA (first order, no repeat) = contribution per order − desired profit per order
```

Report ROAS on revenue including VAT only if the ad platforms are receiving VAT-inclusive values; otherwise align both. State which basis is used in every report.

## Customer Lifetime Value Horizon

Only use repeat purchases to justify a lower first-order ROAS when the store has the data:

| Measure | Value | Source |
|---|---|---|
| Share of customers who order a second time within 90 days | | Cohort report |
| Average orders per customer over 12 months | | Cohort report |
| Contribution per customer over the chosen horizon | | Orders × contribution |
| Horizon the client can finance (days of cash) | | Client finance |

```
Allowable cost per new customer = contribution per customer over horizon − desired profit
```

If the store is younger than the horizon, state that the LTV is a projection and set a conservative allowable cost (for example, assume no repeat) until a cohort matures.

## Payment Method Cost Table

Fill from the client's gateway and BNPL contracts. Fees differ by provider and contract; never quote from memory.

| Method | Fee structure (fill) | Share of orders | Notes |
|---|---|---|---|
| Mada | | | Typically the lowest card fee in Saudi; verify |
| Visa / Mastercard | | | |
| Apple Pay | | | Usually routed through the card scheme |
| Tamara | | | Merchant fee per transaction; customer pays in instalments |
| Tabby | | | Same model; verify contract |
| STC Pay or wallets | | | |
| Cash on delivery | | | Carrier COD fee plus higher return rate; see below |

## Cash-on-Delivery Adjustment

COD orders behave differently. Track them as a separate segment:

| Measure | Prepaid | COD |
|---|---|---|
| Orders | | |
| Delivered and paid rate | | |
| Rejected or returned at door rate | | |
| Cost per failed delivery (carrier charge, repacking) | | |
| Effective contribution per COD order | | |

If COD return rates are high, options in order of preference: confirm COD orders by WhatsApp or call before dispatch; add a small COD fee shown at checkout; limit COD to order values under a threshold; offer a prepaid incentive (free shipping) instead of a COD penalty.

## Promotion Impact Check

Before any discount, fill:

| | Current | With promotion |
|---|---|---|
| AOV | | |
| Contribution per order | | |
| Orders needed to match current profit | | |
| Expected lift in orders (from past promos, labelled approximate) | | |
| Net profit change | | |

If the promotion needs more than the expected lift to break even, propose a different mechanic (bundle, threshold, gift with purchase, early access) instead.

## Worked Example

Illustrative numbers, not benchmarks:

```
AOV                               250 SAR
COGS                              110
Payment fee (blended)               6
Unrecovered shipping               12
Packaging                           3
Returns (6% × 40 SAR)               2.4
Contribution per order            116.6 SAR

Break-even ROAS   = 250 ÷ 116.6 ≈ 2.1
Target ROAS (want 40 SAR profit per order) = 250 ÷ (116.6 − 40) ≈ 3.3
Max first-order CPA = 76.6 SAR
```

If 30% of customers reorder within 90 days at the same contribution, contribution per new customer over 90 days ≈ 116.6 × 1.3 ≈ 151.6, so the allowable cost per new customer at 40 SAR target profit ≈ 111.6 SAR, which permits a prospecting ROAS closer to 2.2 on first orders. Show the client both numbers and let them choose the risk level.
