function setLang(lang) {

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // النصوص
  document.querySelectorAll("[data-ar]").forEach(el => {
    el.textContent = el.getAttribute("data-" + lang);
  });

  // placeholders
  document.querySelectorAll("[data-ar-placeholder]").forEach(el => {
    el.placeholder = el.getAttribute("data-" + lang + "-placeholder");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setLang("ar");
});
