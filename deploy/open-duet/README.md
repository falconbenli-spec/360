# نشر Open Duet على سيرفر دائم لفريق 360

هذه الحزمة تشغّل [Open Duet](https://github.com/Anil-matcha/open-duet) على سيرفر Linux خاص بكم، بمحرك Claude Code، ووكيل يراجع كل Pull Request يُفتح على مستودعاتكم تلقائيًا.

## المتطلبات

| العنصر | التفاصيل |
|---|---|
| سيرفر | Ubuntu 22.04 أو أحدث، 2 vCPU و4 GB RAM كحد أدنى، صلاحية sudo |
| نطاق | اسم مثل `duet.360.sa` يشير إلى عنوان السيرفر، والمنفذان 80 و443 مفتوحان |
| حساب Claude | اشتراك Claude يسمح باستخدام Claude Code (تسجيل الدخول يتم مرة واحدة داخل الحاوية) |
| GitHub token | Fine-grained PAT على المستودعات المطلوب مراجعتها، بصلاحيات: Pull requests قراءة وكتابة، Contents قراءة، Metadata قراءة |

## التثبيت (10 دقائق)

```bash
# على السيرفر
git clone https://github.com/falconbenli-spec/360.git
sudo bash 360/deploy/open-duet/install.sh duet.360.sa
```

السكربت يثبّت Docker إن لزم، يستنسخ Open Duet في `/opt/open-duet`، يبني الصورة مع Claude Code وأداة `gh`، يولّد مفتاح التشفير، ويشغّل التطبيق خلف Caddy بشهادة HTTPS تلقائية. في نهايته يطبع الخطوات اليدوية المتبقية، وهي:

1. **كلمة مرور المالك** من طرفية السيرفر (مقصود، حتى لا يستطيع أي زائر للرابط الاستحواذ على الخادم).
2. **تسجيل الدخول إلى Claude** داخل الحاوية بأمر `claude auth login`.
3. **وضع `GH_TOKEN`** في `/opt/open-duet/open-dots.env` ثم إعادة التشغيل.
4. **فحص** `python -m app.server doctor` حتى يقول إن كل شيء `ok`.

## إعداد وكيل مراجعة الـ PRs

اتبع [agents/pr-reviewer.md](agents/pr-reviewer.md): يحتوي النصوص الجاهزة للنسخ (تعليمات الوكيل، الروتين، قواعد الموافقة الدائمة) وطريقة ربط الـ webhook بـ GitHub Actions عبر الملف `.github/workflows/open-duet-pr-review.yml` الموجود في هذا المستودع.

تسلسل العمل بعد الإعداد:

1. يُفتح PR أو يُحدَّث.
2. الـ workflow يرسل بياناته إلى `https://duet.360.sa/hooks/<id>` مع السر.
3. Open Duet يشغّل الروتين على الوكيل، الذي يقرأ الـ PR بـ `gh pr diff` ويكتب تعليق مراجعة واحدًا.
4. أي أمر غير مسموح مسبقًا ينتظر موافقتك في التطبيق (أو من الجوال بعد اقترانه).

## التشغيل اليومي

كل أوامر Docker Compose تحتاج نفس ملفات `-f` الثلاثة. ضع هذا في `~/.bashrc` على السيرفر لتسهيلها:

```bash
alias duet='cd /opt/open-duet && OPEN_DOTS_IMAGE=open-dots:360 OPEN_DOTS_DOMAIN=duet.360.sa docker compose -f compose.yaml -f /opt/open-duet-360/compose.360.yaml -f deploy/proxy/compose.caddy.yaml'
```

| المهمة | الأمر |
|---|---|
| الحالة والسجلات | `duet ps` و `duet logs -f open-dots` |
| فحص الصحة | `duet exec open-dots python -m app.server doctor` |
| نسخة احتياطية | `duet exec open-dots python -m app.server backup` ثم انسخ الأرشيف من `/data/backups` خارج السيرفر |
| تحديث | `sudo bash 360/deploy/open-duet/install.sh duet.360.sa` (يسحب الكود ويعيد البناء ويحافظ على البيانات) |
| اقتران الجوال | من التطبيق: Settings → Devices → Create pairing code، واختر *Chat only* |

## ما يجب حفظه خارج السيرفر

- ملف `/opt/open-duet/open-dots.env`: فيه مفتاح التشفير `TOKEN_ENCRYPTION_KEYS`. بدونه لا يمكن قراءة أي بيانات مخزّنة، والنسخة الاحتياطية لا تحتويه.
- كلمة مرور المالك.

## ملاحظات أمان

- المنفذ 8000 يبقى على loopback فقط، والوصول الوحيد عبر Caddy بـ HTTPS.
- التوكن `GH_TOKEN` يُمرَّر لعمليات المحرك فقط، ويظهر لأي أمر يشغّله الوكيل. استخدم توكن محدود الصلاحيات والمستودعات.
- الوكيل لا يقدر على الدمج أو الموافقة أو الدفع: التوكن لا يملك صلاحيات Contents كتابة، والتعليمات تمنعه.
- `LOCAL_TOOLS_ENABLED=true` يسمح بتشغيل الأوامر، لكن كل أمر غير مسموح مسبقًا ينتظر موافقتك. لا تحفظ قواعد "Always allow" أوسع من أوامر `gh pr` الثلاثة.
- الطريق الذي نشر عليه المشروع (Docker مع Caddy) مُختبَر من أصحابه على Docker Desktop فقط، وشهادات HTTPS الحقيقية لم تُختبر من طرفهم. أول تشغيل يحتاج متابعة.
