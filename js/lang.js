let currentLang = 'ar';

function setLang(lang) {
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  updateTexts();
}

function updateTexts() {
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
}

document.addEventListener('DOMContentLoaded', updateTexts);
