// ===== LANGUAGE SWITCHER =====
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // تغيير النصوص
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = lang === 'ar'
      ? el.getAttribute('data-ar')
      : el.getAttribute('data-en');
  });

  // تغيير placeholders
  document.querySelectorAll('[data-ar-placeholder]').forEach(el => {
    el.placeholder = lang === 'ar'
      ? el.getAttribute('data-ar-placeholder')
      : el.getAttribute('data-en-placeholder');
  });

  // حفظ اللغة
  localStorage.setItem('siteLang', lang);
}

// ===== LOAD SAVED LANGUAGE =====
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('siteLang') || 'ar';
  setLanguage(savedLang);
});

// 🔥 إعادة تعيين النصوص حتى لو كانت مخفية (موبايل)
document.querySelectorAll('[data-ar]').forEach(el => {
  el.textContent = lang === 'ar'
    ? el.getAttribute('data-ar')
    : el.getAttribute('data-en');
});

// ❌ اقفل أي dropdown مفتوحة بعد تغيير اللغة
document.querySelectorAll('.dropdown').forEach(d => {
  d.classList.remove('open');
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutCols = document.querySelectorAll(".about-col");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  aboutCols.forEach(col => observer.observe(col));
});
