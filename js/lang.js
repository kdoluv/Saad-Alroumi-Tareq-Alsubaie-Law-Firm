// ================= LANGUAGE MANAGER =================
(function () {

  function applyLanguage(lang) {

    // اتجاه الصفحة
    document.documentElement.lang = lang;
    document.documentElement.dir  = (lang === 'ar') ? 'rtl' : 'ltr';

    // النصوص العادية
    document.querySelectorAll('[data-ar]').forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) {
        el.innerHTML = text;
      }
    });

    // placeholders
    document.querySelectorAll('[data-ar-placeholder]').forEach(el => {
      const text = el.getAttribute(`data-${lang}-placeholder`);
      if (text) {
        el.placeholder = text;
      }
    });

    // عنوان الصفحة
    const title = document.querySelector('title');
    if (title && title.getAttribute(`data-${lang}`)) {
      title.textContent = title.getAttribute(`data-${lang}`);
    }

    // حفظ اللغة
    localStorage.setItem('site_lang', lang);
  }

  // إتاحة تغيير اللغة للأزرار
  window.setLanguage = function (lang) {
    applyLanguage(lang);
  };

  // عند تحميل الصفحة
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site_lang') || 'ar';
    applyLanguage(savedLang);
  });

})();
