// 3,6T technical proposal deck for «المركز» scope of work (36 months). RTL Arabic, 3,6T identity.
const path = require("path");
const pptxgen = require("pptxgenjs");
const JSZip = require(require.resolve("jszip", { paths: [require.resolve("pptxgenjs")] }));
const fs = require("fs");
const { applyTheme } = require(process.env.SKILL_DIR + "/scripts/apply_theme.js");

const ASSETS = "/tmp/claude-0/-home-user-360/6fec0a51-7e97-53c4-9ddd-bc6b2bc0bb4e/scratchpad/proposal/";
const OUT = process.argv[2] || "deck.pptx";

const THEME = {
  name: "3,6T",
  headFontFace: "Alexandria",
  bodyFontFace: "Alexandria",
  colors: {
    dk1: "353535", lt1: "FFFFFF", dk2: "0F7A66", lt2: "EEF2F6",
    accent1: "16A086", accent2: "F1C40F", accent3: "5DADE2", accent4: "E84C3D",
    accent5: "F39C11", accent6: "DDE6ED", hlink: "0F7A66", folHlink: "5F6670",
  },
};
const HEX = { char: "353535", turq: "16A086", deep: "0F7A66", ink: "0B4F43", slate: "DDE6ED", soft: "EEF2F6", tint: "E3F4EF", saf: "F1C40F", red: "E84C3D", muted: "5F6670", white: "FFFFFF", charDeep: "262626" };

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pres.rtlMode = true;
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.title = "العرض الفني: تشغيل التسويق والاتصال المؤسسي للمركز";
pres.author = "3,6T";
pres.company = "3,6T";
const C = pres.SchemeColor;
const SH = pres.shapes;

const W = 13.333, R = 12.733, L = 0.6, CW = R - L; // content right edge, left edge, width
const AR = { rtlMode: true, align: "right", lang: "ar-SA" };

// ---------------- layouts ----------------
const LOGO_DARK = { image: { path: ASSETS + "logo-dark.png", x: L, y: 6.86, w: 0.6, h: 0.4 } };
const LOGO_WHITE = { image: { path: ASSETS + "logo-white.png", x: L, y: 6.86, w: 0.6, h: 0.4 } };
const titlePh = (color) => ({ placeholder: { options: { name: "title", type: "title", x: L, y: 0.78, w: 11.05, h: 0.8, fontSize: 32, bold: true, color, align: "right", valign: "middle", rtlMode: true, lang: "ar-SA", margin: 0 }, text: "" } });
const eyebrowPh = (color) => ({ placeholder: { options: { name: "eyebrow", type: "body", x: L, y: 0.42, w: 11.05, h: 0.36, fontSize: 13, bold: true, color, align: "right", valign: "bottom", rtlMode: true, lang: "ar-SA", margin: 0 }, text: "" } });
const slideNum = (color) => ({ x: 12.13, y: 6.9, w: 0.6, h: 0.32, fontSize: 11, color, align: "right" });
const FOOT = (color) => ({ text: { text: "عرض فني · المركز · © جميع الحقوق الإبداعية لشركة ثلاثمائة وستون درجة للدعاية والإعلان · www.360.sa", options: { x: 1.4, y: 6.92, w: 10.6, h: 0.3, fontSize: 9, color, align: "center", valign: "middle", rtlMode: true, lang: "ar-SA", margin: 0 } } });

pres.defineSlideMaster({ title: "COVER", background: { color: C.accent1 }, objects: [], slideNumber: undefined });
pres.defineSlideMaster({ title: "CONTENT", background: { color: C.background1 }, objects: [LOGO_DARK, FOOT(C.folHlink), eyebrowPh(C.accent1), titlePh(C.text1)], slideNumber: slideNum(C.folHlink) });
pres.defineSlideMaster({ title: "CONTENT_DARK", background: { color: C.text1 }, objects: [LOGO_WHITE, FOOT(C.accent6), eyebrowPh(C.accent2), titlePh(C.background1)], slideNumber: slideNum(C.accent6) });
pres.defineSlideMaster({ title: "CONTENT_TURQ", background: { color: C.accent1 }, objects: [LOGO_WHITE, FOOT(C.background1), eyebrowPh(C.accent2), titlePh(C.background1)], slideNumber: slideNum(C.background1) });
pres.defineSlideMaster({ title: "CLOSING", background: { color: C.text1 }, objects: [] });

// ---------------- helpers ----------------
function T(s, text, o) {
  s.addText(text, Object.assign({ isTextBox: true, ...AR, margin: 0, valign: "top", fontSize: 14, color: C.text1, paraSpaceAfter: 2 }, o));
}
function bullets(items, o = {}) {
  return items.map((t, i) => ({ text: t, options: Object.assign({ bullet: { indent: 14 }, breakLine: i < items.length - 1, paraSpaceAfter: 5 }, o) }));
}
function para(parts) { // [[text, {bold}], ...] single paragraph runs
  return parts.map(([t, o]) => ({ text: t, options: o || {} }));
}
function shadow() { return { type: "outer", color: "14302C", opacity: 0.12, blur: 8, offset: 2, angle: 90 }; }
function box(s, x, y, w, h, fill, o = {}) {
  s.addShape(SH.ROUNDED_RECTANGLE, Object.assign({ x, y, w, h, rectRadius: 0.12, fill: { color: fill }, line: { color: fill, width: 0.5 } }, o));
}
function para_shape(s, x, y, w, h, fill, text, to = {}) {
  s.addText(text || "", Object.assign({ shape: SH.PARALLELOGRAM, x, y, w, h, fill: { color: fill }, line: { color: fill, width: 0.5 }, ...AR, align: "center", valign: "middle", margin: 0, fontSize: 18, bold: true, color: C.background1 }, to));
}
function head(s, num, eyebrow, title, variant = "light") {
  const chipFill = variant === "light" ? C.accent1 : C.accent2;
  const chipText = variant === "light" ? C.background1 : C.text1;
  para_shape(s, 11.88, 0.62, 0.85, 0.72, chipFill, num, { color: chipText, fontSize: num.length > 2 ? 18 : 22, objectName: "section-number" });
  s.addText(eyebrow, { placeholder: "eyebrow", ...AR });
  s.addText(title, { placeholder: "title", ...AR });
}
// card with title + body; x,y,w,h; fill hex/scheme; returns nothing
function card(s, x, y, w, h, o) {
  const fill = o.fill || C.background1;
  s.addShape(SH.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.12, fill: { color: fill }, line: { color: o.line || fill, width: 0.75 }, shadow: o.shadow === false ? undefined : shadow(), objectName: o.name || "card" });
  const pad = o.pad || 0.22;
  let ty = y + pad;
  if (o.kicker) { T(s, o.kicker, { x: x + pad, y: ty, w: w - 2 * pad, h: 0.3, fontSize: 11, bold: true, color: o.kickerColor || C.accent1 }); ty += 0.32; }
  if (o.title) { T(s, o.title, { x: x + pad, y: ty, w: w - 2 * pad, h: o.titleH || 0.42, fontSize: o.titleSize || 17, bold: true, color: o.titleColor || C.text1, valign: "top" }); ty += (o.titleH || 0.42) + 0.06; }
  if (o.body) T(s, o.body, { x: x + pad, y: ty, w: w - 2 * pad, h: y + h - ty - pad + 0.05, fontSize: o.bodySize || 14, color: o.bodyColor || C.text1 });
}
// columns from the right: returns x of column i (0 = rightmost)
function colX(i, n, gap = 0.3, left = L, right = R) { const w = (right - left - gap * (n - 1)) / n; return { x: right - w - i * (w + gap), w }; }
function note(s, text, y, o = {}) {
  s.addShape(SH.ROUNDED_RECTANGLE, { x: L, y, w: CW, h: o.h || 0.55, rectRadius: 0.08, fill: { color: o.fill || C.background2 }, line: { color: o.fill || C.background2, width: 0.5 }, objectName: "note" });
  T(s, text, { x: L + 0.22, y: y + 0.08, w: CW - 0.44, h: (o.h || 0.55) - 0.16, fontSize: 13, color: o.color || C.text1, valign: "middle" });
}
function pattern(s, x0, y0, cols, rows, color, transp, size = 0.32, gap = 0.12) {
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    s.addShape(SH.PARALLELOGRAM, { x: x0 + c * (size + gap), y: y0 + r * (size * 0.7 + gap), w: size, h: size * 0.7, fill: { color, transparency: transp }, line: { color, transparency: 100 }, objectName: "pattern" });
  }
}
function steps(s, items, y, h, o = {}) { // horizontal RTL steps with numbered parallelograms
  const n = items.length, gap = o.gap || 0.25;
  items.forEach((it, i) => {
    const { x, w } = colX(i, n, gap);
    card(s, x, y, w, h, { fill: o.fill || C.background1, line: o.line || C.accent6, shadow: o.shadow, title: it.t, body: it.b, titleSize: o.titleSize || 16, bodySize: o.bodySize || 13, kicker: " ", titleH: o.titleH });
    para_shape(s, x + w - 0.75, y + 0.18, 0.55, 0.36, o.numFill || C.accent1, String(i + 1), { fontSize: 14, color: o.numColor || C.background1 });
  });
}
function chips(s, labels, x, y, w, o = {}) { // flowing chips right-to-left in rows
  const h = o.h || 0.42, gap = o.gap || 0.14, size = o.size || 13;
  let cx = x + w, cy = y;
  labels.forEach((lb) => {
    const cw = Math.max(0.9, lb.length * (size / 72) * 0.62 + 0.45);
    if (cx - cw < x - 0.01) { cx = x + w; cy += h + gap; }
    s.addText(lb, { shape: SH.ROUNDED_RECTANGLE, rectRadius: 0.2, x: cx - cw, y: cy, w: cw, h, fill: { color: o.fill || C.background2 }, line: { color: o.line || o.fill || C.accent6, width: 0.75 }, ...AR, align: "center", valign: "middle", margin: 0, fontSize: size, bold: !!o.bold, color: o.color || C.text1, objectName: "chip" });
    cx -= cw + gap;
  });
  return cy + h;
}
function table(s, header, rows, x, y, w, colW, o = {}) {
  // header/rows given in reading order (right to left); reverse for layout
  const rev = (a) => a.slice().reverse();
  const hdr = rev(header).map((t) => ({ text: t, options: { bold: true, color: HEX.white, fill: { color: HEX.char }, ...AR, fontSize: 13 } }));
  const body = rows.map((r, ri) => rev(r).map((t, ci) => ({ text: t, options: { color: HEX.char, fill: { color: ri % 2 ? HEX.soft : HEX.white }, ...AR, fontSize: o.size || 13, bold: ci === r.length - 1 && !!o.boldFirst } })));
  s.addTable([hdr, ...body], { x, y, w, colW: rev(colW), border: { type: "solid", pt: 0.75, color: HEX.slate }, margin: [0.06, 0.1, 0.06, 0.1], valign: "middle", rowH: o.rowH, objectName: o.name || "table" });
}

