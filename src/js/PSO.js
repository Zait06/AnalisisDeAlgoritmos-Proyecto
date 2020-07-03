const nj = require('@aas395/numjs');

class Particle{
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
        this.position = nj.array(this.position);
        this.velocity = nj.array(this.velocity);
        this.score = 0;
        this.best_score = 0;   // Mejor puntuacion 
        this.bp = nj.zeros(this.length)   // Vector de posicion con mejor puntacion
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
        this.velocity[this.length-1] = Math.random()*51;
    }

    getPosition(){
        return this.position;
    }
    
    getVelocity(){
        return this.velocity;
    }

    // funcion para calcular el puntaje de la paticula
    score_function(){
        this.score = Math.random()*101; // Igualar a la función objetivo
        if(this.score > this.best_score){   // Minimización
            this.best_score = this.score;
            this.bp = this.position;
        }
    }

    /*
        Calcular la velocidad de la particula
        v=α(bp−p)+β(gbp−p)
        v=v+[α*rand1*(bp−p)]+[β*rand2*(gbp−p)]
    */
    calculate_velocity(gbp,alpha=0.6,beta=0.6){
        let a = (this.bp.subtract(this.position)).multiply(alpha*Math.random());
        let b = (nj.array(gbp).subtract(this.position)).multiply(beta*Math.random());
        this.velocity = this.velocity.add(a.add(b));
        this.position = this.position.add(this.velocity);
        /*
        this.velocity = this.sum(this.multScalar(alpha,this.sub(this.bp,this.position)),
                                this.multScalar(beta,this.sub(gbp,this.position)));
        this.position = this.sum(this.position,this.velocity)
        */
    }

    sum(a,b){
        let opera = [];
        for(let i=0;i<this.length;i++)
            opera.push(a[i]+b[i]);
        return opera;
    }

    sub(a,b){
        let opera = [];
        for(let i=0;i<this.length;i++)
            opera.push(a[i]-b[i]);
        return opera;
    }

    multScalar(scalar,a){
        let opera = [];
        for(let i=0;i<this.length;i++)
            opera.push(scalar*a[i]);
        return opera;
    }
}

export class PSO{
    constructor(num,genera,figura){
        this.figure = figura;
        this.best_score = 100e10;
        this.gbp = []
        this.num_population = num;
        this.population = [];       // particles
        this.generations = genera;
    }

    run_pso(){
        var scores = [];        // Puntuaciones de la particula
        var best_scores = [];   // Mejores puntuaciones
        var i;
        // Generación de la poblacion
        for(i=0;i<this.num_population;i++)
            this.population.push(new Particle(this.figure));
        
        // Corriendo el algoritmo
        i=0;
        while(i<this.generations){
            // Se calcula el socre de cada particula
            for(let p of this.population){
                p.score_function();
                scores.push([p.score,p.position]);
            }
            // Obtenemos el mejor puntaje de la poblacion
            scores.sort((aa,bb)=>{  // Minimizar el problema
                let a = aa[0];
                let b = bb[0];
                return a-b;
            });
            best_scores.push(scores[0][0]);
            if(scores[0][0]<this.best_score){
                this.best_score = scores[0][0];
                this.gbp = scores[0][1];
            }
            // Calculamos las velocidades de cada particula
            for(let p of this.population)
                p.calculate_velocity(this.gbp);
            scores = [];
            i++;
        }
    }
}