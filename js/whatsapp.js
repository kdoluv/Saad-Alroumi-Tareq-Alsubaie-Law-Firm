document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("waToggle");
  const box = document.getElementById("waBox");

  if (!toggle || !box) return;

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    box.classList.toggle("open");
    box.style.display = box.classList.contains("open") ? "block" : "none";
  });

  document.addEventListener("click", function () {
    box.classList.remove("open");
    box.style.display = "none";
  });

  box.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
