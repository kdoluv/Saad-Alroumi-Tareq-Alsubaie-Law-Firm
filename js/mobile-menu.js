document.addEventListener('DOMContentLoaded', function () {

  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.querySelector('.dropdown-toggle');

  // =========================
  // فتح وإغلاق القائمة الرئيسية
  // =========================

  if (menuBtn && nav) {

    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();

      nav.classList.toggle('open');
      menuBtn.classList.toggle('active');

    });

  }


  // =========================
  // القائمة المنسدلة
  // =========================

  if (dropdown && dropdownToggle) {

    dropdownToggle.addEventListener('click', function (e) {

      // في الكمبيوتر نعتمد على Hover
      if (window.innerWidth > 768) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      dropdown.classList.toggle('open');

    });

  }


  // =========================
  // روابط القائمة
  // =========================

  if (nav) {

    const navLinks = nav.querySelectorAll('a');

    navLinks.forEach(function (link) {

      link.addEventListener('click', function (e) {

        // زر الممارسات القانونية لا يغلق القائمة
        if (
          link.classList.contains('dropdown-toggle') &&
          window.innerWidth <= 768
        ) {
          return;
        }

        // أي رابط آخر يغلق القائمة
        nav.classList.remove('open');

        if (menuBtn) {
          menuBtn.classList.remove('active');
        }

        if (dropdown) {
          dropdown.classList.remove('open');
        }

      });

    });

  }


  // =========================
  // الضغط خارج القائمة
  // =========================

  document.addEventListener('click', function (e) {

    if (!nav || !menuBtn) return;

    // إذا كان الضغط داخل الهيدر لا نفعل شيئاً
    if (
      nav.contains(e.target) ||
      menuBtn.contains(e.target)
    ) {
      return;
    }

    nav.classList.remove('open');
    menuBtn.classList.remove('active');

    if (dropdown) {
      dropdown.classList.remove('open');
    }

  });


  // =========================
  // عند تغيير حجم الشاشة
  // =========================

  window.addEventListener('resize', function () {

    if (window.innerWidth > 768) {

      nav.classList.remove('open');
      menuBtn.classList.remove('active');

      if (dropdown) {
        dropdown.classList.remove('open');
      }

    }

  });

});
