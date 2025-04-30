////////////////////////////////////////////////////
//var miVariable = "hola soy una variable con var"; //no se usa
//let miVariable2 = "pueden ser re-escritos sus valores"; //solo vive en el scope declarado
//miVariable2 = 9; //reasignacion del valor

// const --> variable constante no son reasignables los valores

//const miVariable3 = 10;

const text = "string";
const numeros = 2; //number
const booleanos = true; //booleano
//undefined --> valor no definido
//null --> vacio

//Operadores

//Aritmericos: sib todos los de matematicas + - / % *
/* comparacion:
doble igual == compara el valor del dato 
tripe igual === compara el valor y el tipo de dato 
distinto el valor !=
distinto valor y el tipo  !==
mayor, menor > <
mayor o igual >=
menor o igual <=
*/
// Condicionales:
//if
const edad = 20;
if (edad > 18) {
  console.log("Sos mayor de edad");
} else {
  console.log("Sos menor de edad");
}

//SWITCHS

//funciones
//declaraciones
function saludar(nombre) {
  return `Hola ${nombre}`;
}
console.log(saludar("Fede"));

//arrow function
//return implicito
const saludoImplicito = (nombre) => `Hola ${nombre}`;
//si el return implicito tiene mas de una  linea va a estar
//envuelto en parentesis (`Hola ${nombre}`)

//return Explicito
const saludarExplicito = (nombre) => {};

//arreglos o arrays(listas en python)
const miArreglo = [1, 2, "pepito", true];
console.log(miArreglo[2]);

const miObjeto = {
  clave: "Valor",
  nombre: "Federico",
  edad: 29,
};
console.log(miObjeto, nombre);

//iteramos una lista con for
for (let i = 0; i < miArreglo.length; i++) {
  console.log(miArreglo[i]);
}
