import "./styles/main.scss";
import "./js/interfaz";

import { Rectangulo } from './js/Rectangulo'; // Importamos la clase Rectangulo
import { Circulo } from './js/Circulo';
import { PSO } from './js/PSO';

var nj = require('@aas395/numjs');

var rec = new Rectangulo(5,25,20,10);
var cir = new Circulo(25,51,20);
var pso_alg = new PSO(10,1,'r')         // Constructor de PSO

console.log("Area del ciculo: "+cir.getArea())
pso_alg.run_pso();                      // Correr algoritmo
//console.log(pso_alg.population);
var position = nj.random(4).multiply(100)   // Creacion de un numjs
var jeje = []                           // Array vacio
for(let i=0;i<4;i++){
    let asdf = Math.random()*101;   // Posicion aleatorio
    jeje.push(parseFloat(asdf.toFixed(2))); // Dos decimales
}
var otro = nj.array(jeje);          // De array a numjs
console.log(otro);                  // Impresion objeto numjs
position = position.tolist()        // De numjs a array
console.log(position)               // Impresion de array
for(let i=0;i<4;i++)
    position[i] = parseFloat(position[i].toFixed(2));
console.log(position);              // Impresion de array dos decimales