// ---------------- slides ----------------
let s;

// 1. COVER
pres.addSection({ title: "البداية" });
s = pres.addSlide({ masterName: "COVER", sectionTitle: "البداية" });
s.addShape(SH.PARALLELOGRAM, { x: -1.2, y: -0.2, w: 5.2, h: 3.2, fill: { color: HEX.deep, transparency: 45 }, line: { color: HEX.deep, transparency: 100 }, objectName: "cover-slash" });
pattern(s, 0.4, 5.75, 9, 3, HEX.white, 80);
s.addImage({ path: ASSETS + "logo-white.png", x: 11.73, y: 0.45, w: 1.0, h: 0.67, objectName: "logo" });
T(s, "العرض الفني لمشروع:", { x: 5.0, y: 1.45, w: 7.73, h: 0.45, fontSize: 18, bold: true, color: C.accent2 });
T(s, "تشغيل التسويق والاتصال المؤسسي\nللمركز لمدة 36 شهرًا", { x: 4.55, y: 1.95, w: 8.18, h: 1.6, fontSize: 32, bold: true, color: C.background1, valign: "top", lineSpacingMultiple: 1.05 });
T(s, "فريق تشغيل مقيم في المركز، تدعمه الخبرات التخصصية لدى 3,6T عند الحاجة.", { x: 5.6, y: 3.7, w: 7.13, h: 0.5, fontSize: 15, color: C.background1 });
// formal fields
[["المقدم إلى:", "[اسم الجهة كما في كراسة الشروط]"], ["رقم المنافسة:", "[رقم المنافسة في منصة اعتماد]"], ["مقدم من:", "شركة ثلاثمائة وستون درجة للدعاية والإعلان (3,6T)"], ["تاريخ التقديم:", "نوفمبر 2026"]].forEach(([k, v], i) => {
  const y = 4.6 + i * 0.42;
  T(s, k, { x: 10.83, y, w: 1.9, h: 0.36, fontSize: 14, bold: true, color: C.accent2, valign: "middle" });
  const ph = v.startsWith("[");
  s.addText(v, { isTextBox: !ph, shape: ph ? SH.RECTANGLE : undefined, fill: ph ? { color: HEX.white, transparency: 82 } : undefined, line: ph ? { color: HEX.saf, width: 1, dashType: "dash" } : undefined, x: 5.9, y, w: 4.85, h: 0.36, ...AR, margin: ph ? [0, 6, 0, 6] : 0, fontSize: 14, color: C.background1, valign: "middle", objectName: ph ? "fill-in" : "field" });
});
// stacked cards visual (left)
s.addShape(SH.ROUNDED_RECTANGLE, { x: 1.05, y: 1.35, w: 3.3, h: 3.9, rectRadius: 0.15, rotate: -7, fill: { color: HEX.charDeep }, line: { color: HEX.charDeep }, shadow: shadow(), objectName: "card-back" });
s.addShape(SH.ROUNDED_RECTANGLE, { x: 0.95, y: 1.45, w: 3.3, h: 3.9, rectRadius: 0.15, rotate: 6, fill: { color: HEX.slate }, line: { color: HEX.slate }, shadow: shadow(), objectName: "card-mid" });
s.addShape(SH.ROUNDED_RECTANGLE, { x: 1.0, y: 1.3, w: 3.3, h: 3.9, rectRadius: 0.15, fill: { color: HEX.white }, line: { color: HEX.white }, shadow: shadow(), objectName: "card-front" });
T(s, "36", { x: 1.25, y: 1.55, w: 2.8, h: 1.2, fontSize: 72, bold: true, color: C.accent1, align: "right" });
T(s, "شهرًا من التشغيل", { x: 1.25, y: 2.75, w: 2.8, h: 0.4, fontSize: 16, bold: true, color: C.text1 });
T(s, "15", { x: 1.25, y: 3.3, w: 2.8, h: 1.0, fontSize: 54, bold: true, color: C.dk2 || HEX.deep, align: "right" });
T(s, "مسارًا في نطاق عمل واحد", { x: 1.25, y: 4.3, w: 2.8, h: 0.4, fontSize: 16, bold: true, color: C.text1 });
T(s, "www.360.sa · Business@360.sa · +966 592 360 360 · طريق الدائري الشمالي، النفل، الرياض 13312", { x: 4.9, y: 6.75, w: 7.83, h: 0.35, fontSize: 11, color: C.background1 });
s.addNotes("الغلاف. عرض فني لنطاق عمل تشغيل التسويق والاتصال المؤسسي للمركز لمدة 36 شهرًا.");


