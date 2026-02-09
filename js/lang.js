function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // النصوص
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = el.dataset[lang];
  });

  // placeholders
  document.querySelectorAll('[data-ar-placeholder]').forEach(el => {
    el.placeholder = el.dataset[`${lang}Placeholder`];
  });

  // تحديث القوائم المخفية (حل الموبايل)
  setTimeout(() => {
    document.querySelectorAll('[data-ar]').forEach(el => {
      el.textContent = el.dataset[lang];
    });
  }, 50);
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(document.documentElement.lang || 'ar');
});
