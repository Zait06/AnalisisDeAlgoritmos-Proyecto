import { Coordenada } from "./Coordenada.js";   // Importamos la clase coordenada

export default class Rectangulo{
    constructor(x1,y1,x2,y2){
        this.superiorIzq = new Coordenada(x1,y1);       // Coordenada superior izquierda
        this.inferiorDer = new Coordenada(x2,y2);       // Coordenada inferior derecha
    }

    getSupIzq(){
        return this.superiorIzq;
    }

    getInfDer(){
        return this.inferiorDer;
    }

    getArea(){
        let alto = this.getSupIzq().getY() - this.getInfDer().getY();
        let ancho = this.getInfDer().getX() - this.getSupIzq().getX();
        return (alto*ancho);
    }
}