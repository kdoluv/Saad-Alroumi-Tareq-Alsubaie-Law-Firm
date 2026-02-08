document.addEventListener("DOMContentLoaded", function () {
  const waBtn = document.getElementById("waToggle");
  const waBox = document.getElementById("waBox");

  if (!waBtn || !waBox) return;

  // فتح / غلق الفقاعة
  waBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    waBox.classList.toggle("open");
  });

  // غلقها عند الضغط خارجها
  document.addEventListener("click", function () {
    waBox.classList.remove("open");
  });

  // منع الغلق عند الضغط داخلها
  waBox.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