// 1b. TOC
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "البداية" });
s.addText("المحتويات", { placeholder: "eyebrow", ...AR });
s.addText("جدول المحتويات", { placeholder: "title", ...AR });
[["", "العرض في دقيقة", "3"], ["01", "نموذج التشغيل", "4"], ["02", "فهمنا للمركز", "5"], ["03", "تحليل الوضع الراهن والتأسيس", "6"], ["04", "الاستراتيجية الاتصالية", "7"], ["05", "المنتجات والمبادرات", "9"], ["06", "مبدأ الكتابة", "10"],
 ["07", "التشغيل والقنوات", "11"], ["08", "نطاق العمل وحدوده", "16"], ["09", "الهوية البصرية و«تكعيب»", "18"], ["10", "الإدارة والجودة", "20"], ["11", "فريق العمل", "25"], ["أ", "ملحق: مطابقة نطاق العمل", "26"]].forEach(([n, t, pg], i) => {
  const col = i < 7 ? 0 : 1, row = i < 7 ? i : i - 7;
  const { x, w } = colX(col, 2, 0.6);
  const y = 1.95 + row * 0.66;
  if (n) para_shape(s, x + w - 0.62, y + 0.06, 0.62, 0.44, i === 12 ? C.accent2 : C.accent1, n, { fontSize: 14, color: i === 12 ? C.text1 : C.background1 });
  T(s, t, { x: x + 0.7, y, w: w - 1.45, h: 0.56, fontSize: 17, bold: true, valign: "middle" });
  s.addShape(SH.LINE, { x: x + 0.7, y: y + 0.58, w: w - 0.7, h: 0, line: { color: HEX.slate, width: 0.75 }, objectName: "toc-rule" });
  T(s, pg, { x, y, w: 0.6, h: 0.56, fontSize: 15, color: C.folHlink, align: "left", valign: "middle" });
});
// 2. العرض في دقيقة
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "البداية" });
para_shape(s, 10.63, 0.5, 2.1, 0.42, C.accent2, "العرض في دقيقة", { fontSize: 13, color: C.text1 });
s.addText("ما يطلبه المركز، وكيف نشغّله، في ثلاث جمل", { placeholder: "title", ...AR });
[["المطلوب", "تسويق واتصال مؤسسي لمنتجات المركز ومبادراته، من الاستراتيجية إلى المحتوى اليومي والإعلام والفعاليات والهوية، لمدة 36 شهرًا.", C.accent1],
 ["النموذج", "فريق مقيم في مقر المركز يتولى التشغيل اليومي، وخبرات 3,6T تسانده عند الحاجة في التحليل المتقدم والحملات والأعمال الموسمية.", C.text1],
 ["المبدأ", "كل مدخل فني يتحول إلى رسالة مبسطة ودقيقة، دون تغيير المعنى العلمي أو استحداث معلومات غير معتمدة.", C.accent2]].forEach(([k, v, col], i) => {
  const { x, w } = colX(i, 3, 0.4);
  s.addShape(SH.RECTANGLE, { x, y: 1.95, w, h: 0.07, fill: { color: col }, line: { color: col }, objectName: "col-rule" });
  T(s, k, { x, y: 2.15, w, h: 0.4, fontSize: 15, bold: true, color: C.dk2 || HEX.deep });
  T(s, v, { x, y: 2.6, w, h: 1.55, fontSize: 16 });
});
s.addShape(SH.ROUNDED_RECTANGLE, { x: L, y: 4.45, w: CW, h: 1.6, rectRadius: 0.12, fill: { color: C.text1 }, line: { color: C.text1 }, objectName: "numbers-band" });
[["36", "شهرًا"], ["15", "مسارًا"], ["90", "يومًا لأول خطة"], ["24", "جلسة تصوير سنويًا"], ["2032", "أفق الخطة الاتصالية"], ["2", "لغتان: عربية وإنجليزية"]].forEach(([n, l], i) => {
  const { x, w } = colX(i, 6, 0, L + 0.1, R - 0.1);
  T(s, n, { x, y: 4.62, w, h: 0.75, fontSize: 36, bold: true, color: C.background1, align: "center" });
  T(s, l, { x, y: 5.38, w, h: 0.5, fontSize: 13, color: C.accent6, align: "center" });
});
T(s, "مطابقة كل بند من نطاق العمل مع شرائح العرض في الملحق أ، الشريحة 26.", { x: L, y: 6.3, w: CW, h: 0.35, fontSize: 12, color: C.folHlink });

// 3. 01 نموذج التشغيل
pres.addSection({ title: "الفهم والتشخيص" });
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الفهم والتشخيص" });
head(s, "01", "نموذج التشغيل", "فريق مقيم في المركز، وخبرات تساند عند الحاجة");
card(s, 6.93, 1.9, 5.8, 4.1, { fill: C.accent1, line: C.accent1, kicker: "يوميًا · من داخل مقر المركز", kickerColor: C.accent2, title: "الفريق المقيم", titleColor: C.background1, titleSize: 22, titleH: 0.5,
  body: bullets(["التشغيل اليومي لحسابات المركز المعتمدة", "كتابة المحتوى والتصميم والجدولة والنشر", "إدارة التفاعل وإحالة الاستفسارات الفنية والحساسة", "التحليلات التشغيلية ومتابعة الأداء الرقمي", "تحرير محتوى الموقع والصفحات التعريفية ضمن الصلاحيات"]), bodyColor: C.background1, bodySize: 15 });
card(s, L, 1.9, 5.8, 4.1, { fill: C.text1, line: C.text1, kicker: "عند الحاجة · من فريق 3,6T غير المقيم", kickerColor: C.accent2, title: "خبرات الوكالة", titleColor: C.background1, titleSize: 22, titleH: 0.5,
  body: bullets(["التحليلات المتقدمة ودعم الحملات", "الدعم المتخصص للأعمال الموسمية الإعلامية والمؤسسية", "المستشار المتخصص للتقرير السنوي", "التصوير والإنتاج المرئي وفق الرصيد المتفق عليه", "الطلبات الطارئة خارج الدوام عبر نقطة اتصال ومسار تصعيد"]), bodyColor: C.background1, bodySize: 15 });
note(s, "يظل تنسيق المركز الداخلي ومسؤولياته الأصلية لدى موظفيه المختصين، ويعمل الفريقان وفق الخطط والاعتمادات ومستويات الاستجابة المتفق عليها.", 6.15, { h: 0.6 });

// 4. 02 فهمنا للمركز
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الفهم والتشخيص" });
head(s, "02", "فهمنا للمركز", "ستة عوامل تحدد طبيعة الاتصال في المركز");
[["منتجات ومبادرات متعددة", "منتجات وخدمات ومنصات ومبادرات ومخرجات تطوير، لكل منها مالك فني وجمهور وقيمة اتصالية."],
 ["محتوى فني دقيق", "مدخلات تتصل بتطوير المناهج ونواتج التعلم، تُبسَّط دون تغيير المعنى العلمي."],
 ["علاقة مع الوزارة", "موضوعات مشتركة تحتاج حدودًا واضحة للاتصال، وضوابط للاستخدام المشترك للهوية."],
 ["مواسم ثابتة", "بداية العام الدراسي، والإصدارات، وتطوير المناهج، والأنشطة المرتبطة ببرامج المركز."],
 ["منصة «تكعيب»", "منصة تحتاج شعارًا وهوية وتجربة مستخدم تنسجم مع هوية المركز وفئاتها المستهدفة."],
 ["أفق استراتيجي طويل", "خطة اتصالية مساندة لاستراتيجية المركز من 2027 إلى 2032، بإطلاق في بداية 2027."]].forEach(([t, b], i) => {
  const col = i % 3, row = Math.floor(i / 3);
  const { x, w } = colX(col, 3, 0.3);
  const y = 1.95 + row * 2.3;
  card(s, x, y, w, 2.05, { fill: C.background1, line: C.accent6, title: t, body: b, kicker: "0" + (i + 1), titleSize: 18 });
});

// 5. 03 تحليل الوضع الراهن والتأسيس
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الفهم والتشخيص" });
head(s, "03", "تحليل الوضع الراهن والتأسيس", "نبدأ بالتشخيص، وننتهي بخطة أول 90 يومًا");
steps(s, [
  { t: "جلسات استكشاف", b: "مع قيادات المركز والقطاعات الفنية وأصحاب المصلحة الداخليين، ومراجعة الاستراتيجية والمنتجات والمبادرات والمواد السابقة." },
  { t: "تحليل الحضور", b: "الحضور الإعلامي والرقمي، وأداء الحسابات والمحتوى، والصورة المؤسسية، وتطبيقات الهوية، وقنوات التواصل، وآليات الطلبات والاعتمادات." },
  { t: "أصحاب المصلحة", b: "شرائحهم واحتياجاتهم الاتصالية بحسب طبيعة كل منتج أو مبادرة، مع مراجعة نماذج مرجعية ذات صلة." },
  { t: "تقرير التشخيص", b: "يُسلَّم في نهاية التأسيس، ويحدد ما نعالجه أولًا وما نبني عليه." },
], 1.95, 2.85, { bodySize: 13 });
s.addShape(SH.ROUNDED_RECTANGLE, { x: L, y: 5.05, w: CW, h: 1.35, rectRadius: 0.12, fill: { color: HEX.tint }, line: { color: HEX.tint }, objectName: "deliverable" });
T(s, "يتضمن تقرير التشخيص", { x: 9.9, y: 5.2, w: 2.6, h: 0.4, fontSize: 15, bold: true, color: C.dk2 || HEX.deep });
chips(s, ["الفجوات", "الفرص", "المخاطر الاتصالية", "خط الأساس للمؤشرات", "أولويات التحسين", "خطة أول 90 يومًا"], 0.8, 5.65, 11.7, { fill: C.background1, line: C.accent1, bold: true, size: 14 });

