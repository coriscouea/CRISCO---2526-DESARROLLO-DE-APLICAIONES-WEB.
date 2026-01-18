// Validaciones dinámicas para el formulario

const formulario = document.getElementById('FormularioInteractivo');// Obtener el formulario
const submitBtn = document.getElementById('submitBtn');// Obtener el botón de enviar
const resetBtn = document.getElementById('resetBtn');// Obtener el botón de reiniciar

//================================= Nombre =======================================//

const nombreInput = document.getElementById('nombre');// Obtener el campo de nombre
const mensajeError = document.getElementById('mensajeError');// Obtener el mensaje de error para el nombre

// Función para validar nombre en tiempo real
function validarNombre() { // Función para validar el nombre
    const valor = nombreInput.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco

    if (valor === "") { // Si el campo está vacío
        mensajeError.style.display = 'none'; // Ocultar el mensaje de error
        nombreInput.classList.remove('invalid','valid'); // Quitar clases de validación

    } else if (valor.length < 3) { // Si el nombre tiene menos de 3 caracteres
        mensajeError.style.display = 'inline'; // Mostrar el mensaje de error
        nombreInput.classList.add('invalid'); // Agregar clase de inválido
        nombreInput.classList.remove('valid'); // Quitar clase de válido

    } else {
        mensajeError.style.display = 'none'; // Ocultar el mensaje de error
        nombreInput.classList.add('valid'); // Agregar clase de válido
        nombreInput.classList.remove('invalid'); // Quitar clase de inválido
    }
    actualizarBoton(); // Actualizar el estado del botón de enviar
}

// Listener
nombreInput.addEventListener('input', validarNombre);   // Escuchar cambios en el campo de nombre



//================================= CORREO =======================================//

const correoInput = document.getElementById('correo'); // Obtener el campo de correo
const mensajeErrorCorreo = document.getElementById('mensajeErrorCorreo'); // Obtener el mensaje de error para el correo

// Función para validar correo en tiempo real
function validarCorreo() { // Función para validar el correo
    const valor = correoInput.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para formato básico de correo
    const dominiosPermitidos = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com']; // Dominios permitidos

    if (valor === "") { // Si el campo está vacío
        mensajeErrorCorreo.style.display = 'none'; // Ocultar el mensaje de error
        correoInput.classList.remove('invalid','valid'); // Quitar clases de validación
        actualizarBoton (); 
        return; // Salir de la función
    }

    if (!correoRegex.test(valor)) { // Si el formato del correo es inválido
        mensajeErrorCorreo.textContent = 'Formato de correo inválido.'; // Mensaje de error
        mensajeErrorCorreo.style.display = 'inline'; // Mostrar el mensaje de error
        correoInput.classList.add('invalid'); // Agregar clase de inválido
        correoInput.classList.remove('valid'); // Quitar clase de válido
        actualizarBoton (); 
        return;
    }
    const dominio = valor.split('@')[1]; // Extraer el dominio del correo
    if (!dominiosPermitidos.includes(dominio)) { // Si el dominio no está en la lista de permitidos

        mensajeErrorCorreo.textContent = 'Dominio de correo no permitido.'; // Mensaje de error
        mensajeErrorCorreo.style.display = 'inline'; // Mostrar el mensaje de error
        correoInput.classList.add('invalid');   // Agregar clase de inválido
        correoInput.classList.remove('valid');  // Quitar clase de válido

    } else {
        mensajeErrorCorreo.style.display = 'none';  // Ocultar el mensaje de error      
        correoInput.classList.add('valid');  // Agregar clase de válido
        correoInput.classList.remove('invalid');    // Quitar clase de inválido
    }
    actualizarBoton();
}

// Listener
correoInput.addEventListener('input', validarCorreo);  // Escuchar cambios en el campo de correo

//================================= CONTRASEÑA ======================================//

const contraseñaInput = document.getElementById('contraseña');  // Obtener el campo de contraseña
const mensajeErrorContraseña = document.getElementById('mensajeErrorContraseña'); // Obtener el mensaje de error para la contraseña

// Función para validar contraseña en tiempo real
function validarContraseña() {  // Función para validar la contraseña
    const valor = contraseñaInput.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco
    const contraseñaRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/; // Expresión regular para validar la contraseña

    if (valor === "") { // Si el campo está vacío
        mensajeErrorContraseña.style.display = 'none'; // Ocultar el mensaje de error
        contraseñaInput.classList.remove('invalid','valid');    // Quitar clases de validación
    
    } else if (!contraseñaRegex.test(valor)) { // Si la contraseña no cumple con los requisitos
        mensajeErrorContraseña.style.display = 'inline'; // Mostrar el mensaje de error
        contraseñaInput.classList.add('invalid'); // Agregar clase de inválido
        contraseñaInput.classList.remove('valid'); // Quitar clase de válido

    } else {
        mensajeErrorContraseña.style.display = 'none'; // Ocultar el mensaje de error
        contraseñaInput.classList.add('valid'); // Agregar clase de válido
        contraseñaInput.classList.remove('invalid'); // Quitar clase de inválido
    }
    validarConfirmarContraseña(); // Revalidar confirmar contraseña al cambiar la contraseña 
    actualizarBoton(); 
}

