// English source text, Simplified Chinese, Traditional Chinese.
const translations = [
  [
    "Let’s talk business",
    "洽谈合作",
    "洽談合作"
  ],
  [
    "Our products",
    "产品中心",
    "產品中心"
  ],
  [
    "About us",
    "关于我们",
    "關於我們"
  ],
  [
    "How we work",
    "合作流程",
    "合作流程"
  ],
  [
    "Get a quote",
    "获取报价",
    "取得報價"
  ],
  [
    "YOUR NEXT SUPPLY PARTNER",
    "值得信赖的供应伙伴",
    "值得信賴的供應夥伴"
  ],
  [
    "Explore our products",
    "探索产品",
    "探索產品"
  ],
  [
    "Talk to our team",
    "联系我们",
    "聯絡我們"
  ],
  [
    "From your first sample to your next shipment.",
    "从第一份样品到下一批出货。",
    "從第一份樣品到下一批出貨。"
  ],
  [
    "A simpler way to source.",
    "让采购更简单。",
    "讓採購更簡單。"
  ],
  [
    "Quality-first sourcing",
    "品质优先",
    "品質優先"
  ],
  [
    "Specifications that work for you.",
    "围绕您的规格需求。",
    "圍繞您的規格需求。"
  ],
  [
    "Flexible order options",
    "灵活订购",
    "靈活訂購"
  ],
  [
    "Start with what your business needs.",
    "从您的实际业务需求出发。",
    "從您的實際業務需求出發。"
  ],
  [
    "Export-ready support",
    "出口支持",
    "出口支援"
  ],
  [
    "Clear steps from order to delivery.",
    "从下单到交付，流程清晰。",
    "從下單到交付，流程清晰。"
  ],
  [
    "People you can reach",
    "沟通顺畅",
    "溝通順暢"
  ],
  [
    "One team. Open communication.",
    "专人对接，及时沟通。",
    "專人對接，及時溝通。"
  ],
  [
    "OUR PRODUCT COLLECTION",
    "产品系列",
    "產品系列"
  ],
  [
    "Good products.",
    "优质产品。",
    "優質產品。"
  ],
  [
    "Great possibilities.",
    "无限可能。",
    "無限可能。"
  ],
  [
    "Explore our core categories and find your fit.",
    "浏览核心品类，找到适合您的产品。",
    "瀏覽核心品類，找到適合您的產品。"
  ],
  [
    "All products",
    "全部产品",
    "全部產品"
  ],
  [
    "Looking for something specific? We’re here to help.",
    "有特定采购需求？我们随时为您提供支持。",
    "有特定採購需求？我們隨時為您提供支援。"
  ],
  [
    "Send your sourcing request",
    "提交采购需求",
    "提交採購需求"
  ],
  [
    "A PARTNER BEYOND THE ORDER",
    "不止订单，更是伙伴",
    "不止訂單，更是夥伴"
  ],
  [
    "CLOSER CONNECTIONS.",
    "紧密连接。",
    "緊密連接。"
  ],
  [
    "FURTHER POSSIBILITIES.",
    "共创可能。",
    "共創可能。"
  ],
  [
    "HELLO, WE’RE NORTHLINE",
    "认识 NORTHLINE",
    "認識 NORTHLINE"
  ],
  [
    "Your ambition.",
    "您的愿景。",
    "您的願景。"
  ],
  [
    "Our shared direction.",
    "我们共同的方向。",
    "我們共同的方向。"
  ],
  [
    "Meet your next sourcing partner",
    "认识您的采购伙伴",
    "認識您的採購夥伴"
  ],
  [
    "FROM IDEA TO DELIVERY",
    "从需求到交付",
    "從需求到交付"
  ],
  [
    "Simple steps. Clear progress.",
    "流程简单，进度清晰。",
    "流程簡單，進度清晰。"
  ],
  [
    "Let’s get started ↗",
    "开启合作 ↗",
    "開啟合作 ↗"
  ],
  [
    "Tell us what you need",
    "告诉我们您的需求",
    "告訴我們您的需求"
  ],
  [
    "Share your product specifications, quantities, and destination.",
    "提供产品规格、采购数量和目的地。",
    "提供產品規格、採購數量和目的地。"
  ],
  [
    "Find the right solution",
    "找到合适的方案",
    "找到合適的方案"
  ],
  [
    "Discuss product options, samples, pricing, and estimated lead times.",
    "沟通产品选项、样品、价格及预计交期。",
    "溝通產品選項、樣品、價格及預計交期。"
  ],
  [
    "Confirm the details",
    "确认订单细节",
    "確認訂單細節"
  ],
  [
    "Agree on specifications, order terms, and inspection requirements.",
    "确认产品规格、订单条款及检验要求。",
    "確認產品規格、訂單條款及檢驗要求。"
  ],
  [
    "Get ready for delivery",
    "安排发货交付",
    "安排出貨交付"
  ],
  [
    "Coordinate packaging, shipping arrangements, and export documents.",
    "协调包装、运输安排及出口文件。",
    "協調包裝、運輸安排及出口文件。"
  ],
  [
    "LET’S MAKE IT HAPPEN",
    "让合作从这里开始",
    "讓合作從這裡開始"
  ],
  [
    "Your next project",
    "您的下一个项目，",
    "您的下一個專案，"
  ],
  [
    "starts with a",
    "从一次",
    "從一次"
  ],
  [
    "conversation.",
    "沟通开始。",
    "溝通開始。"
  ],
  [
    "Tell us a little about what you’re looking for.",
    "请告诉我们您的采购需求。",
    "請告訴我們您的採購需求。"
  ],
  [
    "We’ll take it from there.",
    "后续交给我们一起推进。",
    "後續交給我們一起推進。"
  ],
  [
    "Template preview · Replace the sample company details and email before publishing.",
    "模板预览 · 发布前请替换示例公司信息和邮箱。",
    "範本預覽 · 發布前請替換示例公司資訊和電子郵件。"
  ],
  [
    "Your name",
    "您的姓名",
    "您的姓名"
  ],
  [
    "Business email",
    "工作邮箱",
    "工作電子郵件"
  ],
  [
    "Company",
    "公司名称",
    "公司名稱"
  ],
  [
    "Product of interest",
    "意向产品",
    "意向產品"
  ],
  [
    "Select a product",
    "请选择产品",
    "請選擇產品"
  ],
  [
    "Other / Custom sourcing",
    "其他 / 定制采购",
    "其他 / 客製採購"
  ],
  [
    "How can we help?",
    "您的采购需求",
    "您的採購需求"
  ],
  [
    "Prepare inquiry email",
    "生成询盘邮件",
    "產生詢價郵件"
  ],
  [
    "Opens your email app with your inquiry. No information is stored on this website.",
    "将打开邮件客户端填写询盘，本网站不保存任何表单信息。",
    "將開啟電子郵件應用程式填寫詢價，本網站不儲存任何表單資訊。"
  ],
  [
    "Better sourcing. Built together.",
    "携手合作，让采购更好。",
    "攜手合作，讓採購更好。"
  ],
  [
    "Back to top ↑",
    "返回顶部 ↑",
    "返回頂端 ↑"
  ],
  [
    "Northline. All rights reserved.",
    "Northline. 保留所有权利。",
    "Northline. 保留所有權利。"
  ],
  [
    "Alex Smith",
    "请输入姓名",
    "請輸入姓名"
  ],
  [
    "Your company",
    "请输入公司名称",
    "請輸入公司名稱"
  ],
  [
    "Product details, quantity, delivery destination…",
    "产品详情、数量、收货目的地……",
    "產品詳情、數量、收貨目的地……"
  ],
  [
    "Open navigation",
    "打开导航",
    "開啟導覽"
  ],
  [
    "Close navigation",
    "关闭导航",
    "關閉導覽"
  ],
  [
    "Main navigation",
    "主导航",
    "主導覽"
  ],
  [
    "Product categories",
    "产品分类",
    "產品分類"
  ],
  [
    "Our service commitments",
    "服务承诺",
    "服務承諾"
  ],
  [
    "Northline home",
    "Northline 首页",
    "Northline 首頁"
  ],
  [
    "Everyday goods. Global perspective.",
    "生活好物，全球视野。",
    "生活好物，全球視野。"
  ],
  [
    "Made for",
    "精选好物，",
    "精選好物，"
  ],
  [
    "everyday",
    "点亮",
    "點亮"
  ],
  [
    "living.",
    "日常生活。",
    "日常生活。"
  ],
  [
    "Small essentials. Everyday possibilities.",
    "日用小件，生活里的更多可能。",
    "日用小物，生活裡的更多可能。"
  ],
  [
    "Discover lifestyle products for your store, your customers, and their daily lives.",
    "为您的店铺和客户，探索贴近日常的生活用品。",
    "為您的店舖和客戶，探索貼近日常的生活用品。"
  ],
  [
    "CURATED FOR LIFE.",
    "精选生活好物。",
    "精選生活好物。"
  ],
  [
    "READY FOR YOUR STORE.",
    "丰富您的店铺。",
    "豐富您的店舖。"
  ],
  [
    "SMALL THINGS.",
    "轻巧小件。",
    "輕巧小物。"
  ],
  [
    "EVERYDAY JOY.",
    "日常美好。",
    "日常美好。"
  ],
  [
    "HOME / STYLE / OUTDOORS",
    "居家 / 时尚 / 户外",
    "居家 / 時尚 / 戶外"
  ],
  [
    "Explore small essentials for everyday living.",
    "探索日常生活所需的实用小件。",
    "探索日常生活所需的實用小物。"
  ],
  [
    "MADE FOR EVERYDAY LIFE ↙",
    "为日常生活而选 ↙",
    "為日常生活而選 ↙"
  ],
  [
    "Illustrative product selection. Final materials, sizes, features, and availability are confirmed by quotation.",
    "产品为选品示例，实际材质、尺寸、功能与供货情况以报价确认为准。",
    "產品為選品示例，實際材質、尺寸、功能與供貨情況以報價確認為準。"
  ],
  [
    "We focus on small everyday products for retailers and lifestyle businesses: clothing, pet supplies, camping gear, home essentials, personal care tools, and accessories.",
    "我们专注为零售商和生活用品业务提供日常小件，涵盖服装、宠物用品、露营装备、居家好物、个护工具及各类配件。",
    "我們專注為零售商和生活用品業務提供日常小物，涵蓋服裝、寵物用品、露營裝備、居家好物、個人護理工具及各類配件。"
  ],
  [
    "Tell us your target market, product preferences, and quantities. Together, we can explore a collection that fits your customers and your business.",
    "告诉我们您的目标市场、产品偏好与采购数量，一起探索适合您的客户和业务的产品组合。",
    "告訴我們您的目標市場、產品偏好與採購數量，一起探索適合您的客戶和業務的產品組合。"
  ],
  [
    "Everyday products. Global possibilities.",
    "日用好物，全球机遇。",
    "日用好物，全球機遇。"
  ],
  [
    "Illustrated selection of everyday lifestyle products",
    "日常生活用品组合示意图",
    "日常生活用品組合示意圖"
  ],
  [
    "NORTHLINE — Everyday goods, global possibilities.",
    "NORTHLINE — 日用好物与全球采购",
    "NORTHLINE — 日用好物與全球採購"
  ],
  [
    "Lifestyle goods, home essentials, clothing, pet supplies, camping gear, and small accessories for global sourcing.",
    "面向全球采购的生活用品、居家好物、服装、宠物用品、露营装备及各类小配件。",
    "面向全球採購的生活用品、居家好物、服裝、寵物用品、露營裝備及各類小配件。"
  ],
  [
    "Clothing",
    "服装",
    "服裝"
  ],
  [
    "Everyday T-shirt",
    "日常休闲 T 恤",
    "日常休閒 T 恤"
  ],
  [
    "Easy-to-style everyday basics",
    "轻松搭配的日常基础款",
    "輕鬆搭配的日常基本款"
  ],
  [
    "Inquire about Everyday T-shirt",
    "咨询日常休闲 T 恤",
    "詢問日常休閒 T 恤"
  ],
  [
    "Illustration: Everyday T-shirt",
    "日常休闲 T 恤示意图",
    "日常休閒 T 恤示意圖"
  ],
  [
    "Pet supplies",
    "宠物用品",
    "寵物用品"
  ],
  [
    "Pet walking set",
    "宠物牵引套装",
    "寵物牽引套組"
  ],
  [
    "Little essentials for walks together",
    "陪伴毛孩子出门的小装备",
    "陪伴毛孩出門的小裝備"
  ],
  [
    "Inquire about Pet walking set",
    "咨询宠物牵引套装",
    "詢問寵物牽引套組"
  ],
  [
    "Illustration: Pet walking set",
    "宠物牵引套装示意图",
    "寵物牽引套組示意圖"
  ],
  [
    "Camping & outdoors",
    "露营用品",
    "露營用品"
  ],
  [
    "Compact camping lantern",
    "便携露营灯",
    "便攜露營燈"
  ],
  [
    "Pack small for your next adventure",
    "轻装出发，探索户外",
    "輕裝出發，探索戶外"
  ],
  [
    "Inquire about Compact camping lantern",
    "咨询便携露营灯",
    "詢問便攜露營燈"
  ],
  [
    "Illustration: Compact camping lantern",
    "便携露营灯示意图",
    "便攜露營燈示意圖"
  ],
  [
    "Smart home",
    "智能家居小件",
    "智慧家居小物"
  ],
  [
    "Compact smart plug",
    "小型智能插座",
    "小型智慧插座"
  ],
  [
    "Small accessories for a connected home",
    "让家更便捷的小型配件",
    "讓家更便利的小型配件"
  ],
  [
    "Inquire about Compact smart plug",
    "咨询小型智能插座",
    "詢問小型智慧插座"
  ],
  [
    "Illustration: Compact smart plug",
    "小型智能插座示意图",
    "小型智慧插座示意圖"
  ],
  [
    "Home massage",
    "居家按摩小件",
    "居家按摩小物"
  ],
  [
    "Handheld massage roller",
    "手持按摩滚轮",
    "手持按摩滾輪"
  ],
  [
    "A simple addition to your wind-down routine",
    "为日常放松增添一份舒适",
    "為日常放鬆增添一份舒適"
  ],
  [
    "Inquire about Handheld massage roller",
    "咨询手持按摩滚轮",
    "詢問手持按摩滾輪"
  ],
  [
    "Illustration: Handheld massage roller",
    "手持按摩滚轮示意图",
    "手持按摩滾輪示意圖"
  ],
  [
    "In-car essentials",
    "车载用品",
    "車用生活用品"
  ],
  [
    "Car seat organizer",
    "车载座椅收纳袋",
    "車用座椅收納袋"
  ],
  [
    "Keep daily travel essentials close",
    "随手收纳出行所需",
    "隨手收納出行所需"
  ],
  [
    "Inquire about Car seat organizer",
    "咨询车载座椅收纳袋",
    "詢問車用座椅收納袋"
  ],
  [
    "Illustration: Car seat organizer",
    "车载座椅收纳袋示意图",
    "車用座椅收納袋示意圖"
  ],
  [
    "Sustainable home",
    "绿色可持续家居",
    "綠色永續家居"
  ],
  [
    "Reusable shopping bag",
    "可重复使用购物袋",
    "可重複使用購物袋"
  ],
  [
    "An everyday alternative to single-use bags",
    "以重复使用替代一次性使用",
    "以重複使用替代一次性使用"
  ],
  [
    "Inquire about Reusable shopping bag",
    "咨询可重复使用购物袋",
    "詢問可重複使用購物袋"
  ],
  [
    "Illustration: Reusable shopping bag",
    "可重复使用购物袋示意图",
    "可重複使用購物袋示意圖"
  ],
  [
    "Fashion accessories",
    "时尚配饰",
    "時尚配飾"
  ],
  [
    "Everyday crossbody bag",
    "日常斜挎包",
    "日常斜背包"
  ],
  [
    "Compact accents for everyday outfits",
    "点缀日常穿搭的轻巧配饰",
    "點綴日常穿搭的輕巧配飾"
  ],
  [
    "Inquire about Everyday crossbody bag",
    "咨询日常斜挎包",
    "詢問日常斜背包"
  ],
  [
    "Illustration: Everyday crossbody bag",
    "日常斜挎包示意图",
    "日常斜背包示意圖"
  ],
  [
    "Beauty & personal care",
    "美妆工具与个护",
    "美妝工具與個人護理"
  ],
  [
    "Makeup brush set",
    "美妆刷套装",
    "美妝刷套組"
  ],
  [
    "Tools for your everyday beauty routine",
    "日常美妆护理的随身工具",
    "日常美妝護理的隨身工具"
  ],
  [
    "Inquire about Makeup brush set",
    "咨询美妆刷套装",
    "詢問美妝刷套組"
  ],
  [
    "Illustration: Makeup brush set",
    "美妆刷套装示意图",
    "美妝刷套組示意圖"
  ],
  [
    "Phone accessories",
    "手机配件",
    "手機配件"
  ],
  [
    "Foldable phone stand",
    "折叠手机支架",
    "摺疊手機支架"
  ],
  [
    "A tidy setup, at home or on the go",
    "居家或外出，轻松摆放手机",
    "居家或外出，輕鬆擺放手機"
  ],
  [
    "Inquire about Foldable phone stand",
    "咨询折叠手机支架",
    "詢問摺疊手機支架"
  ],
  [
    "Illustration: Foldable phone stand",
    "折叠手机支架示意图",
    "摺疊手機支架示意圖"
  ],
  [
    "Home textiles",
    "纺织用品",
    "紡織用品"
  ],
  [
    "Everyday towel set",
    "日用毛巾套装",
    "日用毛巾套組"
  ],
  [
    "Soft details for everyday spaces",
    "为日常空间增添柔软细节",
    "為日常空間增添柔軟細節"
  ],
  [
    "Inquire about Everyday towel set",
    "咨询日用毛巾套装",
    "詢問日用毛巾套組"
  ],
  [
    "Illustration: Everyday towel set",
    "日用毛巾套装示意图",
    "日用毛巾套組示意圖"
  ],
  [
    "Auto accessories",
    "汽车配件",
    "汽車配件"
  ],
  [
    "Car cleaning brush set",
    "汽车清洁刷套装",
    "汽車清潔刷套組"
  ],
  [
    "Small tools for routine car care",
    "日常车辆养护的实用小工具",
    "日常車輛養護的實用小工具"
  ],
  [
    "Inquire about Car cleaning brush set",
    "咨询汽车清洁刷套装",
    "詢問汽車清潔刷套組"
  ],
  [
    "Illustration: Car cleaning brush set",
    "汽车清洁刷套装示意图",
    "汽車清潔刷套組示意圖"
  ]
];
const translationMap = new Map(translations.map(row => [row[0], row]));
let currentLanguage = 'en';
function translate(source) {
  const row = translationMap.get(source);
  return row ? row[currentLanguage === 'zh-CN' ? 1 : currentLanguage === 'zh-TW' ? 2 : 0] : source;
}
// Preserve option values so product selection remains stable in every language.
document.querySelectorAll('#product-select option').forEach(option => { option.value = option.value; });
const translatedNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement.closest('script,style,#language-select')) continue;
  const source = node.textContent.trim();
  if (translationMap.has(source)) translatedNodes.push({ node, source, original: node.textContent });
}
const translatedAttributes = [];
document.querySelectorAll('[placeholder],[aria-label],[alt]').forEach(element => {
  ['placeholder', 'aria-label', 'alt'].forEach(attribute => {
    const source = element.getAttribute(attribute);
    if (translationMap.has(source)) translatedAttributes.push({ element, attribute, source });
  });
});
function setLanguage(language) {
  currentLanguage = ['en', 'zh-CN', 'zh-TW'].includes(language) ? language : 'en';
  document.documentElement.lang = currentLanguage;
  document.querySelector('#language-select').value = currentLanguage;
  translatedNodes.forEach(({ node, source, original }) => { node.textContent = original.replace(source, translate(source)); });
  translatedAttributes.forEach(({ element, attribute, source }) => { element.setAttribute(attribute, translate(source)); });
  document.querySelector('.menu-toggle').setAttribute('aria-label', translate(document.querySelector('#navigation').classList.contains('open') ? 'Close navigation' : 'Open navigation'));
  document.title = translate('NORTHLINE — Everyday goods, global possibilities.');
  document.querySelector('meta[name="description"]').content = translate('Lifestyle goods, home essentials, clothing, pet supplies, camping gear, and small accessories for global sourcing.');
  document.querySelector('#form-status').textContent = '';
  try { localStorage.setItem('northline-language', currentLanguage); } catch (_) { /* Storage may be unavailable in private browsing. */ }
}
document.querySelector('#language-select').addEventListener('change', event => setLanguage(event.target.value));
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('northline-language') || 'en'; } catch (_) {}
setLanguage(savedLanguage);
