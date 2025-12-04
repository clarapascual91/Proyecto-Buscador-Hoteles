
const rl = require("readline-sync"); 
console.log("Hola Usuario");


let usuarionombre = rl.question("Bienvenido, introduzca su nombre de usuario. ");
let variablebusqueda = rl.question("Escribe la palabra clave que desees buscar: ");

console.log(`Hola ${usuarionombre}, has buscado la palabra: ${variablebusqueda}`);