let slides = document.querySelectorAll('.slide');
let i = 0;

setInterval(() => {
  slides[i].classList.remove('active');
  i = (i + 1) % slides.length;
  slides[i].classList.add('active');
}, 5000);

function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
}
