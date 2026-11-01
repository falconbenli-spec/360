# 360 — Marketing Agency Skill Library

مكتبة مهارات لوكلاء الذكاء الاصطناعي (Claude Code وما يدعم معيار Agent Skills) مبنية لوكالة 360 للتسويق في السعودية. تحتوي على 151 مهارة تغطي الاستراتيجية، البراند، الكتابة العربية، السوق السعودي، الإعلانات، SEO، التحويل، القياس، عمليات الوكالة، والقطاعات.

## البداية

1. افتح المستودع في Claude Code. المهارات تُحمَّل تلقائيًا من `.claude/skills/`.
2. شغّل `/product-marketing` لإكمال وثيقة سياق الوكالة في `.agents/product-marketing.md`.
3. لكل عميل، أنشئ ملف سياق عبر `/account-management` في `.agents/clients/<client>.md`.
4. اطلب بلغة عادية ("اكتب عرض لعميل", "حسّن صفحة الهبوط", "تقرير شهري") أو نادِ المهارة مباشرة مثل `/arabic-copywriting` أو `/campaign-brief`.

قواعد العمل والتوجيه بين المهارات في `CLAUDE.md`.

## الفئات

| الفئة | أمثلة |
| --- | --- |
| السوق السعودي والعربية | `saudi-market`, `arabic-copywriting`, `arabic-seo`, `offline-media` |
| عمليات الوكالة | `client-proposal`, `client-reporting`, `account-management`, `marketing-audit`, `campaign-brief` |
| القطاعات | `ecommerce-marketing`, `real-estate-marketing`, `government-marketing`, `retail-fnb-marketing`, `d2c-marketing`, `b2b-brand-marketing` |
| البراند | `brand-strategy`, `brand-positioning`, `brand-voice`, `brand-identity`, `brand-guidelines`, `brand-naming`, `rebranding` |
| المحتوى والكتابة | `copywriting`, `copy-editing`, `content-strategy`, `social`, `emails`, `sms`, `whatsapp-marketing` |
| الإعلانات المدفوعة | `ads`, `ad-creative`, `ad-angles`, `hook-writer`, `paid-media-audit`, `facebook-ads-audit`, `google-ads-review`, `budget-reallocation` |
| SEO والاكتشاف | `seo-audit`, `ai-seo`, `keyword-intent`, `schema`, `link-building`, `programmatic-seo` |
| التحويل والاحتفاظ | `cro`, `conversion-funnel`, `checkout-optimization`, `onboarding`, `churn-prevention`, `referrals` |
| القياس | `analytics`, `conversion-tracking`, `attribution`, `kpi-dashboard`, `anomaly-detection`, `cohort-analysis` |
| المبيعات | `sales-enablement`, `objection-handling`, `pipeline-review`, `prospecting`, `cold-email`, `call-preparation` |
| السمعة | `public-relations`, `crisis-communications`, `brand-audit` |

## المصادر

- [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT): 53 مهارة تسويق أساسية
- [arnabbagxd/brand-building-skills](https://github.com/arnabbagxd/Brand-building-skills) (MIT): 24 مهارة براند
- [sidchaudhary/gtm-skills](https://github.com/sidchaudhary/gtm-skills) (MIT): 60 مهارة مختارة في الإعلانات والمبيعات والتجارة الإلكترونية والتحليلات، مع إزالة الترويج التجاري من النسخ
- 14 مهارة أصلية من 360 للسوق السعودي والعربية وعمليات الوكالة والقطاعات

المهارات الخارجية مسجلة في `skills-lock.json` وتُحدَّث بـ `npx skills update`.
