import "./styles/main.scss";

import { Rectangulo } from './js/Rectangulo'; // Importamos la clase Rectangulo
const { UI } = require('./js/UI');

const ui = new UI();
var rec = new Rectangulo(5,25,20,10);
ui.render(rec.getArea());




