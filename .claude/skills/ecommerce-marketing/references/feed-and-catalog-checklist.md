# Product Feed and Catalog Checklist

The feed drives Google Shopping, Performance Max, Meta and Snapchat catalog ads, and TikTok catalog ads. A weak feed caps every channel at once.

## Contents
- Feed source and sync
- Required attributes
- Arabic title formula
- Images
- Custom labels
- Platform notes (Google, Meta, Snapchat, TikTok)
- Common Saudi feed problems

## Feed Source and Sync

- One source of truth: the store platform's native feed or a feed app that reads the store directly. Avoid manual spreadsheets.
- Sync at least daily; hourly for stores with frequent stock changes.
- Availability, price, and sale price must update on the same schedule; stale prices trigger disapprovals.
- Separate feeds per language if the store runs Arabic and English storefronts; do not mix languages in one feed.

## Required Attributes

| Attribute | Rule |
|---|---|
| id | Stable SKU; never changes when the product is edited |
| title | See formula below |
| description | Arabic, 150 to 500 characters, benefits and specs, no promotional text |
| link | Deep link to the Arabic product page with UTM parameters |
| image_link | Primary image, white background, product fills most of the frame |
| additional_image_link | Lifestyle or in-use image; second angle |
| price | Including VAT, with currency SAR |
| sale_price and dates | Only when a real sale runs |
| availability | in stock / out of stock / preorder, synced |
| brand | Filled, consistent spelling |
| gtin | Where the product has one; improves matching and eligibility |
| mpn | When no GTIN |
| condition | new |
| google_product_category | Most specific category |
| product_type | The store's own taxonomy path |
| item_group_id | For variants (size, colour) |
| color, size, material, gender, age_group | For apparel and beauty; drives filters |
| shipping | Country SA, cost or free, delivery time ranges if the platform supports it |

## Arabic Title Formula

Front-load what the shopper searches for. Keep the first 60 characters meaningful.

```
[Brand] [product type] [key attribute] [size/colour/count]
```

Examples:
```
عطر لافندر للنساء من [العلامة] 100 مل
سجادة صلاة مبطنة من [العلامة] 70×110 سم رمادي
سماعة لاسلكية [العلامة] إلغاء ضوضاء أسود
```

Avoid: ALL CAPS, promotional words ("عرض", "خصم"), emojis, keyword stuffing, and English-only titles in the Arabic feed. Include a common transliteration of the brand in the description when shoppers search it in Arabic letters.

## Images

- Minimum 800×800; 1200×1200 preferred; square for Shopping, vertical variants for Snapchat and TikTok catalog templates.
- No watermark, no overlaid text, no promotional badges on the primary image.
- Consistent background across the catalog.
- Variants each get their own image in their colour.

## Custom Labels

Use five labels to control bidding:

| Label | Values | Use |
|---|---|---|
| custom_label_0 | margin: high / mid / low | Separate campaigns and ROAS targets by margin tier |
| custom_label_1 | performance: best / mid / new / poor | Protect best sellers; test new products with a cap |
| custom_label_2 | season: ramadan / eid / summer / school / white-friday / evergreen | Seasonal campaign filters |
| custom_label_3 | price band: under100 / 100-300 / 300-800 / 800plus | Bidding by basket size |
| custom_label_4 | stock: deep / low | Pause low-stock items from prospecting |

## Platform Notes

**Google Merchant Center**
- Verify and claim the store URL; confirm business information, return policy, and shipping settings for Saudi Arabia.
- Fix disapprovals weekly; price mismatch and missing return policy are the usual causes.
- Enable automatic item updates for price and availability as a safety net.

**Meta Commerce Manager**
- Catalog connected to the pixel and CAPI; verify the ViewContent, AddToCart, and Purchase events carry content_ids matching the feed ids.
- Build product sets by custom label for prospecting and retargeting.
- Arabic catalog with Arabic product names so dynamic ads render in Arabic.

**Snapchat Catalogs**
- Connect the same feed; match the Snap Pixel item ids.
- Use the vertical catalog templates; test a template with price and a template with the instalment amount.

**TikTok Catalog**
- Connect the feed; verify the pixel's content_id parameter matches.
- Pair catalog ads with Spark Ads from creators for prospecting.

## Common Saudi Feed Problems

- VAT excluded from the feed price while the site shows VAT-inclusive, causing price-mismatch disapprovals.
- English titles in the Arabic storefront feed, so dynamic ads show English to Arabic audiences.
- Variants without item_group_id, so sizes compete against each other.
- Shipping set to "free" in the feed while the store charges below a threshold.
- Out-of-stock items left as in stock after a flash sale.
- Images with "عرض" or "خصم" overlays, disapproved on Google.
- Hijri-dated sale periods entered incorrectly as Gregorian in sale_price_effective_date.
