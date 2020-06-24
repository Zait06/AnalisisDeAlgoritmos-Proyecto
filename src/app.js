import "./styles/main.scss";

import { Rectangulo } from './js/Rectangulo'; // Importamos la clase Rectangulo
import { Circulo } from './js/Circulo';
import { Particle } from './js/PSO';
const { UI } = require('./js/UI');

const ui = new UI();
var rec = new Rectangulo(5,25,20,10);
var part = new Particle(4);

ui.render(rec.getArea());
console.log(part.getPosition());
console.log(part.getVelocity());