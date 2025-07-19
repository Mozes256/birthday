$(document).ready(function () {
  function createHeart() {
    const size = Math.floor(Math.random() * 20) + 10;
    const left = Math.random() * 100;

    const $heart = $('<div class="heart">❤️</div>').css({
      position: 'absolute',
      left: `${left}vw`,
      fontSize: `${size}px`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      opacity: 0.8,
    });

    $('#hearts-container').append($heart);

    setTimeout(() => {
      $heart.remove();
    }, 5000);
  }

  // Start generating hearts every 300ms
  setInterval(createHeart, 300);
});
