import "./styles/main.scss";


import { Rectangulo } from './js/Rectangulo'; // Importamos la clase Rectangulo

var rec = new Rectangulo(5,25,20,10)
var result = document.getElementById('result');

console.log("Area del rectangulo: "+(rec.getArea()));

result.innerHTML = rec.getArea();