// 6. 04 الاستراتيجية الاتصالية
pres.addSection({ title: "الاستراتيجية" });
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الاستراتيجية" });
head(s, "04", "الاستراتيجية الاتصالية للمركز", "استراتيجية واحدة، وسردية تشرح دور المركز");
card(s, 7.73, 1.95, 5.0, 4.5, { fill: C.text1, line: C.text1, kicker: "استراتيجية تسويق وتواصل مؤسسي متكاملة", kickerColor: C.accent2, title: "سبعة مكونات", titleColor: C.background1, titleSize: 22, titleH: 0.5, body: "" });
chips(s, ["الأهداف", "التموضع المؤسسي", "الشرائح المستهدفة", "الرسائل", "القنوات", "المبادرات", "مؤشرات القياس"], 7.95, 3.15, 4.56, { fill: HEX.charDeep, line: HEX.turq, color: C.background1, bold: true, size: 15, h: 0.5, gap: 0.16 });
card(s, L, 1.95, 6.85, 1.38, { fill: C.background1, line: C.accent6, title: "السردية المؤسسية", body: "إطار يوضح دور المركز واختصاصاته وقيمته للمنظومة، مع تحديد حدود الاتصال بالموضوعات المشتركة مع الوزارة.", titleSize: 17, bodySize: 13 });
card(s, L, 3.5, 6.85, 1.38, { fill: C.background1, line: C.accent6, title: "أدلة الاتصال", body: "الرسائل الرئيسية، والأسئلة والأجوبة المتوقعة، ونبرة الخطاب، والموضوعات الحساسة، ومصفوفة قنوات وجماهير الاتصال.", titleSize: 17, bodySize: 13 });
card(s, L, 5.05, 6.85, 1.4, { fill: C.background1, line: C.accent6, title: "التحديث المستمر", body: "تُحدّث الخطة عند اعتماد مستجدات الاستراتيجية أو أولويات المركز، مع خطة سنوية وتقويم تفعيل قابلين للتحديث الدوري.", titleSize: 17, bodySize: 13 });

// 7. 04 timeline 2027-2032
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الاستراتيجية" });
head(s, "04", "الخطة الاتصالية المساندة", "خطة اتصالية تساند استراتيجية المركز حتى 2032");
const years = ["2027", "2028", "2029", "2030", "2031", "2032"];
years.forEach((yr, i) => {
  const { x, w } = colX(i, 6, 0.12);
  const first = i === 0;
  para_shape(s, x, 2.3, w, 0.9, first ? C.accent2 : C.accent1, yr, { fontSize: 22, color: first ? C.text1 : C.background1 });
});
card(s, colX(1, 6, 0.12).x, 3.45, colX(0, 6, 0.12).w * 2 + 0.12, 2.25, { fill: C.background1, line: C.accent2, kicker: "2027", kickerColor: HEX.deep, title: "الإطلاق والسنة الأولى", body: "خطة إطلاق خاصة ببداية عام 2027، وتفصيل كامل للسنة التشغيلية الأولى.", titleSize: 17, bodySize: 14 });
card(s, L, 3.45, colX(1, 6, 0.12).x - 0.2 - L, 2.25, { fill: HEX.soft, line: HEX.soft, shadow: false, kicker: "2028 إلى 2032", kickerColor: HEX.deep, title: "إطار الخطة المساندة", body: "محاور ومسارات تتبع استراتيجية المركز، وتُفصَّل سنويًا عبر خطة سنوية وتقويم تفعيل قابلين للتحديث الدوري.", titleSize: 17, bodySize: 14 });
note(s, "امتداد الخطة حتى 2032 لا يعني التزامًا تشغيليًا خارج مدة العقد.", 6.0, { h: 0.55, fill: "FFF7E0" });

// 8. 05 المنتجات والمبادرات
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الاستراتيجية" });
head(s, "05", "التسويق والاتصال بمنتجات المركز ومبادراته", "لكل منتج ومبادرة خطة اتصال وحزمة إطلاق");
steps(s, [
  { t: "الحصر", b: "منتجات المركز وخدماته ومنصاته ومبادراته ومخرجات تطوير المنتجات، مع المالك الفني والجمهور المستهدف والقيمة الاتصالية لكل منها." },
  { t: "خطط الأولوية", b: "خطة لكل منتج أو مبادرة ذات أولوية: الهدف، والجمهور، والرسائل، وقنوات الوصول، وخطة الإطلاق، والمحتوى، والجدول، ومؤشرات النجاح." },
  { t: "المواسم", b: "خطط ومحتوى بداية العام الدراسي، والإصدارات، وتطوير المناهج، والمبادرات والأنشطة المرتبطة ببرامج المركز." },
  { t: "حزم الإطلاق", b: "المواد التعريفية، وملفات الأسئلة الشائعة، ورسائل أصحاب المصلحة، ومحتوى التوعية والإيضاح." },
], 1.95, 3.6, { bodySize: 14 });
note(s, "محتوى المواسم والإصدارات يُعَد بعد التحقق من المعلومات واعتمادها فنيًا.", 5.85, { h: 0.55 });

// 9. 06 المبدأ (dark)
s = pres.addSlide({ masterName: "CONTENT_DARK", sectionTitle: "الاستراتيجية" });
head(s, "06", "مبدأ الكتابة", "من المدخل الفني إلى رسالة يفهمها الجميع", "dark");
[["مدخل فني معتمد", "من القطاعات الفنية ومالكي المنتجات"], ["قصة ورسالة مبسطة", "دقيقة، وتوضح قيمة المنتج أو المبادرة"], ["تحقق واعتماد فني", "قبل النشر، من ممثلي المركز المخولين"]].forEach(([t, b], i) => {
  const { x, w } = colX(i, 3, 0.55);
  para_shape(s, x, 2.15, w, 1.45, i === 1 ? C.accent2 : C.accent1, t, { fontSize: 22, color: i === 1 ? C.text1 : C.background1 });
  T(s, b, { x: x + 0.3, y: 3.75, w: w - 0.6, h: 0.5, fontSize: 14, color: C.accent6, align: "center" });
  if (i < 2) T(s, "←", { x: x - 0.5, y: 2.55, w: 0.45, h: 0.6, fontSize: 26, bold: true, color: C.accent2, align: "center", rtlMode: false });
});
["لا تغيير في المعنى العلمي", "لا معلومات غير معتمدة", "الاستفسار الفني أو الحساس يُحال إلى ممثلي المركز المخولين"].forEach((t, i) => {
  const { x, w } = colX(i, 3, 0.3);
  s.addShape(SH.ROUNDED_RECTANGLE, { x, y: 4.75, w, h: 1.1, rectRadius: 0.12, fill: { color: HEX.charDeep }, line: { color: HEX.turq, width: 1 }, objectName: "rule" });
  T(s, t, { x: x + 0.25, y: 4.85, w: w - 0.5, h: 0.9, fontSize: 15, bold: true, color: C.background1, valign: "middle", align: "center" });
});

// 10. 07 الحسابات الرقمية
pres.addSection({ title: "التشغيل والقنوات" });
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "التشغيل والقنوات" });
head(s, "07", "إدارة الحسابات والتواصل الرقمي", "تشغيل يومي لحسابات المركز من داخل مقره");
["تقويم النشر", "الكتابة", "التصميم", "الجدولة", "النشر", "التفاعل والمتابعة"].forEach((t, i) => {
  const { x, w } = colX(i, 6, 0.1);
  para_shape(s, x, 1.95, w, 0.62, i % 2 ? C.dk2 || HEX.deep : C.accent1, t, { fontSize: 14 });
});
[["تكييف لكل منصة", "المحتوى حسب خصائص كل منصة والجمهور المستهدف، ونصوص الردود والتفاعل جاهزة ومعتمدة."],
 ["إحالة منضبطة", "الاستفسارات الفنية أو الحساسة تُحال إلى ممثلي المركز المخولين."],
 ["خطة شهرية مرنة", "مراجعة أسبوعية وتحديث كلما ظهرت مبادرات أو مستجدات معتمدة."],
 ["متابعة الأداء", "تحليلات تشغيلية مستمرة من الفريق المقيم، وتحليلات متقدمة ودعم حملات من 3,6T عند الحاجة."]].forEach(([t, b], i) => {
  const { x, w } = colX(i, 4, 0.25);
  card(s, x, 2.85, w, 2.15, { fill: C.background1, line: C.accent6, title: t, body: b, titleSize: 16, bodySize: 13 });
});
card(s, 6.83, 5.25, 5.9, 1.25, { fill: HEX.tint, line: HEX.tint, shadow: false, title: "لا عدد ثابت للمنشورات", body: "لا إلزام بعدد ثابت من المنشورات والتصاميم شهريًا؛ التنفيذ ضمن الطاقة التشغيلية المتفق عليها.", titleSize: 15, bodySize: 13, titleH: 0.36 });
card(s, L, 5.25, 6.0, 1.25, { fill: HEX.soft, line: HEX.soft, shadow: false, title: "الموقع الإلكتروني", body: "تحرير وتحديث المحتوى والصفحات التعريفية ضمن الصلاحيات، دون التطوير البرمجي أو الاستضافة أو الصيانة التقنية.", titleSize: 15, bodySize: 13, titleH: 0.36 });

