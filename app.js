const routes = require ('./routes')
const os = require ('os');
const fs = require ('fs');

console.log('Se muestra todos los arcihvos');
routes.mostrarArchivos();
console.log('Se muestra de forma Asincrona');
routes.archivoAsinc('D:/360MoveData/Users/Johnny/Desktop/first-node-app');
console.log('Se muestra de forma sincrona');
routes.archivoSinc('D:/360MoveData/Users/Johnny/Desktop/first-node-app');
routes.contadorLetra('./','c')

