document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.querySelector('.dropdown-toggle');

  /* =========================
     فتح / غلق القائمة الرئيسية
  ========================== */
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('open');
    menuBtn.classList.toggle('active');
  });

  /* =========================
     Dropdown الممارسات القانونية
  ========================== */
  dropdownToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  /* =========================
     إغلاق الكل عند الضغط خارج
  ========================== */
  document.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.classList.remove('active');
    dropdown.classList.remove('open');
  });

  /* منع الإغلاق عند الضغط داخل القائمة */
  nav.addEventListener('click', (e) => {
    e.stopPropagation();
  });

});
