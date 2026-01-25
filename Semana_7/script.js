// Semana_7/script.js

//================================= EJEMPLOS =======================================//

// validación y renderizado de productos
const products = [
    { id: 1, nombre: "PRIMER PRODUCTO", precio: 45, descripcion: "Calzado Nike Oferta T (40)." },
    { id: 2, nombre: "SEGUNDO PRODUCTO", precio: 30, descripcion: "sandalias T (39)." },
    { id: 3, nombre: "TERCER PRODUCTO", precio: 25, descripcion: "Camiseta Polo T (XS)." },
 
];

//================================ CONTENIDO DOM CARGADO =======================================//

// Función para renderizar la lista de productos
document.addEventListener("DOMContentLoaded", () => { // Asegura que el DOM esté completamente cargado antes de ejecutar el script

    const ul = document.getElementById("productList"); // Lista donde se mostrarán los productos
    const btnAgregar = document.getElementById("btnAgregar"); // Botón para agregar un nuevo producto

//================================= FUNCIONES =======================================//

// Función para renderizar la lista de productos   
function renderProducts() { // Renderiza la lista de productos en el DOM
        ul.innerHTML = ""; // Limpia la lista antes de renderizar
        products.forEach(producto => { // Itera sobre cada producto y crea un elemento de lista
            const li = document.createElement("li"); // Crea un nuevo elemento de lista
            li.innerHTML = `
                <div class="producto"> 
                    <h3>${producto.nombre}</h3>
                    <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
                    <p>${producto.descripcion}</p>
                </div>
            `; // Rellena el elemento con la información del producto
            ul.appendChild(li); // Agrega el elemento a la lista en el DOM
        });
    }
//================================= FUNCIONES =======================================//
 // Función para agregar un nuevo producto   
function agregarProducto() { // Solicita al usuario los datos del nuevo producto
    const nombre = prompt("Ingrese el nombre del producto:"); // Solicita el nombre del producto
    const precio = parseFloat(prompt("Ingrese el precio del producto:")); // Solicita el precio del producto
    const descripcion = prompt("Ingrese la descripción del producto:"); // Solicita la descripción del producto

    if (nombre?.trim() && !isNaN(precio) && descripcion?.trim()) { // Valida que los datos ingresados sean correctos
        products.push({ // Agrega el nuevo producto al array de productos
            id: Date.now(), // Genera un ID único basado en la marca de tiempo actual
            nombre: nombre.trim(), // Limpia el nombre del producto
            precio, // Precio ya es un número
            descripcion: descripcion.trim() // Limpia la descripción del producto
        });
        renderProducts(); // Vuelve a renderizar la lista de productos para mostrar el nuevo producto
    } else { 
        alert("Por favor, ingrese datos válidos."); // Muestra una alerta si los datos ingresados no son válidos
    }
}

//================================= EVENTOS =======================================//

// Evento para el botón de agregar producto
    btnAgregar.addEventListener("click", agregarProducto); // Asocia la función de agregar producto al botón

// Renderiza la lista de productos inicialmente 
    renderProducts(); // Renderiza la lista de productos al cargar la página
});

//================================= FIN DEL SCRIPT =======================================//