function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-ar]").forEach(el => {
    el.textContent = el.dataset[lang];
  });

  document.querySelectorAll("input[data-ar], textarea[data-ar]").forEach(el => {
    el.placeholder = el.dataset[lang];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLang("ar");
});
