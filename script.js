function adjustButtonPosition() {
    const socialLinks = document.querySelector('.social-links');
    const notifyButton = document.querySelector('.notify-button');
    
    // Social-Links und Notify-Button anpassen
    const socialLinksHeight = socialLinks.offsetHeight;
    notifyButton.style.marginTop = `${socialLinksHeight}px`;
  }
  
  // Kontaktformular schließen
  document.getElementById('close-btn').addEventListener('click', function() {
    const contactForm = document.getElementById('contact-form');
    const overlay = document.getElementById('overlay');
    
    contactForm.style.display = 'none';
    overlay.style.display = 'none';
  });
  
  // Beim Laden der Seite und bei jeder Änderung der Fenstergröße überprüfen
  window.addEventListener('resize', adjustButtonPosition);
  window.addEventListener('load', adjustButtonPosition);
  