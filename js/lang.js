function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-ar]').forEach(el => {
    const value = el.getAttribute('data-' + lang);
    if (value !== null) el.innerHTML = value;
  });

  localStorage.setItem('site_lang', lang);

  updateWhatsApp(lang); // ✅ هنا
}

function updateWhatsApp(lang) {
  const waBtn = document.getElementById('whatsappBtn');
  if (!waBtn) return;

  const phone = '96595571635'; // رقم واتساب بدون +
  
  const messageAR = 'مرحبًا، أود التواصل مع مكتب سعد الرومي وطارق السبيعي';
  const messageEN = 'Hello, I would like to contact Saad Alroomi & Tareq Al-Subaie Law Firm';

  const message = lang === 'ar' ? messageAR : messageEN;

  waBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
