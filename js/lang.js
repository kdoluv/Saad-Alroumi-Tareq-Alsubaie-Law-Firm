function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-ar]').forEach(el => {
    const value = el.getAttribute('data-' + lang);
    if (value !== null) el.innerHTML = value;
  });

  localStorage.setItem('site_lang', lang);