// 11. 07 التحرير وصناعة المحتوى والتصميم
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "التشغيل والقنوات" });
head(s, "07", "التحرير وصناعة المحتوى والتصميم", "من الخبر الصحفي إلى الفيلم، في فريق واحد");
[["الكتابة", ["الأخبار والبيانات الصحفية", "التصريحات المعتمدة والرسائل الرسمية", "الخطابات والعروض", "الملفات التعريفية والكتيبات والنشرات", "المحتوى الداخلي"]],
 ["التصميم", ["التصاميم اليومية للمنصات", "العروض والمواد التعريفية", "المطبوعات الاعتيادية", "الإنفوجرافيك الثابت", "قوالب الحملات"]],
 ["المرئي", ["التصوير الفوتوغرافي الاعتيادي وفق الرصيد السنوي", "الأفلام والموشن جرافيك", "المحتوى المرئي، بما فيه المولّد بالذكاء الاصطناعي"]]].forEach(([t, list], i) => {
  const { x, w } = colX(i, 3, 0.3);
  card(s, x, 1.95, w, 3.35, { fill: i === 0 ? C.accent1 : i === 1 ? C.text1 : C.background1, line: i === 2 ? C.accent6 : undefined, title: t, titleSize: 20, titleH: 0.5, titleColor: i < 2 ? C.background1 : C.text1, body: bullets(list), bodyColor: i < 2 ? C.background1 : C.text1, bodySize: 14 });
});
card(s, 6.83, 5.5, 5.9, 1.0, { fill: HEX.tint, line: HEX.tint, shadow: false, title: "مراجعة لكل مخرج", body: "لغوية وتحريرية وبصرية، مع النسخ النهائية وملفات المصدر القابلة للتعديل.", titleSize: 15, bodySize: 13, titleH: 0.34, pad: 0.16 });
card(s, L, 5.5, 6.0, 1.0, { fill: "FFF7E0", line: "FFF7E0", shadow: false, title: "حدود الإنتاج", body: "الإنتاج المرئي الضخم يُسعّر مستقلًا، وإعداد النصوص والأفكار لا يُعد تكليفًا تلقائيًا بالإنتاج.", titleSize: 15, bodySize: 13, titleH: 0.34, pad: 0.16 });

// 12. 07 التواصل المؤسسي والإعلامي
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "التشغيل والقنوات" });
head(s, "07", "التواصل المؤسسي والإعلامي والعلاقات العامة", "إعلام وعلاقات عامة بالتنسيق مع فريق المركز");
[["المواد الإعلامية", "الأخبار والملفات الإعلامية ونقاط الحديث والكلمات ومواد المتحدثين، وخطط التغطية عند الحاجة."],
 ["العلاقات الإعلامية", "قوائم الجهات والصحفيين والشركاء، وتنسيق اللقاءات والتصريحات والإحاطات والتغطيات عند طلبها واعتمادها."],
 ["أصحاب المصلحة", "خطط التواصل مع الجهات ذات العلاقة وفق الاستراتيجية المعتمدة، ورسائل الزيارات والتعاون والشراكات."],
 ["الأعمال الموسمية", "دعم متخصص للأعمال الموسمية الإعلامية والمؤسسية من فريق 3,6T غير المقيم."]].forEach(([t, b], i) => {
  const col = i % 2, row = Math.floor(i / 2);
  const { x, w } = colX(col, 2, 0.35);
  card(s, x, 1.95 + row * 2.05, w, 1.8, { fill: C.background1, line: C.accent6, kicker: "0" + (i + 1), title: t, body: b, titleSize: 18, bodySize: 14 });
});
note(s, "يتم كل ذلك بالتنسيق مع الفريق الداخلي بالمركز، ويظل تنسيق المركز الداخلي ومسؤولياته الأصلية لدى موظفيه المختصين.", 6.15, { h: 0.55 });

// 13. 07 التواصل الداخلي
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "التشغيل والقنوات" });
head(s, "07", "التواصل الداخلي والفعاليات الداخلية", "خطة تواصل داخلي لكل سنة، ومخصص واضح");
card(s, 8.33, 1.95, 4.4, 4.55, { fill: C.background1, line: C.accent6, kicker: "الاستراتيجية والخطة", title: "استراتيجية موحدة لمدة العقد", titleH: 0.75, body: "وخطة تشغيلية مستقلة لكل سنة، مع إمكانية تعديل الخطط لما بعد 2027 استنادًا إلى قياس أداء السنة الأولى.", titleSize: 17, bodySize: 13 });
chips(s, ["أهداف الارتباط والوعي", "الشرائح", "المحاور", "المبادرات والفعاليات", "الجدول الزمني", "مؤشرات الأثر"], 8.55, 4.55, 3.96, { size: 12, h: 0.38, gap: 0.1 });
T(s, "من الفكرة إلى التقييم", { x: 4.1, y: 1.95, w: 4.0, h: 0.4, fontSize: 16, bold: true });
["الأفكار", "المواد والتصاميم", "التنسيق والتجهيز", "الإشراف والتنفيذ الميداني", "التقييم"].forEach((t, i) => {
  para_shape(s, 4.35, 2.45 + i * 0.8, 3.7, 0.62, i === 4 ? C.accent2 : C.accent1, t, { fontSize: 14, color: i === 4 ? C.text1 : C.background1 });
});
card(s, L, 1.95, 3.25, 4.55, { fill: C.text1, line: C.text1, kicker: "ضمن السعر الأساسي", kickerColor: C.accent2, title: "بند مالي سنوي", titleColor: C.background1, titleSize: 20, titleH: 0.5, body: "يُوزّع على الفعاليات وفق الاستراتيجية والخطة المعتمدتين، دون مقابل خارج المخصص. ولا يُتجاوز إلا بإجراء تعاقدي مناسب.\n\nتقرير لكل فعالية: الهدف، والفئة، والحضور، والمخرجات، والأثر، ومستوى الاستفادة من المخصص.", bodyColor: C.background1, bodySize: 13 });

// 14. 07 الفعاليات الخارجية
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "التشغيل والقنوات" });
head(s, "07", "الفعاليات الخارجية والمعارض والمؤتمرات والورش", "نشارك حيث تخدم المشاركة أهداف المركز");
steps(s, [
  { t: "الإطار والمعايير", b: "ربط قرار المشاركة بالأهداف الاستراتيجية والجمهور والرسائل والقيمة المتوقعة والملاءمة والتكلفة." },
  { t: "نموذج التقييم", b: "سبب المشاركة، وشكل الحضور الأنسب، والجمهور، والمخرجات، والأدوار، والرسائل، واحتياجات الإنتاج والتغطية، ومؤشرات النجاح." },
  { t: "الملف والخطة", b: "التصور الإبداعي الأولي ثم التفصيلي للجناح وتشغيله ميدانيًا، والمحتوى والمواد، والتنسيق والإشراف، وقياس النتائج." },
], 1.95, 2.9, { bodySize: 14 });
card(s, 6.83, 5.05, 5.9, 1.45, { fill: HEX.tint, line: HEX.tint, shadow: false, kicker: "ضمن الخدمات الأساسية", kickerColor: HEX.deep, title: "التخطيط والتصور والإشراف", body: "ملفات وخطط المشاركات المعتمدة، والتصور الإبداعي، والتشغيل الميداني، وقياس النتائج.", titleSize: 15, bodySize: 13, titleH: 0.36 });
card(s, L, 5.05, 6.0, 1.45, { fill: "FFF7E0", line: "FFF7E0", shadow: false, kicker: "يُسعّر مستقلًا بعد الموافقة", kickerColor: "9A7A00", title: "التصنيع والتوريد والطباعة", body: "تجهيز الأجنحة والمنصات، والخدمات الميدانية، وطباعة أو تصنيع المواد التسويقية التعريفية.", titleSize: 15, bodySize: 13, titleH: 0.36 });

