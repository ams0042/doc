/**
 * Espera a que el DOM esté completamente cargado antes de ejecutar el código.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Array con las rutas de las imágenes que se van a mostrar.
    const images = [
        './images/imagen1.png',
        './images/imagen2.jpg',
        './images/imagen3.png'
    ];
    
    let currentIndex = 0; // Índice que indica qué imagen se está mostrando.

    // Crea un elemento de imagen y le asigna la primera imagen del array.
    const imageElement = document.createElement('img');
    imageElement.src = images[currentIndex];

    // Añade la imagen al contenedor con la clase "content".
    document.querySelector('.content').appendChild(imageElement);

    /**
     * Evento que cambia la imagen cuando se hace clic sobre ella.
     */
    imageElement.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice. Si llega al final, vuelve al inicio.
        imageElement.src = images[currentIndex]; // Cambia la imagen a la nueva.
    });
});
