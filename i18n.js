// English source text, Simplified Chinese, Traditional Chinese.
const translations = [
['Industrial sourcing. Global perspective.','工业采购，全球视野。','工業採購，全球視野。'],
['Let’s talk business','洽谈合作','洽談合作'],
['Our products','产品中心','產品中心'],['About us','关于我们','關於我們'],['How we work','合作流程','合作流程'],['Get a quote','获取报价','取得報價'],
['YOUR NEXT SUPPLY PARTNER','值得信赖的供应伙伴','值得信賴的供應夥伴'],['Built for','携手共建','攜手共建'],['what’s','您的','您的'],['next.','下一个可能。','下一個可能。'],
['Quality components. Practical solutions.','优质零部件，务实的解决方案。','優質零組件，務實的解決方案。'],['Connecting your business to a world of manufacturing possibilities.','连接全球制造资源，助力您的业务发展。','連接全球製造資源，助力您的業務發展。'],
['Explore our products','探索产品','探索產品'],['Talk to our team','联系我们','聯絡我們'],['From your first sample to your next shipment.','从第一份样品到下一批出货。','從第一份樣品到下一批出貨。'],['A simpler way to source.','让采购更简单。','讓採購更簡單。'],
['LOCAL EXPERTISE.','立足专业。','立足專業。'],['GLOBAL AMBITION.','放眼全球。','放眼全球。'],['THE WORLD IS','连接世界，','連接世界，'],['YOUR OPPORTUNITY.','开启商机。','開啟商機。'],['SOURCING / MANUFACTURING / EXPORT','采购 / 制造 / 出口','採購 / 製造 / 出口'],
['Quality-first sourcing','品质优先','品質優先'],['Specifications that work for you.','围绕您的规格需求。','圍繞您的規格需求。'],['Flexible order options','灵活订购','靈活訂購'],['Start with what your business needs.','从您的实际业务需求出发。','從您的實際業務需求出發。'],['Export-ready support','出口支持','出口支援'],['Clear steps from order to delivery.','从下单到交付，流程清晰。','從下單到交付，流程清晰。'],['People you can reach','沟通顺畅','溝通順暢'],['One team. Open communication.','专人对接，及时沟通。','專人對接，及時溝通。'],
['OUR PRODUCT COLLECTION','产品系列','產品系列'],['Good products.','优质产品。','優質產品。'],['Great possibilities.','无限可能。','無限可能。'],['Every project starts with the right parts.','每个项目，都从合适的零部件开始。','每個專案，都從合適的零組件開始。'],['Explore our core categories and find your fit.','浏览核心品类，找到适合您的产品。','瀏覽核心品類，找到適合您的產品。'],
['All products','全部产品','全部產品'],['Components','零部件','零組件'],['Hardware','五金件','五金件'],['Equipment','设备','設備'],['MADE FOR YOUR INDUSTRY ↙','为您的行业而造 ↙','為您的產業而造 ↙'],['COMPONENTS','零部件','零組件'],['HARDWARE','五金件','五金件'],['EQUIPMENT','设备','設備'],
['Precision bearings','精密轴承','精密軸承'],['Engineered for smooth performance','运行平稳，精工制造','運轉平穩，精工製造'],['Industrial fasteners','工业紧固件','工業緊固件'],['Small details. Strong connections.','小零件，稳固连接。','小零件，穩固連接。'],['Pipe & fluid fittings','管道与流体接头','管道與流體接頭'],['Pipe and fluid fittings','管道与流体接头','管道與流體接頭'],['Connected with confidence','可靠连接，安心之选','可靠連接，安心之選'],['Motors & equipment','电机与设备','馬達與設備'],['Motors and equipment','电机与设备','馬達與設備'],['Powering everyday productivity','为日常生产提供动力','為日常生產提供動力'],
['Looking for something specific? We’re here to help.','有特定采购需求？我们随时为您提供支持。','有特定採購需求？我們隨時為您提供支援。'],['Send your sourcing request','提交采购需求','提交採購需求'],
['A PARTNER BEYOND THE ORDER','不止订单，更是伙伴','不止訂單，更是夥伴'],['CLOSER CONNECTIONS.','紧密连接。','緊密連接。'],['FURTHER POSSIBILITIES.','共创可能。','共創可能。'],['HELLO, WE’RE NORTHLINE','认识 NORTHLINE','認識 NORTHLINE'],['Your ambition.','您的愿景。','您的願景。'],['Our shared direction.','我们共同的方向。','我們共同的方向。'],
['We connect businesses with industrial products and practical sourcing support. Our approach is simple: understand what you need, get the details right, and keep you informed along the way.','我们为企业对接工业产品与务实的采购支持。我们的方式很简单：了解您的需求，确认每一项细节，并在全流程保持沟通。','我們為企業對接工業產品與務實的採購支援。我們的方式很簡單：了解您的需求，確認每一項細節，並在全流程保持溝通。'],
['Whether you’re sourcing standard components or exploring a custom requirement, let’s build a supply solution around your business.','无论采购标准零部件，还是探索定制需求，我们都愿与您一起打造适合业务的供应方案。','無論採購標準零組件，還是探索客製需求，我們都願與您一起打造適合業務的供應方案。'],['Meet your next sourcing partner','认识您的采购伙伴','認識您的採購夥伴'],
['FROM IDEA TO DELIVERY','从需求到交付','從需求到交付'],['Simple steps. Clear progress.','流程简单，进度清晰。','流程簡單，進度清晰。'],['Let’s get started ↗','开启合作 ↗','開啟合作 ↗'],['Tell us what you need','告诉我们您的需求','告訴我們您的需求'],['Share your product specifications, quantities, and destination.','提供产品规格、采购数量和目的地。','提供產品規格、採購數量和目的地。'],['Find the right solution','找到合适的方案','找到合適的方案'],['Discuss product options, samples, pricing, and estimated lead times.','沟通产品选项、样品、价格及预计交期。','溝通產品選項、樣品、價格及預計交期。'],['Confirm the details','确认订单细节','確認訂單細節'],['Agree on specifications, order terms, and inspection requirements.','确认产品规格、订单条款及检验要求。','確認產品規格、訂單條款及檢驗要求。'],['Get ready for delivery','安排发货交付','安排出貨交付'],['Coordinate packaging, shipping arrangements, and export documents.','协调包装、运输安排及出口文件。','協調包裝、運輸安排及出口文件。'],
['LET’S MAKE IT HAPPEN','让合作从这里开始','讓合作從這裡開始'],['Your next project','您的下一个项目，','您的下一個專案，'],['starts with a','从一次','從一次'],['conversation.','沟通开始。','溝通開始。'],['Tell us a little about what you’re looking for.','请告诉我们您的采购需求。','請告訴我們您的採購需求。'],['We’ll take it from there.','后续交给我们一起推进。','後續交給我們一起推進。'],
['Template preview · Replace the sample company details and email before publishing.','模板预览 · 发布前请替换示例公司信息和邮箱。','範本預覽 · 發布前請替換示例公司資訊和電子郵件。'],
['Your name','您的姓名','您的姓名'],['Business email','工作邮箱','工作電子郵件'],['Company','公司名称','公司名稱'],['Product of interest','意向产品','意向產品'],['Select a product','请选择产品','請選擇產品'],['Other / Custom sourcing','其他 / 定制采购','其他 / 客製採購'],['How can we help?','您的采购需求','您的採購需求'],['Prepare inquiry email','生成询盘邮件','產生詢價郵件'],['Opens your email app with your inquiry. No information is stored on this website.','将打开邮件客户端填写询盘，本网站不保存任何表单信息。','將開啟電子郵件應用程式填寫詢價，本網站不儲存任何表單資訊。'],
['Better sourcing. Built together.','携手合作，让采购更好。','攜手合作，讓採購更好。'],['Back to top ↑','返回顶部 ↑','返回頂端 ↑'],['Northline. All rights reserved.','Northline. 保留所有权利。','Northline. 保留所有權利。'],['Industrial products. Global possibilities.','工业产品，全球机遇。','工業產品，全球機遇。'],
['Alex Smith','请输入姓名','請輸入姓名'],['Your company','请输入公司名称','請輸入公司名稱'],['Product details, quantity, delivery destination…','产品详情、数量、收货目的地……','產品詳情、數量、收貨目的地……'],
['Open navigation','打开导航','開啟導覽'],['Close navigation','关闭导航','關閉導覽'],['Main navigation','主导航','主導覽'],['Product categories','产品分类','產品分類'],['Our service commitments','服务承诺','服務承諾'],['Northline home','Northline 首页','Northline 首頁'],
['Inquire about precision bearings','咨询精密轴承','詢問精密軸承'],['Inquire about industrial fasteners','咨询工业紧固件','詢問工業緊固件'],['Inquire about pipe and fluid fittings','咨询管道与流体接头','詢問管道與流體接頭'],['Inquire about motors and equipment','咨询电机与设备','詢問馬達與設備'],['Shipping containers and port cranes ready for international transport','用于国际运输的集装箱和港口起重机','用於國際運輸的貨櫃和港口起重機'],['Illustration of a precision bearing','精密轴承示意图','精密軸承示意圖'],['Illustration of industrial fasteners','工业紧固件示意图','工業緊固件示意圖'],['Illustration of brass pipe fittings','黄铜管件示意图','黃銅管件示意圖'],['Illustration of an electric motor','电机示意图','馬達示意圖']
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
  document.title = currentLanguage === 'en' ? 'NORTHLINE — Built for what’s next.' : currentLanguage === 'zh-CN' ? 'NORTHLINE — 工业产品与全球采购' : 'NORTHLINE — 工業產品與全球採購';
  document.querySelector('#form-status').textContent = '';
  try { localStorage.setItem('northline-language', currentLanguage); } catch (_) { /* Storage may be unavailable in private browsing. */ }
}
document.querySelector('#language-select').addEventListener('change', event => setLanguage(event.target.value));
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('northline-language') || 'en'; } catch (_) {}
setLanguage(savedLanguage);
