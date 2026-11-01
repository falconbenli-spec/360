# Store Conversion Checklist (Saudi mobile-first)

Audit top to bottom on a mid-range Android phone over mobile data, in Arabic, as a first-time visitor. Mark each item pass / fail / n.a. with a screenshot.

## Contents
- Trust and legitimacy
- Homepage and navigation
- Collection and search
- Product page
- Cart
- Checkout
- Post-purchase
- Speed and technical
- Prioritisation grid

## Trust and Legitimacy

- Commercial registration number visible in the footer and on the about page.
- Maroof badge or equivalent verification displayed (verify the program's current status).
- Physical address or city, and a working phone or WhatsApp number with hours.
- Return and exchange policy in plain Arabic, reachable in one tap from the product page.
- Payment logos: Mada, Apple Pay, Visa/Mastercard, BNPL providers, COD if offered.
- Carrier names and delivery times by region.
- Real reviews with dates; no obviously fabricated five-star walls.

## Homepage and Navigation

- First screen says what the store sells and for whom, in Arabic, with one clear action.
- Categories reachable in one tap; no more than seven top-level items.
- Promotions bar shows one message (free shipping threshold or current offer), not three.
- Language toggle visible; Arabic default for .sa traffic.

## Collection and Search

- Filters that match how shoppers choose (size, colour, price, brand) and work on mobile.
- Sort by newest, price, best-selling.
- Search tolerant to Arabic spelling variants (ة/ه, ي/ى, hamza forms) and transliterated brand names.
- Out-of-stock items pushed down or hidden; back-in-stock alert offered.

## Product Page

- Price with VAT shown; instalment amount shown ("٤ دفعات × ١٢٥ ر.س").
- Delivery estimate to the shopper's city (or a default city) near the price.
- Add-to-cart button visible without scrolling; sticky on scroll.
- Images: product, scale, in-use, detail; video for apparel, beauty, electronics.
- Variants selectable with clear out-of-stock states.
- Size guide in centimetres for apparel; measurement instructions.
- Short specs block; long description collapsible.
- Reviews with photos, count, and recency.
- One cross-sell block, relevant.
- Questions and answers or a WhatsApp "اسألنا" link.
- No fake urgency; stock counts and timers only when true.

## Cart

- Editable quantities; remove without confirmation dialogs.
- Free-shipping threshold progress ("أضف ٤٥ ر.س للشحن المجاني") when the threshold is set above AOV.
- Discount code field present but not prominent (prominent fields send shoppers to search for codes).
- Clear "إتمام الشراء" button; secondary "متابعة التسوق".
- Cart persists across sessions and devices when logged in.

## Checkout

- Guest checkout available; account creation optional after purchase.
- Phone number first; OTP only if the gateway or fraud rules require it.
- Address form fits Saudi addresses: city, district, street, building or short address code, optional map pin; saved addresses for returning shoppers.
- Shipping options with cost and delivery time before payment.
- All payment methods on one screen; BNPL selectable without leaving the flow until the provider's own step.
- COD shown with its fee, if any, clearly.
- Order summary visible; total with VAT and shipping before the pay button.
- Error messages in Arabic that say what to fix and keep the entered data.
- Trust line near the pay button (secure payment, return policy link).
- No forced newsletter opt-in; one unticked box.

## Post-purchase

- Confirmation page with order number, delivery estimate, and WhatsApp updates opt-in.
- Confirmation message within minutes on the chosen channel.
- Shipping and delivery notifications with tracking link.
- Review request after delivery.
- Easy reorder from the account page or the delivered message.

## Speed and Technical

- Largest content paint under roughly 2.5 seconds on 4G (measure; do not assume).
- Images compressed and lazy-loaded; no autoplay video above the fold.
- Purchase event fires on the confirmation page with value, currency SAR, and order id; verified in each platform (see conversion-tracking).
- No broken Arabic rendering (reversed numbers, mixed-direction punctuation).
- 404s and redirects for discontinued products handled.

## Prioritisation Grid

Score each failed item:

| Item | Funnel step | Estimated impact (H/M/L) | Effort (H/M/L) | Owner | Order |
|---|---|---|---|---|---|

Rule of thumb: checkout failures first, then product-page trust and price clarity, then speed, then navigation and search, then homepage. Do not start with homepage redesigns.
