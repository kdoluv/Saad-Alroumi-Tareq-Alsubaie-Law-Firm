document.addEventListener('DOMContentLoaded', () => {

  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const toggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');

  btn.onclick = () => {
    nav.classList.toggle('open');
  };

  toggle.onclick = e => {
    e.preventDefault();
    dropdown.classList.toggle('open');
  };

  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

});
