function whatsappLink() {
  const msg =
    document.documentElement.lang === 'ar'
      ? 'مرحباً، أود الاستفسار عن خدماتكم القانونية'
      : 'Hello, I would like to inquire about your legal services';

  window.open(
    'https://wa.me/965XXXXXXXX?text=' + encodeURIComponent(msg),
    '_blank'
  );
}
