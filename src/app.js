import "./styles/main.scss";
import "./js/interfaz";
import "./js/simulacion";

import { Rectangulo } from './js/Rectangulo'; // Importamos la clase Rectangulo
import { Circulo } from './js/Circulo';
import { Aleatorio } from './js/Aleatorio';
import { PSO } from './js/PSO';


var boton_puntos = document.getElementById('btn-puntos');
var figura_inicial;
var figura_usuario;

var ale;

var canvas = document.getElementById('simulacion-canvas');

boton_puntos.addEventListener('click', ()=> {

    var figura = document.getElementById('figura-select');

    //Referencia del Canvas
    var width = canvas.width;
    var height = canvas.height;

    var lista_coords = [];

    if(figura.value == 'Rectangulo') {
        
        let coord1_X = document.getElementById('Rec-Coord1-X').value;
        let coord1_Y = document.getElementById('Rec-Coord1-Y').value;
        let coord2_X = document.getElementById('Rec-Coord2-X').value;
        let coord2_Y = document.getElementById('Rec-Coord2-Y').value;

        lista_coords.push(coord1_X);
        lista_coords.push(coord1_Y);
        lista_coords.push(coord2_X);
        lista_coords.push(coord2_Y);

        figura_inicial = 'r';

    }
    else if(figura.value == 'Circulo') {

        let coord1_X = document.getElementById('Circ-Coord1-X').value;
        let coord1_Y = document.getElementById('Circ-Coord1-Y').value;
        let radio = document.getElementById('radio').value;

        lista_coords.push(coord1_X);
        lista_coords.push(coord1_Y);
        lista_coords.push(radio);

        figura_inicial = 'c';

    }

    if(lista_coords.length == 4) {
  
        var rec = canvas.getContext('2d');
    
        //rec.fillStyle = "#ffffff";
    
        var x = lista_coords[0];
        var y = lista_coords[1];
        var rec_width = lista_coords[2] - lista_coords[0];
        var rec_height = lista_coords[3] - lista_coords[1];
    
        figura_usuario = new Rectangulo(x,y, lista_coords[2], lista_coords[3]);

        rec.strokeRect(x,y,rec_width,rec_height);  

    }
    else if(lista_coords.length == 3) {

        var circulo = canvas.getContext('2d');

        circulo.fillStyle = "#ffffff";

        var x = lista_coords[0];
        var y = lista_coords[1];
        var radio = lista_coords[2];

        figura_usuario = new Circulo(x,y,radio);

        circulo.beginPath();
        circulo.arc(x ,y, radio, 0, Math.PI*2);
        circulo.fill();
        circulo.stroke();
        
    }


    //Configuracion de puntos aleatorios
    var radio_puntos_aleatorios = 1;
    var num_puntos_aleatorios = document.getElementById('cantidad_aleatorios').value;

    var max_width = width  - radio_puntos_aleatorios;
    var max_height = height - radio_puntos_aleatorios;

    ale = new Aleatorio(lista_coords, max_width, max_height, num_puntos_aleatorios);

    var punto = canvas.getContext('2d');
    for(let i = 0; i<ale.rangoPos.length; i++) {
    
        punto.fillStyle = "green";
        punto.beginPath();
        punto.arc(ale.rangoPos[i][0], ale.rangoPos[i][1], radio_puntos_aleatorios, 0, Math.PI*2);
        punto.fill();
        punto.stroke();

    }

    for(let i = 0; i<ale.rangoNeg.length; i++) {
    
        punto.fillStyle = "red";
        punto.beginPath();
        punto.arc(ale.rangoNeg[i][0], ale.rangoNeg[i][1], radio_puntos_aleatorios, 0, Math.PI*2);
        punto.fill();
        punto.stroke();

    }


});



var btn_simulacion = document.getElementById('btn-simulacion');

function Print_rectangulo(list_figuras, num_generaciones) {

    var figura_rec = canvas.getContext('2d');

    for(let i=0; i<3; i++){

        var x = list_figuras[num_generaciones-1][i][0][0];
        var y = list_figuras[num_generaciones-1][i][0][1];
        var rec_width = list_figuras[num_generaciones-1][i][0][2] - x;
        var rec_height = list_figuras[num_generaciones-1][i][0][3] - y;

        figura_rec.strokeRect(x,y,rec_width,rec_height);  
    }

}

function Print_circulo(list_figuras){

}


btn_simulacion.addEventListener('click', ()=> {

    var tam_poblacion = document.getElementById('tam-poblacion').value;
    var num_generaciones = document.getElementById('num_generaciones').value;
    var ratio_1 = document.getElementById('ratio-1').value;
    var ratio_2 = document.getElementById('ratio-2').value;

    var pso_alg = new PSO(tam_poblacion,num_generaciones,figura_inicial);         // Constructor de PSO
    pso_alg.run_pso(ale.rangoPos,ale.rangoNeg,figura_usuario.getArea());          // Correr algoritmo

    console.log(pso_alg.three_best_in_generation);

    if(figura_inicial == 'r') {
        Print_rectangulo(pso_alg.three_best_in_generation, num_generaciones);
    }else{
        Print_circulo(pso_alg.three_best_in_generationm, num_generaciones);
    }
    
});




// var cir = new Circulo(25,51,20);

// var ale = new Aleatorio([40,50,70,20], 101, 101, 100);
// var pso_alg = new PSO(10,10,'r')         // Constructor de PSO

// console.log("Coordenadas rectangulo: [15,25,50,10]");
// console.log("Area del rectangulo: "+rec.getArea())

// console.log("Coordenadas circulo: [25,51,20]");
// console.log("Area del circulo: "+cir.getArea())

// console.log("NumPos = "+ale.rangoPos.length)
// console.log("NumNeg = "+ale.rangoNeg.length)

// console.log("Rectangulo")
// pso_alg.run_pso(ale.rangoPos,ale.rangoNeg,rec.getArea());                      // Correr algoritmo
// console.log(pso_alg.three_best_in_generation);