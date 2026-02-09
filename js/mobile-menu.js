document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');

  /* ===============================
     القائمة الرئيسية (Mobile Menu)
  ================================ */
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('open');
      menuBtn.classList.toggle('active');
    });
  }

  /* ===============================
     Dropdown (Practice Areas)
  ================================ */
  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    // منع الإغلاق عند الضغط داخلها
    dropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  /* ===============================
     غلق كل القوائم عند الضغط خارجها
  ================================ */
  document.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
    if (menuBtn) menuBtn.classList.remove('active');
    if (dropdown) dropdown.classList.remove('open');
  });

});
