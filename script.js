function goToLink(url) {
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
  const featureBtn = document.getElementById('feature-btn');
  const featureMsg = document.getElementById('feature-msg');
  if (featureBtn) {
    featureBtn.addEventListener('click', function() {
      featureMsg.textContent = 'You clicked the button! 🎉';
    });
  }
}); 