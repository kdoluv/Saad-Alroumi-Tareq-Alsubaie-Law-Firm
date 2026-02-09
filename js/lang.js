function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('site_lang', lang);

  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = lang === 'ar'
      ? el.getAttribute('data-ar')
      : el.getAttribute('data-en');
  });
}
