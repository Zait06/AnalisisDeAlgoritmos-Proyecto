import { Rectangulo } from './Rectangulo'; // Importamos la clase Rectangulo
import  "./styles.scss";

var rec = new Rectangulo(5,25,20,10)

function init(){
    console.log("Area del rectangulo: "+(rec.getArea()));
}

window.onload = init;