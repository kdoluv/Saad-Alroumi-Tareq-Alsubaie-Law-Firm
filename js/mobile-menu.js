const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuBtn.classList.toggle('active');

  // 🔥 إعادة تطبيق اللغة بعد فتح المينيو
  const currentLang = localStorage.getItem('siteLang') || 'ar';
  if (typeof setLanguage === 'function') {
    setLanguage(currentLang);
  }
});
