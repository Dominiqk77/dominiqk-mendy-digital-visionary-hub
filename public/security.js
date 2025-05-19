
// Sécurité du site - Protection contre la copie et l'inspection

// Désactiver le clic droit
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false;
});

// Désactiver la sélection de texte
document.addEventListener('selectstart', function(e) {
  if (e.target.nodeName !== 'INPUT' && e.target.nodeName !== 'TEXTAREA') {
    e.preventDefault();
    return false;
  }
});

// Désactiver le copier-coller sauf dans les champs de formulaire
document.addEventListener('copy', function(e) {
  if (e.target.nodeName !== 'INPUT' && e.target.nodeName !== 'TEXTAREA') {
    e.preventDefault();
    return false;
  }
});

document.addEventListener('cut', function(e) {
  if (e.target.nodeName !== 'INPUT' && e.target.nodeName !== 'TEXTAREA') {
    e.preventDefault();
    return false;
  }
});

// Désactiver les touches de développeur
document.addEventListener('keydown', function(e) {
  // Bloquer F12
  if (e.keyCode === 123) {
    e.preventDefault();
    return false;
  }
  
  // Bloquer Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
  if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
    e.preventDefault();
    return false;
  }
  
  // Bloquer Ctrl+U (voir source)
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
    return false;
  }
});

// Message d'avertissement
console.log('%c⚠️ Attention!', 'color: red; font-size: 30px; font-weight: bold;');
console.log('%cLe contenu de ce site est protégé et toute tentative d\'extraction non autorisée est interdite.', 'font-size: 16px;');
