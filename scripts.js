document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    const mainContainer = document.querySelector('.main-container');
    setTimeout(function() {
      loadingOverlay.style.opacity = '0';
      mainContainer.classList.add('loaded');
      setTimeout(function() {
        loadingOverlay.style.display = 'none';
      }, 500);
    }, 1000);
  });