document.addEventListener('DOMContentLoaded', () => {

  const waToggle = document.getElementById('waToggle');
  const waBox = document.getElementById('waBox');

  if (!waToggle || !waBox) return;

  waToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    waBox.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    waBox.classList.remove('open');
  });

});

