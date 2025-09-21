// Cargar el audio
const musica = new Audio("Si Supieras - Kevin Kaarl __ Letra. ♡.mp3"); // tu archivo debe estar en la misma carpeta que el HTML
musica.loop = true; // para que se repita
musica.autoplay = true; // intentará iniciar automáticamente

// Reproducir la canción al cargar la página
window.addEventListener("load", () => {
  musica.play().catch(() => {
    console.log("El navegador bloqueó el autoplay. El usuario debe dar play.");
  });
});

// Si quieres controlar la música con un botón en tu HTML
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("controlMusica");
  if (boton) {
    boton.addEventListener("click", () => {
      if (musica.paused) {
        musica.play();
        boton.textContent = "⏸ Pausar música";
      } else {
        musica.pause();
        boton.textContent = "▶ Reanudar música";
      }
    });
  }
});
