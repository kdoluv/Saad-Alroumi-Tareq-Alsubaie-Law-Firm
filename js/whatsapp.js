<script>
  const waToggle = document.getElementById('waToggle');
  const waBox = document.getElementById('waBox');

  waToggle.addEventListener('click', () => {
    waBox.style.display =
      waBox.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.wa-chat')) {
      waBox.style.display = 'none';
    }
  });
</script>
