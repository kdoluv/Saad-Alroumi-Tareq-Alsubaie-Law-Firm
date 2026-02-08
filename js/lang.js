(function () {

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // النصوص
   document.querySelectorAll('[data-ar]').forEach(el => {
      el.innerHTML = el.dataset[lang];
    });

    // placeholders
    document.querySelectorAll('[data-ar-placeholder]').forEach(el => {
      const text = el.getAttribute(`data-${lang}-placeholder`);
      if (text) el.placeholder = text;
    });

    // العنوان
  const pageTitle = document.querySelector('title[data-ar]');
      if (pageTitle) {
      pageTitle.textContent = pageTitle.dataset[lang];
    }

    // واتساب
    updateWhatsApp(lang);

    localStorage.setItem('site_lang', lang);
  }

  window.setLanguage = function (lang) {
    applyLanguage(lang);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site_lang') || 'ar';
    applyLanguage(savedLang);
  });

})();
