import "./styles/main.scss";

import { Rectangulo } from './js/Rectangulo'; // Importamos la clase Rectangulo
import { Circulo } from './js/Circulo';
import { Particle } from './js/PSO';
const { UI } = require('./js/UI');

const ui = new UI();
var rec = new Rectangulo(5,25,20,10);
var part00 = new Particle('r');
var part01 = new Particle('c');
var population = [];

ui.render(rec.getArea());
console.log(part00.getPosition());
console.log(part01.getPosition());

for(let i=0;i<10;i++){
    population.push(new Particle('r'));   
}

console.log(population)