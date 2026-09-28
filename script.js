document.addEventListener("DOMContentLoaded", function() {
  
  var valentinesDay = document.querySelector('.valentines-day');
  var envelope = document.querySelector('.envelope');
  var card = document.getElementById('card');

  if (valentinesDay) {
    valentinesDay.addEventListener('click', function() {
      // Dispara la animación de caída en el sobre
      if (envelope) {
        envelope.style.animation = 'fall 1.3s linear 1';
        envelope.style.webkitAnimation = 'fall 1.3s linear 1';
      }
      
      // Desvanecimiento del sobre exterior
      valentinesDay.style.transition = 'opacity 0.5s ease';
      valentinesDay.style.opacity = '0';
      
      setTimeout(function() {
        valentinesDay.style.display = 'none';
        
        // Abre la carta de manera fluida y elástica
        if (card) {
          card.classList.add('open');
        }
      }, 500);
    });
  }

});
