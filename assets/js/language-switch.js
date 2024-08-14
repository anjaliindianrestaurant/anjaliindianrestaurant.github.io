document.addEventListener('DOMContentLoaded', function () {
    const langEn = document.getElementById('lang-en');
    const langDe = document.getElementById('lang-de');
  
    function setLanguage(language) {
      document.querySelectorAll('[data-lang]').forEach(el => {
        if (el.getAttribute('data-lang') === language) {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
    }
  
    langEn.addEventListener('click', function (e) {
      e.preventDefault();
      setLanguage('en');
    });
  
    langDe.addEventListener('click', function (e) {
      e.preventDefault();
      setLanguage('de');
    });
  
    // Set default language
    setLanguage('en');
  });
  