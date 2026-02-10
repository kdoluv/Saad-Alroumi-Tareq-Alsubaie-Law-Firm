document.getElementById('waToggle').addEventListener('click', () => {
  document.getElementById('waBox').classList.toggle('open');
});

function waMessage() {
  return document.documentElement.lang === 'ar'
    ? 'مرحبًا، أود الاستفسار عن خدماتكم القانونية'
    : 'Hello, I would like to inquire about your legal services';
}

document.querySelector('.wa-start').addEventListener('click', e => {
  e.preventDefault();
  window.open(
    'https://wa.me/96595571635?text=' + encodeURIComponent(waMessage()),
    '_blank'
  );
});
