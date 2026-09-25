const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', translate(open ? 'Close navigation' : 'Open navigation'));
  menuButton.textContent = open ? '×' : '☰';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', translate('Open navigation'));
  menuButton.textContent = '☰';
}));
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.querySelectorAll('.product-card').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
  });
});
document.querySelectorAll('[data-product]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#product-select').value = button.dataset.product;
    document.querySelector('#contact').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
});
document.querySelector('#inquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Product inquiry: ${data.get('product') || 'General sourcing'}`;
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || '—'}\nProduct: ${data.get('product') || 'General sourcing'}\n\n${data.get('message')}`;
  window.location.href = `mailto:sales@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = currentLanguage === 'zh-CN' ? '已尝试打开邮件草稿，请在邮件客户端中发送以完成询盘。若未打开，请手动复制需求至邮件。本预览使用示例收件地址。' : currentLanguage === 'zh-TW' ? '已嘗試開啟郵件草稿，請在電子郵件應用程式中寄送以完成詢價。若未開啟，請手動複製需求至郵件。本預覽使用示例收件地址。' : 'Your email draft has been requested. Send it from your email app to complete your inquiry. If no app opens, copy your details into an email manually. This preview uses a sample recipient address.';
});
document.querySelector('#year').textContent = new Date().getFullYear();
