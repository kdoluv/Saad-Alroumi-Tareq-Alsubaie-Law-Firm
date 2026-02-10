const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');
const dropdowns = document.querySelectorAll('.dropdown');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuBtn.classList.toggle('active');

  // 🔁 إعادة تطبيق اللغة بعد فتح المينيو
  const currentLang = localStorage.getItem('siteLang') || 'ar';
  if (typeof setLanguage === 'function') {
    setLanguage(currentLang);
  }

  // ❌ اقفل أي dropdown مفتوحة
  dropdowns.forEach(d => d.classList.remove('open'));
});

// قفل القائمة بعد الضغط على أي لينك
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.classList.remove('active');

    dropdowns.forEach(d => d.classList.remove('open'));
  });
});
