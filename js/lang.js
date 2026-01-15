function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  document.querySelectorAll("[data-ar]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  document.querySelectorAll("input[data-ar], textarea[data-ar]").forEach(el => {
    el.placeholder = el.getAttribute(`data-${lang}`);
  });
}

/* 👈 هذا السطر هو الحل */
document.addEventListener("DOMContentLoaded", function () {
  setLang("ar");
});
