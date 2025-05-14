//Manipulacion del DOM 
//nos permite interactuar con un documento, modificar su estructura
//estilo y contenido

//Selecion elementos del DOM
//Por ID
//obteniendo por id la etiqueta titulo
//nos permite acceder a todas sus propiedades
let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.value,titulo.textContent,titulo.innerText);
console.log("holaaa")

titulo.textContent = "este el nuevo titulo";

let boton= document.getElementById('boton')

boton.addEventListener('click', function(){alert('este botin ha sido clickeado')})