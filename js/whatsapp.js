document.addEventListener("DOMContentLoaded", () => {

  const whatsappBtn = document.getElementById("whatsappBtn");

  const whatsappData = {
    ar: {
      phone: "96595571635", // رقم عربي
      message: "السلام عليكم، أود الاستفسار عن خدمات مكتب سعد الرومي وطارق السبيعي القانونية"
    },
    en: {
      phone: "96595571635", // رقم إنجليزي أو نفس الرقم
      message: "Hello, I would like to inquire about the legal services of Saad Alroomi & Tareq Alsubaie Law Firm"
    }
  };

  function updateWhatsApp() {
    const lang = localStorage.getItem("site_lang") || "ar";
    const data = whatsappData[lang];

    const url =
      "https://wa.me/" +
      data.phone +
      "?text=" +
      encodeURIComponent(data.message);

    whatsappBtn.href = url;
  }

  // تشغيل أول مرة
  updateWhatsApp();

  // الاستماع لتغيير اللغة
  document.addEventListener("languageChanged", updateWhatsApp);

});
