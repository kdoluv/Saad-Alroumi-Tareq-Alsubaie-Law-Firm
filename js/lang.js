
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("ar");
});

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-ar]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
}
