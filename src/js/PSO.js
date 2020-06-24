export class Particle{
    constructor(length){
        // position = (x1,y1,x2,y2)
        this.position = new Array(length);   // Posicion de la partícula
        this.velocity = new Array(length);
        for(let i=0;i<length;i++){
            this.position[i] = Math.random()*101;   // Posicion aleatorio
            this.velocity[i] = Math.random()*101;   // Velocidad aleatorio
        }
        this.score = 0;
        this.best_score = 100e10;
        this.bp = []
    }

    getPosition(){
        return this.position;
    }
    
    getVelocity(){
        return this.velocity;
    }
}