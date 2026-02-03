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

  // إعادة تطبيق اللغة بعد أي تغيير في الواجهة (موبايل)
  setTimeout(() => applyLanguage(savedLang), 300);
});

  function toggleDropdown() {
  document.querySelector('.dropdown').classList.toggle('open');
}

})();


<script>
document.addEventListener('DOMContentLoaded', function () {

  const toggle = document.querySelector('.dropdown-toggle');
  const menu = document.querySelector('.dropdown-menu');

  if (!toggle || !menu) return;

  // فتح / غلق القائمة عند الضغط
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    menu.classList.toggle('open');
  });

  // غلق القائمة عند الضغط خارجها
  document.addEventListener('click', function () {
    menu.classList.remove('open');
  });

  // منع الإغلاق عند الضغط داخل القائمة
  menu.addEventListener('click', function (e) {
    e.stopPropagation();
  });

});
</script>
