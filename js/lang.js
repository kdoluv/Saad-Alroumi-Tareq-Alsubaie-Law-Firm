// ================= LANGUAGE MANAGER =================
(function () {

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // تبديل النصوص
    document.querySelectorAll('[data-ar]').forEach(el => {
      const value = el.getAttribute('data-' + lang);
      if (value !== null) {
        el.innerHTML = value;
      }
    });

    // تبديل placeholders
    document.querySelectorAll('[data-ar-placeholder]').forEach(el => {
      const value = el.getAttribute('data-' + lang + '-placeholder');
      if (value !== null) {
        el.placeholder = value;
      }
    });

    // تبديل عنوان الصفحة
    const title = document.querySelector('title');
    if (title && title.getAttribute('data-' + lang)) {
      title.textContent = title.getAttribute('data-' + lang);
    }

    // حفظ اللغة
    localStorage.setItem('site_lang', lang);
  }

  // إتاحة الدالة للأزرار
  window.setLanguage = function (lang) {
    applyLanguage(lang);
  };

  // اللغة الافتراضية عند التحميل
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site_lang') || 'ar';
    applyLanguage(savedLang);
  });

})();
