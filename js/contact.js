/**
 * Espera a que el DOM esté completamente cargado antes de ejecutar el código.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el formulario de contacto por su ID
    const contactForm = document.getElementById('contactForm');

    /**
     * Evento que se ejecuta cuando el formulario se envía.
     * @param {Event} e - Evento del formulario.
     */
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene que la página se recargue al enviar el formulario.

        // Obtiene los valores ingresados en los campos del formulario.
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        /**
         * Verifica que los campos no estén vacíos.
         * Si están completos, muestra un mensaje de agradecimiento.
         * Si falta algún campo, muestra una alerta pidiendo que se completen.
         */
        if (name.trim() !== '' && message.trim() !== '') {
            alert(`¡Gracias por tu mensaje, ${name}!`); // Muestra un mensaje de confirmación.
            contactForm.reset(); // Resetea el formulario para limpiarlo después del envío.
        } else {
            alert('Por favor, completa todos los campos.'); // Alerta si hay campos vacíos.
        }
    });
});
