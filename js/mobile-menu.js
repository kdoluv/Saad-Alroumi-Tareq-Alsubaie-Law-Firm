document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  // فتح / غلق القائمة الرئيسية
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.classList.toggle('active');
  });

  // Dropdown (موبايل + ديسكتوب)
  dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  dropdown.parentElement.classList.toggle("open");
});

  // غلق dropdown عند الضغط خارجها
  document.addEventListener('click', () => {
    dropdownMenu.classList.remove('open');
  });

  dropdownMenu.addEventListener('click', e => e.stopPropagation());

});
