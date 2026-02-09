document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('waToggle');
  const box = document.getElementById('waBox');

  btn.onclick = () => {
    box.classList.toggle('open');
  };
});
