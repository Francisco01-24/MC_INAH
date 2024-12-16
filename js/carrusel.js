document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0; // Índice de la imagen actual

    // Configura el ancho dinámico del contenedor de imágenes
    const setupCarousel = () => {
        const imageWidth = imagesContainer.parentElement.clientWidth; // Ancho del carrusel
        imagesContainer.style.width = `${imageWidth * images.length}px`; // Ancho total del contenedor
        images.forEach(image => {
            image.style.width = `${imageWidth}px`; // Cada imagen ocupa el ancho del carrusel
        });
        updateCarousel(); // Posiciona la primera imagen correctamente
    };

    // Actualiza la posición del carrusel
    const updateCarousel = () => {
        const offset = -currentIndex * imagesContainer.parentElement.clientWidth; // Desplaza el contenedor
        imagesContainer.style.transform = `translateX(${offset}px)`;
    };

    // Mostrar la siguiente imagen (con ciclo)
    const showNextImage = () => {
        currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice, vuelve al primero si es necesario
        updateCarousel();
    };

    // Mostrar la imagen anterior (con ciclo)
    const showPrevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Retrocede al índice anterior, vuelve al último si es necesario
        updateCarousel();
    };

    // Eventos de los botones
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    // Ajustar el carrusel al redimensionar la ventana
    window.addEventListener('resize', setupCarousel);

    // Inicializa el carrusel
    setupCarousel();
});
