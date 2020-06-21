export class Coordenada{
    constructor(x,y){
        this.x = x;     	// Coordenada X
        this.y = y;     	// Coordeanda Y
		this.distance = 0	// Distancia de un punto a una coordenada
    }

    getX(){         // Obtener coordenada X
        return this.x;
    }
    
    getY(){         // Obtener coordeanda Y
        return this.y;
    }
}