// 15. 08 النطاق
pres.addSection({ title: "النطاق" });
s = pres.addSlide({ masterName: "CONTENT_TURQ", sectionTitle: "النطاق" });
head(s, "08", "نطاق العمل", "خمسة عشر مسارًا في عقد واحد", "turq");
const tracks = ["تحليل الوضع الراهن والتأسيس", "الاستراتيجية الاتصالية", "المنتجات والمبادرات", "الحسابات والتواصل الرقمي", "التحرير والمحتوى والتصميم", "الإعلام والعلاقات العامة", "التواصل الداخلي", "الفعاليات الخارجية", "الهوية البصرية للمركز", "هوية «تكعيب» والهويات الفرعية", "الرصد وإدارة القضايا", "التصوير ومكتبة الأصول", "التقرير السنوي", "الأعمال المجدولة والعاجلة", "لغة المخرجات والترجمة"];
tracks.forEach((t, i) => {
  const col = i % 5, row = Math.floor(i / 5);
  const { x, w } = colX(col, 5, 0.2);
  const y = 1.95 + row * 1.5;
  s.addShape(SH.ROUNDED_RECTANGLE, { x, y, w, h: 1.3, rectRadius: 0.12, fill: { color: HEX.white, transparency: 86 }, line: { color: HEX.white, transparency: 55, width: 0.75 }, objectName: "track" });
  para_shape(s, x + w - 0.72, y + 0.16, 0.56, 0.38, C.accent2, String(i + 1), { fontSize: 13, color: C.text1 });
  T(s, t, { x: x + 0.15, y: y + 0.62, w: w - 0.3, h: 0.6, fontSize: 14, bold: true, color: C.background1 });
});
T(s, "مدة العقد 36 شهرًا · فريق تشغيل مقيم في المركز · خبرات تخصصية عند الحاجة", { x: L, y: 6.4, w: CW, h: 0.35, fontSize: 13, color: C.background1 });

// 16. 08 السعر الأساسي vs مستقل
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "النطاق" });
head(s, "08", "حدود النطاق", "ما يشمله السعر الأساسي، وما يُسعّر مستقلًا");
card(s, 6.83, 1.9, 5.9, 4.65, { fill: C.accent1, line: C.accent1, title: "ضمن السعر الأساسي", titleColor: C.background1, titleSize: 20, titleH: 0.5, bodyColor: C.background1, bodySize: 13,
  body: bullets(["التصوير الاعتيادي وفق رصيد 24 جلسة سنويًا أو ما يعادلها", "الأفلام والموشن جرافيك والمحتوى المرئي، بما فيه المولّد بالذكاء الاصطناعي", "إعداد النصوص والأفكار الإبداعية", "بند مالي سنوي لفعاليات التواصل الداخلي", "ملفات وخطط المشاركات الخارجية وتصورها والإشراف عليها", "الشعارات والهويات الفرعية المستقبلية مع تطبيقاتها المعتادة", "التقارير السنوية اللاحقة، بما فيها دور المستشار المتخصص", "الترجمة والتحرير والمراجعة اللغوية باللغتين"]) });
card(s, L, 1.9, 5.95, 4.65, { fill: C.background1, line: C.accent6, title: "يُسعّر مستقلًا", titleSize: 20, titleH: 0.5, bodySize: 13,
  body: bullets(["التقرير السنوي لعام 2026: مشروع مستقل في العرض المالي", "طباعة التقرير السنوي وفق المواصفات والنسخ واللغات", "الإنتاج المرئي الضخم", "تصنيع الأجنحة والمنصات وتوريدها وتجهيزها، والخدمات الميدانية، وطباعة مواد الفعاليات الخارجية", "إعادة تصميم الشعار الأساسي للمركز، بتكليف صريح مستقل", "التطوير البرمجي والاستضافة والتكاملات التقنية للموقع ومنصة «تكعيب»", "بناء علامة تجارية مستقلة بالكامل عن هوية المركز من الصفر"]) });

// 17. 09 الهوية البصرية للمركز
pres.addSection({ title: "الهوية" });
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الهوية" });
head(s, "09", "تطوير الهوية البصرية للمركز وتطبيقاتها", "نطوّر نظام الهوية، ونحافظ على الشعار");
const sys = [["عناصر التصميم", HEX.turq], ["الألوان المساندة", HEX.saf], ["الطباعة", HEX.char], ["الصور", HEX.deep], ["الأيقونات", "5DADE2"], ["الأنماط", HEX.ink], ["القوالب", HEX.slate]];
sys.forEach(([t, col], i) => {
  const c = i % 4, r = Math.floor(i / 4);
  const x = 12.73 - (c + 1) * 1.62 + 0.12, y = 1.95 + r * 2.05;
  s.addShape(SH.ROUNDED_RECTANGLE, { x, y, w: 1.5, h: 1.25, rectRadius: 0.1, fill: { color: col }, line: { color: col }, objectName: "swatch" });
  if (i === 5) pattern(s, x + 0.12, y + 0.15, 3, 3, HEX.white, 55, 0.3, 0.08);
  T(s, t, { x: x - 0.05, y: y + 1.32, w: 1.6, h: 0.4, fontSize: 13, bold: true, align: "center" });
});
card(s, L, 1.95, 5.6, 2.45, { fill: C.background1, line: C.accent6, title: "دليل تطبيقي محدث وقوالب قابلة للتعديل", titleH: 0.75, body: "للحسابات الرقمية، والعروض، والتقارير، والمراسلات، والمطبوعات، والفعاليات، بما يتوافق مع الهوية المعتمدة.", titleSize: 17, bodySize: 14 });
card(s, L, 4.6, 5.6, 1.9, { fill: C.text1, line: C.text1, title: "ضوابط ثابتة", titleColor: C.background1, titleSize: 17, bodyColor: C.background1, bodySize: 13,
  body: bullets(["لا تغيير في الشعار الأساسي؛ إعادة تصميمه بتكليف صريح مستقل", "ضوابط الاستخدام المشترك مع هويات الوزارة والجهات الشريكة"]) });
T(s, "تبدأ الخدمة بتقييم الهوية الحالية، ثم تطوير نظامها التطبيقي.", { x: 6.4, y: 6.15, w: 6.33, h: 0.35, fontSize: 12, color: C.folHlink });

// 18. 09 تكعيب
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الهوية" });
head(s, "09", "هوية منصة «تكعيب» والهويات الفرعية", "«تكعيب»: هوية منسجمة، وتجربة استخدام واضحة");
// isometric cube illustration (left)
const cx = 2.35, cy = 3.6, a = 1.25;
s.addShape(SH.CUSTOM_GEOMETRY, { x: cx - a, y: cy - a * 1.15, w: 2 * a, h: a * 1.15, fill: { color: HEX.saf }, line: { color: HEX.white, width: 2 }, points: [{ x: a, y: 0 }, { x: 2 * a, y: a * 0.575 }, { x: a, y: a * 1.15 }, { x: 0, y: a * 0.575 }, { close: true }], objectName: "cube-top" });
s.addShape(SH.CUSTOM_GEOMETRY, { x: cx - a, y: cy - a * 0.575, w: a, h: a * 1.725, fill: { color: HEX.turq }, line: { color: HEX.white, width: 2 }, points: [{ x: 0, y: 0 }, { x: a, y: a * 0.575 }, { x: a, y: a * 1.725 }, { x: 0, y: a * 1.15 }, { close: true }], objectName: "cube-left" });
s.addShape(SH.CUSTOM_GEOMETRY, { x: cx, y: cy - a * 0.575, w: a, h: a * 1.725, fill: { color: HEX.char }, line: { color: HEX.white, width: 2 }, points: [{ x: 0, y: a * 0.575 }, { x: a, y: 0 }, { x: a, y: a * 1.15 }, { x: 0, y: a * 1.725 }, { close: true }], objectName: "cube-right" });
T(s, "رسم توضيحي، وليس مقترح شعار", { x: 0.9, y: 5.45, w: 2.9, h: 0.35, fontSize: 11, color: C.folHlink, align: "center" });
[["الشعار والهوية البصرية", "تنسجم مع هوية المركز، وتعكس طبيعة المنتجات ونواتج التعلم والفئات المستهدفة من الجهات والأفراد."],
 ["الدليل والهوية التطبيقية", "دليل استخدام مختصر، وهوية تطبيقية للمنصة."],
 ["الواجهات وتجربة المستخدم", "للمسارات والشاشات المتفق عليها، بنماذج قابلة للمراجعة وملفات مصدر نهائية."],
 ["الهويات الفرعية المستقبلية", "شعارات وهويات للمنصات والمنتجات الجديدة، مستمدة من هوية المركز، ضمن السعر الأساسي."]].forEach(([t, b], i) => {
  const col = i % 2, row = Math.floor(i / 2);
  const { x, w } = colX(col, 2, 0.3, 4.3, R);
  card(s, x, 1.95 + row * 1.95, w, 1.75, { fill: C.background1, line: C.accent6, kicker: "0" + (i + 1), title: t, body: b, titleSize: 16, bodySize: 13 });
});
note(s, "خارج هذه الخدمة: تطوير منصة برمجية، والاستضافة، والتكاملات التقنية، وبناء علامة مستقلة بالكامل من الصفر؛ وتخضع لنطاق مستقل إذا طُلبت.", 5.95, { h: 0.6, fill: "FFF7E0" });

