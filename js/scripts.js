// Agregar una nueva sección para la habilidad
var skillsSection = document.querySelector('#habilidades');

// Crear una nueva instancia de Waypoint
var skillsWaypoint = new Waypoint({
  element: skillsSection,
  handler: function() {
    // Obtener los elementos de progreso
    const cssProgress = document.getElementById("css-progress");
    const htmlProgress = document.getElementById("html-progress");
    const jsProgress = document.getElementById("js-progress");
    const bootstrapProgress = document.getElementById("bootstrap-progress");

    // Animar los elementos de progreso
    animateProgress(cssProgress, 80);
    animateProgress(htmlProgress, 90);
    animateProgress(jsProgress, 70);
    animateProgress(bootstrapProgress, 60);
  },
  offset: 'bottom-in-view'
});

// Función para animar el progreso
function animateProgress(progressBar, targetWidth) {
  let currentWidth = 0;
  let intervalId = setInterval(increaseWidth, 10);

  function increaseWidth() {
    if (currentWidth >= targetWidth) {
      clearInterval(intervalId);
    } else {
      currentWidth++;
      progressBar.style.width = currentWidth + "%";
      progressBar.textContent = currentWidth + "%";
    }
  }
}


