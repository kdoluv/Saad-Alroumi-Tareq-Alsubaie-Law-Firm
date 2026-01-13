// LANGUAGE SWITCH
function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

document.querySelectorAll('.lang-switch').forEach(btn => {
  btn.addEventListener('click', () => {
    setLang(btn.dataset.lang);
  });
});
}

// SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// Default language
setLang('ar');