// 19. 10 الرصد الإعلامي
pres.addSection({ title: "الإدارة والجودة" });
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الإدارة والجودة" });
head(s, "10", "الرصد الإعلامي وإدارة القضايا الاتصالية", "نرصد ونحلل وننبّه، والقرار لدى الجهة المخولة");
steps(s, [
  { t: "الرصد", b: "التغطيات والأخبار والمحتوى الرقمي عن المركز ومبادراته وتطوير المناهج، مع الفصل بين ذكر المركز وأخبار القطاع العامة." },
  { t: "التحليل", b: "اتجاهات التغطية وجودتها والرسائل المتداولة، مع ملخصات رصد وتقارير دورية وتوصيات." },
  { t: "التنبيه والتصعيد", b: "للحالات الحساسة: توثيق المصدر والوقائع، وتقدير أولي للموقف، ومسودات خيارات اتصالية." },
  { t: "قرار الجهة المخولة", b: "قرارات الرد والنشر تبقى لدى الجهة المخولة في المركز." },
], 1.95, 3.0, { bodySize: 13, numFill: C.accent2, numColor: C.text1 });
card(s, L, 5.2, CW, 1.3, { fill: C.text1, line: C.text1, title: "بروتوكول القضايا والأزمات", titleColor: C.background1, titleSize: 16, titleH: 0.38, body: "تصنيف القضايا والأزمات الإعلامية، ومسار التنسيق مع المركز والوزارة عند ارتباط الموضوع بهما.", bodyColor: C.background1, bodySize: 14 });

// 20. 10 المجدول والعاجل
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الإدارة والجودة" });
head(s, "10", "الأعمال المجدولة والطلبات العاجلة", "مساران للعمل، وسجل واحد يحكمهما");
card(s, 9.33, 1.95, 3.4, 1.85, { fill: C.accent1, line: C.accent1, title: "المسار المجدول", titleColor: C.background1, titleSize: 18, body: "ما ورد في الخطط والتقاويم المعتمدة.", bodyColor: C.background1, bodySize: 14 });
card(s, 9.33, 4.0, 3.4, 1.85, { fill: C.accent2, line: C.accent2, title: "المسار العاجل", titleSize: 18, body: "طلبات غير مجدولة تنشأ عن مستجدات أعمال المركز.", bodySize: 14 });
T(s, "السجل الموحد", { x: 4.6, y: 1.95, w: 4.4, h: 0.4, fontSize: 17, bold: true });
chips(s, ["الجهة الطالبة", "الوصف", "الأولوية", "المدخلات", "مسؤول التنفيذ", "مواعيد التسليم", "حالة الاعتماد", "الأثر على المهام الأخرى"], 4.6, 2.45, 4.4, { size: 12, h: 0.4, gap: 0.1, fill: HEX.tint, line: HEX.tint, bold: true });
card(s, 4.6, 4.7, 4.4, 1.15, { fill: C.background1, line: C.accent6, pad: 0.16, title: "عند التعارض", titleSize: 15, titleH: 0.34, body: "يرفع مدير الحساب الأثر وتوصية بإعادة ترتيب الأولويات لاعتمادها من الممثل المختص.", bodySize: 13 });
card(s, L, 1.95, 3.7, 1.85, { fill: C.background1, line: C.accent6, title: "الطاقة التشغيلية", titleSize: 15, titleH: 0.34, body: "لا عدد شهري ثابت؛ التنفيذ ضمن الطاقة والموارد المشمولة وبالمواعيد والأولويات المعتمدة.", bodySize: 13 });
card(s, L, 4.0, 3.7, 1.85, { fill: C.text1, line: C.text1, title: "خارج الدوام", titleColor: C.background1, titleSize: 15, titleH: 0.34, body: "نقطة اتصال ومسار تصعيد وفق مستويات الاستجابة، دون افتراض تواجد دائم للفريق المقيم.", bodyColor: C.background1, bodySize: 13 });
note(s, "وصف الطلب بالعاجل لا يُعد موافقة على مصروفات إضافية أو تجاوزًا للاعتمادات.", 6.05, { h: 0.5, fill: "FFF7E0" });

// 21. 10 التصوير والمكتبة
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الإدارة والجودة" });
head(s, "10", "التصوير الفوتوغرافي ومكتبة الصور والأصول", "رصيد تصوير مرن، ومكتبة يجد فيها المركز كل أصوله");
s.addShape(SH.ROUNDED_RECTANGLE, { x: 8.73, y: 1.95, w: 4.0, h: 4.55, rectRadius: 0.12, fill: { color: C.accent1 }, line: { color: C.accent1 }, shadow: shadow(), objectName: "stat" });
T(s, "24", { x: 8.93, y: 2.15, w: 3.6, h: 1.5, fontSize: 88, bold: true, color: C.background1, align: "center" });
T(s, "جلسة تصوير سنويًا\nأو ما يعادلها من الساعات", { x: 8.93, y: 3.7, w: 3.6, h: 0.9, fontSize: 16, bold: true, color: C.background1, align: "center" });
T(s, "رصيد مرن يُرحّل المتبقي منه إلى الأعوام التالية ضمن مدة العقد، دون إلغائه بنهاية السنة. وتُحدد آلية احتسابه مسبقًا.", { x: 9.03, y: 4.75, w: 3.4, h: 1.5, fontSize: 13, color: C.background1, align: "center" });
card(s, 4.73, 1.95, 3.75, 2.15, { fill: C.background1, line: C.accent6, title: "الخدمة", body: "المصور والمعدات الأساسية، والانتقاء والمعالجة والتسليم، لتغطية أنشطة المركز عند الحاجة.", titleSize: 16, bodySize: 13 });
card(s, 4.73, 4.35, 3.75, 2.15, { fill: C.background1, line: C.accent6, title: "التسليم", body: "صور مختارة معالجة للنشر والأرشفة، وآلية لتسليم الأصول وحقوقها، دون عدد ثابت لكل جلسة قبل الاتفاق على المواصفات.", titleSize: 16, bodySize: 13 });
card(s, L, 1.95, 3.88, 4.55, { fill: C.text1, line: C.text1, title: "المكتبة المركزية", titleColor: C.background1, titleSize: 18, titleH: 0.5, body: bullets(["قابلة للبحث", "صور وفيديوهات وتصاميم ومواد وملفات مصدر", "فهرسة وتصنيف", "بيانات الحقوق والموافقات", "تُحدّث طوال مدة التعاقد"]), bodyColor: C.background1, bodySize: 14 });

// 22. 10 التقرير السنوي
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الإدارة والجودة" });
head(s, "10", "التقرير السنوي", "مستشار متخصص من المدخلات إلى الإخراج");
["تحديد المدخلات", "طلبها وتجميعها", "اللقاءات اللازمة", "بناء القصة والسردية", "الهيكلة والصياغة والتدقيق", "التصميم والإخراج", "نسخ رقمية وجاهزة للطباعة"].forEach((t, i) => {
  const { x, w } = colX(i, 7, 0.08);
  para_shape(s, x, 2.0, w, 0.95, i === 6 ? C.accent2 : C.accent1, t, { fontSize: 12, color: i === 6 ? C.text1 : C.background1 });
});
[["تقرير 2026", "مشروع مستقل في العرض المالي، شاملًا المستشار المتخصص والمفهوم والسردية والتصميم والإخراج.", "FFF7E0"],
 ["التقارير اللاحقة", "ضمن الخدمة الأساسية متى حل موعدها خلال التعاقد، بما فيها دور المستشار، دون إعادة تسعير.", HEX.tint],
 ["الطباعة", "تُسعّر مستقلًا وفق المواصفات وعدد الصفحات والنسخ واللغات المعتمدة.", HEX.soft]].forEach(([t, b, f], i) => {
  const { x, w } = colX(i, 3, 0.3);
  card(s, x, 3.25, w, 1.75, { fill: f, line: f, shadow: false, title: t, body: b, titleSize: 17, bodySize: 13 });
});
note(s, "يوفر المركز البيانات والأرقام والمعلومات المصدرية ويعتمدها أصحاب الصلاحية فيه، ويحتفظ المشغل بسجل للمحتوى المستلم والملاحظات والاعتمادات.", 5.3, { h: 0.75 });

