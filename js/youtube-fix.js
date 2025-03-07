// Script pour décaler la div ytp-error vers la droite
document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour appliquer le style aux iframes YouTube
  function applyYouTubeErrorStyle() {
    // Sélectionner toutes les iframes YouTube
    const youtubeIframes = document.querySelectorAll('iframe[src*="youtube"]');
    
    youtubeIframes.forEach(iframe => {
      try {
        // Essayer d'accéder au contenu de l'iframe (peut échouer en raison des restrictions de sécurité)
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        
        // Créer un élément de style
        const styleElement = document.createElement('style');
        styleElement.textContent = `
          .ytp-error {
            transform: translateX(50px) !important;
            margin-left: 50px !important;
          }
        `;
        
        // Ajouter le style au head de l'iframe
        iframeDocument.head.appendChild(styleElement);
      } catch (e) {
        console.log('Impossible d\'accéder au contenu de l\'iframe en raison des restrictions de sécurité');
        
        // Alternative: ajouter une classe à l'iframe parent pour la cibler avec CSS
        iframe.classList.add('youtube-error-shifted');
      }
    });
  }
  
  // Appliquer le style immédiatement
  applyYouTubeErrorStyle();
  
  // Réappliquer le style après le chargement complet de la page
  window.addEventListener('load', applyYouTubeErrorStyle);
  
  // Réappliquer le style périodiquement (pour les vidéos qui se chargent plus tard)
  setInterval(applyYouTubeErrorStyle, 2000);
});
