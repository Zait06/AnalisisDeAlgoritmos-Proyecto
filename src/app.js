import "./styles/main.scss";

import { Rectangulo } from './js/Rectangulo'; // Importamos la clase Rectangulo
import { Circulo } from './js/Circulo';
import { Particle,PSO } from './js/PSO';
const { UI } = require('./js/UI');

const ui = new UI();
var rec = new Rectangulo(5,25,20,10);
var part00 = new Particle('r');
var part01 = new Particle('c');
var pso_alg = new PSO(10,1,'r')

ui.render(rec.getArea());
pso_alg.run_pso();
console.log(pso_alg.population);
//console.log(part00.getPosition());
//console.log(part01.getPosition());

// for(let i=0;i<10;i++){
//     population.push(new Particle('r'));   
// }

// for(let i=0;i<population[0].length;i++){
//     suma[i] = 0.2*(population[0].position[i]+population[1].position[i]);
// }

// console.log(population[0].position)
// console.log(population[1].position)
// console.log(suma)