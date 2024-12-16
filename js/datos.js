function mostrarDetalles(id) {
    var detalles = document.getElementById(id);
    var icono = detalles.previousElementSibling.querySelector('.icono');

    if (detalles.style.display === "block") {
        detalles.style.display = "none";
        icono.textContent = "↓"; // Cambiar el icono a flecha hacia abajo
    } else {
        detalles.style.display = "block";
        icono.textContent = "↑"; // Cambiar el icono a flecha hacia arriba
    }
}