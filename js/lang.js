(function () {

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-ar]').forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) el.innerHTML = text;
    });

    document.querySelectorAll('[data-ar-placeholder]').forEach(el => {
      const text = el.getAttribute(`data-${lang}-placeholder`);
      if (text) el.placeholder = text;
    });

    const title = document.querySelector('title');
    if (title && title.getAttribute(`data-${lang}`)) {
      title.textContent = title.getAttribute(`data-${lang}`);
    }

    localStorage.setItem('site_lang', lang);
  }

