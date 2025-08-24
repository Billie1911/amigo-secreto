// Lista donde vamos a guardar los nombres que el usuario escriba
let amigos = [];

// Esta función se ejecuta cuando se presiona el botón "Añadir"
function agregarAmigo() {
    // Obtenemos el valor del input (lo que el usuario escribió)
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // .trim() quita los espacios extra

    // Validamos que no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido");
        return; // salimos de la función
    }

    // Agregamos el nombre al arreglo "amigos"
    amigos.push(nombre);

    // Mostramos la lista actualizada en pantalla
    mostrarLista();

    // Limpiamos el input para que el usuario pueda escribir otro nombre
    input.value = "";
}

// Esta función muestra todos los nombres en la lista <ul>
function mostrarLista() {
    // Buscamos el elemento <ul> en el HTML
    let lista = document.getElementById("listaAmigos");

    // Limpiamos la lista antes de volver a escribir
    lista.innerHTML = "";

    // Recorremos el arreglo "amigos" y creamos un <li> por cada nombre
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // creamos un <li>
        li.textContent = amigos[i]; // escribimos el nombre
        lista.appendChild(li); // lo agregamos al <ul>
    }
}

// Esta función elige un nombre al azar de la lista
function sortearAmigo() {
    // Verificamos que haya nombres en la lista
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
        return;
    }

    // Calculamos un número aleatorio entre 0 y la cantidad de amigos - 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtenemos el nombre ganador usando el índice
    let ganador = amigos[indiceAleatorio];

    // Mostramos el resultado en pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "🎉 El amigo secreto es: " + ganador;
}
