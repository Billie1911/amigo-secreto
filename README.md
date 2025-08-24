# Amigo Secreto

Aplicación web sencilla para agregar nombres de amigos a una lista y realizar un sorteo aleatorio para elegir al “amigo secreto”.

## 🎯 Objetivo
- Permitir al usuario:
  - Agregar nombres mediante un campo de texto y un botón **Añadir**.
  - Ver los nombres agregados en una lista.
  - Realizar un sorteo aleatorio con el botón **Sortear amigo**.
  - Ver el resultado del sorteo en pantalla.

## 🖥️ Demo local
Abre `index.html` en tu navegador.

> (Opcional) Si publicas en GitHub Pages, coloca aquí el enlace.

## 🧩 Características
- Validación: no permite agregar nombres vacíos.
- Visualización clara de la lista de amigos.
- Sorteo aleatorio con un clic.
- Versión de JavaScript pensada para principiantes en lógica de programación.

## 📁 Estructura del proyecto
<img width="218" height="204" alt="image" src="https://github.com/user-attachments/assets/9a39d65f-6aea-4740-bb55-84652dd43d9e" />


## 🚀 Cómo usar
1. Escribe un nombre en el campo de texto.
2. Presiona **Añadir** para agregarlo a la lista.
3. Repite el proceso para todos los amigos.
4. Presiona **Sortear amigo** para elegir un ganador al azar.

## 🧠 Explicación básica del código (app.js)
- `let amigos = []`: Arreglo donde guardamos los nombres.
- `agregarAmigo()`: Lee el input, valida que no esté vacío y guarda el nombre en el arreglo. Luego actualiza la lista en pantalla.
- `mostrarLista()`: Recorre el arreglo y crea un `<li>` por cada nombre.
- `sortearAmigo()`: Si hay al menos un nombre, elige uno al azar y lo muestra como ganador.

## 🔧 Requisitos
- Navegador web moderno (Chrome, Firefox, Edge, etc.)
- (Opcional) Servidor estático si quieres evitar restricciones del navegador al abrir archivos locales.

## 👩‍💻 Tecnologías
- HTML, CSS, JavaScript.

## 🤝 Contribuciones
¡Bienvenidas! Abre un issue o crea un pull request con tus mejoras.

## 📝 Licencia
MIT License. Libre para usar y modificar con atribución.
