document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  dropdownToggle.addEventListener('click', e => {
    e.preventDefault();
    dropdown.classList.toggle('open');
  });
});
