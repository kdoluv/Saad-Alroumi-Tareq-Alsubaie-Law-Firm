function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // تغيير النصوص
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = el.dataset[lang];
  });

  // تغيير placeholders
  document.querySelectorAll('[data-ar-placeholder]').forEach(el => {
    el.placeholder = el.dataset[`${lang}Placeholder`];
  });

  // تغيير title
  const title = document.querySelector('title');
  if (title && title.dataset[lang]) {
    title.textContent = title.dataset[lang];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(document.documentElement.lang || 'ar');
});