// Listener
contraseñaInput.addEventListener('input', validarContraseña); // Escuchar cambios en el campo de contraseña

//================================= CONFIRMAR CONTRASEÑA ======================================//

const confirmarContraseñaInput = document.getElementById('confirmarContraseña');    // Obtener el campo de confirmar contraseña
const mensajeErrorConfirmarContraseña = document.getElementById('mensajeErrorConfirmarContraseña'); // Obtener el mensaje de error para confirmar contraseña

// Función para validar confirmar contraseña
function validarConfirmarContraseña() {     // Función para validar la confirmación de la contraseña
    const valor = confirmarContraseñaInput.value; // Obtener el valor del campo

    if (valor === "") { // Si el campo está vacío
        mensajeErrorConfirmarContraseña.style.display = 'none';     // Ocultar el mensaje de error
        confirmarContraseñaInput.classList.remove('invalid','valid');   // Quitar clases de validación
    
    } else if (valor !== contraseñaInput.value) { // Si las contraseñas no coinciden
        mensajeErrorConfirmarContraseña.style.display = 'inline'; // Mostrar el mensaje de error
        confirmarContraseñaInput.classList.add('invalid'); // Agregar clase de inválido
        confirmarContraseñaInput.classList.remove('valid'); // Quitar clase de válido

    } else {
        mensajeErrorConfirmarContraseña.style.display = 'none'; // Ocultar el mensaje de error
        confirmarContraseñaInput.classList.add('valid'); // Agregar clase de válido
        confirmarContraseñaInput.classList.remove('invalid'); // Quitar clase de inválido
    }
    actualizarBoton();
}

// Listener
confirmarContraseñaInput.addEventListener('input', validarConfirmarContraseña); // Escuchar cambios en el campo de confirmar contraseña

//================================= EDAD ======================================//

const edadInput = document.getElementById('edad'); // Obtener el campo de edad
const mensajeErrorEdad = document.getElementById('mensajeErrorEdad'); // Obtener el mensaje de error para la edad

// Función para validar edad
function validarEdad() {   // Función para validar la edad
    const valorTexto = edadInput.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco
    const valor = parseInt(valorTexto); // Convertir el valor a entero

    if (valorTexto === "") { // Si el campo está vacío
        mensajeErrorEdad.style.display = 'none'; // Ocultar el mensaje de error
        edadInput.classList.remove('invalid','valid');  // Quitar clases de validación
    
    } else if (isNaN(valor) || valor < 18) { // Si la edad no es un número o es menor a 18
        mensajeErrorEdad.textContent = 'Debes ser mayor de 18 años.'; // Mensaje de error
        mensajeErrorEdad.style.display = 'inline'; // Mostrar el mensaje de error
        edadInput.classList.add('invalid');     // Agregar clase de inválido
        edadInput.classList.remove('valid');   // Quitar clase de válido

    } else {
        mensajeErrorEdad.style.display = 'none'; // Ocultar el mensaje de error
        edadInput.classList.add('valid'); // Agregar clase de válido
        edadInput.classList.remove('invalid'); // Quitar clase de inválido
    }
    actualizarBoton();
}

// Listener
edadInput.addEventListener('input', validarEdad);   // Escuchar cambios en el campo de edad

// ================================ BOTÓN =================================== //

function actualizarBoton() { // Función para actualizar el estado del botón de enviar
    const camposInvalidos = document.querySelectorAll('input.invalid'); // Obtener todos los campos inválidos
    submitBtn.disabled = camposInvalidos.length > 0; // Deshabilitar el botón si hay campos inválidos
}

// ================================ ENVIAR =================================== //

formulario.addEventListener('submit', function (e) { // Listener para el envío del formulario
    e.preventDefault(); // Prevenir el envío por defecto

    // Validar todos los campos antes de enviar

    validarNombre();
    validarCorreo();
    validarContraseña();
    validarConfirmarContraseña();
    validarEdad();

    if (!submitBtn.disabled) { // Si el botón no está deshabilitado
        alert('Formulario enviado correctamente.'); // Mostrar alerta de éxito
        formulario.reset(); // Reiniciar el formulario
        resetFormulario(); // Reiniciar validaciones
    }
});

// ================================ REINICIAR =================================== //

function resetFormulario() { // Función para reiniciar el formulario y las validaciones
    document.querySelectorAll('input').forEach(input => { // Recorrer todos los campos de entrada
        input.classList.remove('valid', 'invalid'); // Quitar clases de validación
    });
    document.querySelectorAll('span[id^="mensajeError"]').forEach(span => { // Recorrer todos los mensajes de error
        span.style.display = 'none'; // Ocultar los mensajes de error
    });
    submitBtn.disabled = true; // Deshabilitar el botón de enviar
}

// Listener
resetBtn.addEventListener('click', resetFormulario);  // Escuchar el clic en el botón de reiniciar

//Tarea completada de la Semana 6