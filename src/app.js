import "./styles/main.scss";
import "./js/interfaz";
import "./js/simulacion";

import { Rectangulo } from './js/Rectangulo'; // Importamos la clase Rectangulo
import { Circulo } from './js/Circulo';
import { Aleatorio } from './js/Aleatorio';
import { PSO } from './js/PSO';

var nj = require('@aas395/numjs');

var rec = new Rectangulo(15,25,50,10);
var cir = new Circulo(25,51,20);

var ale = new Aleatorio([15,25,50,10], 101, 101, 50);
var pso_alg = new PSO(10,10,'r')         // Constructor de PSO

console.log("Coordenadas rectangulo: [15,25,50,10]");
console.log("Area del rectangulo: "+rec.getArea())

console.log("Coordenadas circulo: [25,51,20]");
console.log("Area del circulo: "+cir.getArea())

console.log("NumPos = "+ale.rangoPos.length)
console.log("NumNeg = "+ale.rangoNeg.length)

console.log("Rectangulo")
pso_alg.run_pso(ale.rangoPos,ale.rangoNeg,rec.getArea());                      // Correr algoritmo
console.log(pso_alg.three_best_in_generation);