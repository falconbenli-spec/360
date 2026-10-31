# Measurement and Compliance

## Contents
- Event tracking plan
- Attribution rules
- Report structure
- Compliance checklist (verify with the client's legal team)
- Claims that need a basis

## Event Tracking Plan

Set up and verify before launch (see conversion-tracking for implementation):

| Event | Where it fires | Parameters | Sent to |
|---|---|---|---|
| whatsapp_click | Landing page, ads | source, campaign, unit_type | GA4, Meta, Snap, TikTok, Google Ads |
| call_click | Landing page, ads | source, campaign | Same |
| lead_form_submit | Landing page, lead forms | source, campaign, budget_band, timeline | Same, plus CRM |
| brochure_download | Landing page | source | GA4 |
| visit_booked | Booking tool | source, agent | GA4, CRM, ad platforms as a higher-value conversion |
| qualified (offline) | CRM | source | Uploaded to Google Ads and Meta as offline conversions where possible |
| reservation (offline) | CRM | source, unit | Uploaded as offline conversions |

Use a call-tracking number pool per channel so calls attribute. Use a distinct WhatsApp pre-fill code per channel and campaign so the CRM can attribute WhatsApp leads.

## Attribution Rules

- The CRM is the source of truth for leads, qualified leads, visits, and reservations.
- Platform-reported leads are compared to CRM leads weekly; gaps are investigated (duplicate submissions, spam, untracked WhatsApp).
- A lead's source is its first recorded touch; a reservation is credited to the lead's source. Discuss multi-touch only when the client's data supports it (see attribution).
- Broker-referred leads are credited to the broker when registered first; the rule is in the broker agreement.

## Report Structure (weekly during launch)

1. Headline: site visits and reservations this week versus target.
2. Funnel table by channel: spend, leads by capture type, qualified, visits, costs.
3. Speed to lead and follow-up compliance.
4. Creative by angle: cost per qualified lead.
5. Lost-lead reasons and what changes.
6. Availability and price-list changes; scarcity claims re-verified.
7. Compliance status.
8. Next week's actions and budget moves.

Monthly: add the model-versus-actual update, cumulative sales attributed, and lessons logged to `.agents/clients/<client>.md`.

## Compliance Checklist

Ask the client's legal team to confirm each item; the agency does not interpret regulations.

| Item | Status (confirmed / MISSING) | Note |
|---|---|---|
| Real Estate General Authority (REGA) licence for the advertiser or broker | | Licence number displayed on ads and pages as required |
| Advertisement licence number on each ad and listing where required | | Check current REGA rules for display requirements |
| Wafi off-plan sales permit (for off-plan projects) | | Permit reference displayed where required |
| Sakani eligibility statements only when confirmed | | |
| Financing and instalment figures based on a named partner's confirmed terms | | Assumptions stated |
| Price inclusive/exclusive statements (VAT, real estate transaction tax) verified | | |
| Scarcity and "last units" claims verified against live availability weekly | | |
| No promised yields, appreciation, or guaranteed returns | | |
| Renderings labelled as illustrative where they differ from delivered specifications | | |
| Personal data collection (forms, WhatsApp) aligned with the Personal Data Protection Law; consent for marketing messages | | SDAIA guidance; verify |
| Marketing messages (SMS, WhatsApp) sent through licensed channels with opt-out | | |

## Claims That Need a Basis

| Claim type | Allowed when | Otherwise |
|---|---|---|
| "ابتداءً من X ر.س" | At least one unit at that price is available now | Update or remove |
| "X ر.س شهرياً" | Based on a named partner's terms, assumptions stated | Replace with the payment plan table |
| "عائد استثماري X%" | Documented, lawful basis the client provides in writing | Do not use; use location fundamentals instead |
| "تسليم [تاريخ]" | Contractual delivery date | Say "متوقع" and state the quarter |
| "الأكثر مبيعاً" / "الأفضل" | Verifiable data | Replace with a specific fact |
| "[N] وحدة متبقية" | Live availability verified this week | Remove |
