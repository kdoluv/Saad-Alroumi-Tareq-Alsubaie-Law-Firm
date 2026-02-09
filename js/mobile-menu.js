document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');
  if (!menuBtn || !nav) return;
  // فتح القائمة الرئيسية
 menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuBtn.classList.toggle('active');

  // 🔥 إعادة تطبيق اللغة بعد فتح المينيو
  const currentLang = localStorage.getItem('siteLang') || 'ar';
  if (typeof setLanguage === 'function') {
    setLanguage(currentLang);
  }
});
  // فتح الممارسات
  dropdownToggle.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  // غلق عند الضغط خارج
  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
  });

});
