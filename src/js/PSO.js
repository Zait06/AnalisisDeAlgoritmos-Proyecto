export class Particle{
    constructor(figura){
        this.figure = figura;       // Figura a hacer
        this.length = 0
        /*
            position
            r = (x1,y1,x2,y2)
            c = (x,y,r)
        */
        this.position = [];     // Posicion de la particula
        this.velocity = [];     // Velocidad de particula
        switch(figura){
            case 'r':               // Rectángulo
                this.length = 4;
                this.initRect();
            break;
            case 'c':               // Ciruculo
                this.length = 3;
                this.initCirc();
            break;
        }
        this.score = 0;
        this.best_score = 100e10;
        this.bp = []
    }

    initRect(){
        for(let i=0;i<this.length;i++){
            this.position[i] = Math.random()*101;   // Posicion aleatorio
            this.velocity[i] = Math.random()*101;   // Velocidad aleatorio
        }
        if(this.position[0] > this.position[2]){
            let aux = this.position[0];
            this.position[0] = this.position[2];
            this.position[2] = aux;
        }
        if(this.position[1] < this.position[3]){
            let aux = this.position[1];
            this.position[1] = this.position[3];
            this.position[3] = aux;
        }
    }

    initCirc(){
        for(let i=0;i<this.length-1;i++){
            this.position[i] = Math.random()*101;   // Posicion aleatorio
            this.velocity[i] = Math.random()*101;   // Velocidad aleatorio
        }
        this.position[this.length-1] = Math.random()*51;
    }

    getPosition(){
        return this.position;
    }
    
    getVelocity(){
        return this.velocity;
    }
}