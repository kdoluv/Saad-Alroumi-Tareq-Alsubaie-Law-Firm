document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.querySelector('.dropdown-toggle');

  // مينو الموبايل
  menuBtn?.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.classList.toggle('active');
  });

  // dropdown (موبايل فقط)
  dropdownToggle?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  // غلق عند الضغط خارج القائمة
  document.addEventListener('click', () => {
    dropdown?.classList.remove('open');
  });

  dropdown?.addEventListener('click', e => e.stopPropagation());

});
