document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  /* القائمة الرئيسية (موبايل) */
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuBtn.classList.toggle('active');
    });
  }

  /* الممارسات القانونية */
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdownMenu.classList.toggle('open');
    });

    /* إغلاقها عند الضغط خارجها */
    document.addEventListener('click', () => {
      dropdownMenu.classList.remove('open');
    });

    dropdownMenu.addEventListener('click', e => e.stopPropagation());
  }

});
