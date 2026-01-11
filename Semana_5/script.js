// Elementos del DOM

const URL_Imagen = document.getElementById('URL_Imagen'); // Input para la URL de la imagen
const button_agregar = document.getElementById('button_agregar'); // Botón para agregar imagen
const galeria = document.getElementById('galeria'); // Contenedor de la galería de imágenes
const mensaje = document.getElementById('mensaje'); // Elemento para mostrar mensajes

// Variable para almacenar la imagen seleccionada

let imagenSeleccionada = null; // Imagen actualmente seleccionada

// Función para agregar una imagen a la galería 
function agregarImagen() { // Obtener la URL de la imagen
    const url = URL_Imagen.value.trim(); // Verificar si la URL no está vacía
    
    if (url !=="") { // Crear un nuevo elemento de imagen
        const nuevaImagen = document.createElement('img'); // Asignar la URL al atributo src
        nuevaImagen.src = url; // Agregar clase y event listener para selección
        nuevaImagen.classList.add('imagen-galeria'); // Agregar evento de clic para seleccionar la imagen
        
        nuevaImagen.addEventListener('click', () => seleccionarImagen(nuevaImagen)); // Agregar la nueva imagen a la galería
        
        galeria.appendChild(nuevaImagen); // Limpiar el campo de entrada
        
        mensaje.textContent = 'Imagen agregada correctamente.'; // Mensaje de éxito
        mensaje.style.color = 'green';
        
        URL_Imagen.value = ''; // Si no hay URL, mostrar una alerta
    } else {
        mensaje.textContent = 'Por favor, ingresa una URL válida.'; // Mensaje de error
        mensaje.style.color = 'red';
    }
}

// Función para seleccionar una imagen 
function seleccionarImagen(imagen) { // Deseleccionar la imagen previamente seleccionada
    if (imagenSeleccionada) { // Remover la clase de selección
        imagenSeleccionada.classList.remove('seleccionada'); 
    }
    imagenSeleccionada = imagen; // Agregar la clase de selección a la nueva imagen
    imagen.classList.add('seleccionada'); 
}

// Agregar event listener al botón
button_agregar.addEventListener('click', agregarImagen); // Función para eliminar la imagen seleccionada


// Función para eliminar la imagen seleccionada
function eliminarImagen() { // Verificar si hay una imagen seleccionada
    if (imagenSeleccionada) {   // Eliminar la imagen del DOM

        galeria.removeChild(imagenSeleccionada); // Reiniciar la variable de imagen seleccionada
        imagenSeleccionada = null; // Si no hay imagen seleccionada, mostrar una alerta
        
        mensaje.textContent = 'Imagen eliminada correctamente.'; // mensaje de éxito
        mensaje.style.color = 'turquoise';
    } else {
        mensaje.textContent = 'No hay ninguna imagen seleccionada para eliminar.'; // Mensaje de error
        mensaje.style.color = 'red';
    }

}
// Agregar event listener al botón de eliminar
const button_eliminar = document.getElementById('Eliminar_Imagen'); // Botón para eliminar imagen
button_eliminar.addEventListener('click', eliminarImagen);  // Función para eliminar la imagen seleccionada

// Funcion de tajos del teclado
document.addEventListener('keydown', (event) => { // Verificar si la tecla presionada es 'Delete'
    if (event.key === 'Delete') { // Llamar a la función para eliminar la imagen seleccionada
        eliminarImagen(); // Eliminar imagen al presionar 'Delete'
    }
});