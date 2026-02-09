(function () {

  function applyLanguage(lang) {

    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-ar]').forEach(el => {
      el.innerHTML = el.getAttribute(`data-${lang}`);
    });

    localStorage.setItem('site_lang', lang);
  }

  window.setLanguage = applyLanguage;

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(localStorage.getItem('site_lang') || 'ar');
  });

})();
