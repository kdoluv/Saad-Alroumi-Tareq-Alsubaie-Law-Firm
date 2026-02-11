// ===== LANGUAGE SWITCHER =====
function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-ar]").forEach(el => {
    el.textContent = lang === "ar"
      ? el.getAttribute("data-ar")
      : el.getAttribute("data-en");
  });
}

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