// 23. 10 اللغة
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الإدارة والجودة" });
head(s, "10", "لغة المخرجات والترجمة", "بالعربية والإنجليزية، دون تكلفة إضافية");
s.addShape(SH.ROUNDED_RECTANGLE, { x: 9.73, y: 2.0, w: 3.0, h: 3.0, rectRadius: 0.15, fill: { color: C.accent1 }, line: { color: C.accent1 }, shadow: shadow(), objectName: "lang-ar" });
T(s, "ع", { x: 9.73, y: 2.2, w: 3.0, h: 2.2, fontSize: 120, bold: true, color: C.background1, align: "center", valign: "middle" });
s.addShape(SH.ROUNDED_RECTANGLE, { x: 6.43, y: 2.0, w: 3.0, h: 3.0, rectRadius: 0.15, fill: { color: C.text1 }, line: { color: C.text1 }, shadow: shadow(), objectName: "lang-en" });
s.addText("EN", { isTextBox: true, x: 6.43, y: 2.2, w: 3.0, h: 2.2, fontSize: 96, bold: true, color: C.background1, align: "center", valign: "middle", margin: 0 });
card(s, L, 2.0, 5.5, 4.4, { fill: C.background1, line: C.accent6, title: "ما يشمله الالتزام", titleSize: 18, titleH: 0.5, bodySize: 14,
  body: bullets(["جميع المخرجات والأعمال المطلوبة باللغتين عند الطلب", "الترجمة والتحرير والمراجعة اللغوية باللغتين", "دقة المحتوى وسلامته اللغوية", "الاتساق مع الهوية المؤسسية وأسلوب التواصل المعتمد", "مشمولة ضمن نطاق العمل والعرض المالي، دون تكاليف إضافية"]) });
T(s, "ومع كل مخرج: مراجعة لغوية وتحريرية وبصرية، ونسخ نهائية، وملفات مصدر قابلة للتعديل.", { x: 6.43, y: 5.3, w: 6.3, h: 0.9, fontSize: 14, color: C.folHlink });

// 24. 11 الفريق
pres.addSection({ title: "الفريق والملحق" });
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الفريق والملحق" });
head(s, "11", "فريق العمل", "فريق مقيم في المركز، وخبرات تساند عند الحاجة");
[["الفريق المقيم", "التشغيل اليومي: الحسابات، والمحتوى، والتصميم، والمتابعة، والتحليلات التشغيلية.", C.accent1, C.background1],
 ["مدير الحساب", "نقطة الاتصال، وترتيب الأولويات، ورفع أثر التعارض بين المجدول والعاجل.", C.text1, C.background1],
 ["المستشار المتخصص", "يقود التقرير السنوي من تحديد المدخلات إلى الإخراج.", C.accent2, C.text1],
 ["المصور", "التصوير الاعتيادي وفق الرصيد السنوي، والمعالجة والتسليم.", C.dk2 || HEX.deep, C.background1],
 ["خبرات 3,6T", "التحليلات المتقدمة، والحملات، والأعمال الموسمية، والطوارئ خارج الدوام.", HEX.slate, C.text1]].forEach(([t, b, f, tc], i) => {
  const { x, w } = colX(i, 5, 0.22);
  s.addShape(SH.ROUNDED_RECTANGLE, { x, y: 1.95, w, h: 2.0, rectRadius: 0.12, fill: { color: f }, line: { color: f }, objectName: "role-photo" });
  pattern(s, x + 0.15, 2.1, 4, 4, typeof tc === "string" && tc === C.text1 ? HEX.char : HEX.white, 82, 0.34, 0.08);
  s.addShape(SH.OVAL, { x: x + w / 2 - 0.55, y: 2.4, w: 1.1, h: 1.1, fill: { color: HEX.white, transparency: 15 }, line: { color: HEX.white, width: 2 }, objectName: "avatar" });
  card(s, x, 4.1, w, 2.2, { fill: C.background1, line: C.accent6, title: t, body: b, titleSize: 15, titleH: 0.62, bodySize: 13 });
});
note(s, "تُستكمل أسماء الفريق وسيرهم وصورهم في النسخة النهائية من العرض.", 6.42, { h: 0.38 });

// 25. ملحق أ: المطابقة
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "الفريق والملحق" });
head(s, "أ", "ملحق · مطابقة نطاق العمل", "كل بند في نطاق العمل، وأين يجيب عنه العرض");
const map = [["1", "تحليل الوضع الراهن والتأسيس", "6"], ["2", "الاستراتيجية الاتصالية للمركز", "7، 8"], ["3", "التسويق والاتصال بمنتجات المركز ومبادراته", "9، 10"], ["4", "إدارة الحسابات والتواصل الرقمي", "11"], ["5", "التحرير وصناعة المحتوى والتصميم", "12"], ["6", "التواصل المؤسسي والإعلامي والعلاقات العامة", "13"], ["7", "التواصل الداخلي والفعاليات الداخلية", "14"], ["8", "الفعاليات الخارجية والمعارض والمؤتمرات والورش", "15"]];
const map2 = [["9", "تطوير الهوية البصرية للمركز وتطبيقاتها", "18"], ["10", "هوية منصة تكعيب والهويات الفرعية", "19"], ["11", "الرصد الإعلامي وإدارة القضايا الاتصالية", "20"], ["12", "التصوير الفوتوغرافي ومكتبة الصور والأصول", "22"], ["13", "التقرير السنوي", "23"], ["14", "الأعمال المجدولة والطلبات العاجلة", "21"], ["15", "لغة المخرجات والترجمة", "24"]];
table(s, ["#", "بند نطاق العمل", "الشريحة"], map, 6.83, 1.95, 5.9, [0.5, 4.3, 1.1], { size: 13, rowH: 0.48, name: "map-1" });
table(s, ["#", "بند نطاق العمل", "الشريحة"], map2, L, 1.95, 5.9, [0.5, 4.3, 1.1], { size: 13, rowH: 0.48, name: "map-2" });
T(s, "حدود النطاق بين السعر الأساسي والتسعير المستقل في الشريحة 17.", { x: L, y: 6.35, w: 5.9, h: 0.35, fontSize: 12, color: C.folHlink });

// 26. CLOSING
s = pres.addSlide({ masterName: "CLOSING", sectionTitle: "الفريق والملحق" });
pattern(s, 7.3, 0.3, 12, 4, HEX.turq, 55);
s.addImage({ path: ASSETS + "logo-white.png", x: 11.13, y: 2.1, w: 1.6, h: 1.07, objectName: "logo" });
T(s, "شكرًا لكم", { x: 4.5, y: 3.35, w: 8.23, h: 0.9, fontSize: 40, bold: true, color: C.background1 });
T(s, "تسويق ثلاثمائة وستين درجة: استراتيجية ومحتوى وإنتاج وقياس تحت إدارة واحدة.", { x: 4.5, y: 4.3, w: 8.23, h: 0.5, fontSize: 16, color: C.accent6 });
[["www.360.sa", 2.0], ["Business@360.sa", 2.4], ["+966 592 360 360", 2.4], ["طريق الدائري الشمالي، النفل، الرياض 13312", 4.6]].reduce((xr, [t, w], i) => {
  s.addText(t, { isTextBox: true, x: xr - w, y: 5.6, w, h: 0.45, fontSize: 13, bold: true, color: C.background1, align: "right", margin: 0, rtlMode: i === 3, lang: i === 3 ? "ar-SA" : "en-US" });
  return xr - w - 0.3;
}, R);

// ---------------- write + theme + arabic font slots ----------------
(async () => {
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  const zip = await JSZip.loadAsync(fs.readFileSync(OUT));
  const p = "ppt/theme/theme1.xml";
  let x = await zip.file(p).async("string");
  x = x.replace(/<a:cs typeface="[^"]*"\/>/g, '<a:cs typeface="Alexandria"/>').replace(/<a:font script="Arab" typeface="[^"]*"\/>/g, '<a:font script="Arab" typeface="Alexandria"/>');
  zip.file(p, x);
  fs.writeFileSync(OUT, await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
  console.log("wrote", OUT);
})();
