import "./styles/main.scss";
import "./js/interfaz";
import "./js/simulacion";
import "./static/img/logo-ESCOM.png";

import { Rectangulo } from './js/Rectangulo'; // Importamos la clase Rectangulo
import { Circulo } from './js/Circulo';
import { Aleatorio } from './js/Aleatorio';
import { PSO } from './js/PSO';
// import { Coordenada } from "./js/Coordenada";
// import { printThreshold } from "@aas395/numjs/src/config";


var boton_puntos = document.getElementById('btn-puntos');   // Botón de accion
var figura_inicial; // Se guarda el caracter de la figura seleccionada por el usuario
var figura_usuario; // Figura ingresada por el usuario
var lista_coords;   // Coordenadas de la figura ingresado por el usuario

var ale;        // Variable para el objeto de valores aleatorios
var pso_alg;    // Variable para el objeto PSO

var canvas = document.getElementById('simulacion-canvas');


function Print_Ventana_Rec() {      // Imprime el rectángulo ingresado por el usario

    var rec = canvas.getContext('2d');
    
    rec.strokeStyle = "#000000";    // Contorno negro

    var x = lista_coords[0];
    var y = lista_coords[1];
    var rec_width = lista_coords[2] - lista_coords[0];
    var rec_height = lista_coords[3] - lista_coords[1];

    figura_usuario = new Rectangulo(x,y, lista_coords[2], lista_coords[3]); // Creacion del objeto rectangulo

    rec.strokeRect(x,y,rec_width,rec_height);   // Se dibuja el rectangulo

}

function Print_Ventana_Circ() {     // Se imprime el circulo ingresado por el usuario

    var circulo = canvas.getContext('2d');
    
    circulo.strokeStyle = "#000000";    // Contonrno negro

    var x = lista_coords[0];
    var y = lista_coords[1];
    var radio = lista_coords[2];

    figura_usuario = new Circulo(x,y,radio);    // Se inicializa el objeto ingresado por el usuario

    circulo.beginPath();
    circulo.arc(x ,y, radio, 0, Math.PI*2);     // Se dibuja el circulo ingresado por el usuario
    circulo.stroke();

}

function Print_Aleatorios(ale) {        // Se imprimen los puntos aleatorios generados

    var radio_puntos_aleatorios = 1;

    var punto = canvas.getContext('2d');
    for(let i = 0; i<ale.rangoPos.length; i++) {    // Los puntos positivos se imprimen de color verde
    
        punto.fillStyle = "green";
        punto.beginPath();
        punto.arc(ale.rangoPos[i][0], ale.rangoPos[i][1], radio_puntos_aleatorios, 0, Math.PI*2);
        punto.fill();
        punto.stroke();

    }

    for(let i = 0; i<ale.rangoNeg.length; i++) {    // Los puntos negativos se imprimen de color rojo
    
        punto.fillStyle = "red";
        punto.beginPath();
        punto.arc(ale.rangoNeg[i][0], ale.rangoNeg[i][1], radio_puntos_aleatorios, 0, Math.PI*2);
        punto.fill();
        punto.stroke();

    }
}

var alto, ancho;    // Ancho y alto de la ventana cambas

boton_puntos.addEventListener('click', ()=> {   // Se detecta que figura selecciono el usuario y se guardan los datos

    //Referencia del Canvas
    var width = canvas.width;
    var height = canvas.height;
    alto = height;
    ancho = width;

    var figura = document.getElementById('figura-select');

    lista_coords = [];

    if(figura.value == 'Rectangulo') {
        
        let coord1_X = document.getElementById('Rec-Coord1-X').value;
        let coord1_Y = document.getElementById('Rec-Coord1-Y').value;
        let coord2_X = document.getElementById('Rec-Coord2-X').value;
        let coord2_Y = document.getElementById('Rec-Coord2-Y').value;

       
        if(Number(coord1_X) > Number(coord2_X) || Number(coord1_Y) < Number(coord2_Y) ) {
    
            alert('Coordenadas incorrectas, vuelve a ingresar coordenadas.');
            let input = document.querySelectorAll('input.form-control');
            for(let i=0; i<input.length; i++){
                input[i].value = "";
            }
            return;
        }

        // Se guardan los datos en una lista
        lista_coords.push(coord1_X);    
        lista_coords.push(coord1_Y);
        lista_coords.push(coord2_X);
        lista_coords.push(coord2_Y);

        figura_inicial = 'r';   // Se pone r de rectangulo

    }
    else if(figura.value == 'Circulo') {

        let coord1_X = document.getElementById('Circ-Coord1-X').value;
        let coord1_Y = document.getElementById('Circ-Coord1-Y').value;
        let radio = document.getElementById('radio').value;

        // Se guardan los datos en una lista
        lista_coords.push(coord1_X);
        lista_coords.push(coord1_Y);
        lista_coords.push(radio);

        figura_inicial = 'c';   // Se pone c de circulo 

    }

    if(lista_coords.length == 4) {
        Print_Ventana_Rec();
    }
    else if(lista_coords.length == 3) {
        Print_Ventana_Circ();
    }


    //Configuracion de puntos aleatorios
    var radio_puntos_aleatorios = 1;
    var num_puntos_aleatorios = document.getElementById('cantidad_aleatorios').value;   // Se captura el numero de datos aleatorios

    var max_width = width  - radio_puntos_aleatorios;
    var max_height = height - radio_puntos_aleatorios;
    
    ale = new Aleatorio(lista_coords, max_width, max_height, num_puntos_aleatorios);    // Se crean los puntos aleatorios

    Print_Aleatorios(ale);  // Se imprimen los puntos
    
});



var btn_simulacion = document.getElementById('btn-simulacion');     // Boton simulacion

function Print_rectangulo(list_figuras, num_generaciones) {         // Se imprimen los mejores 3 de la generacion
    /*
        Para cada particula se le asigna una tarjeta el cual se le
        dan los valores de puntuacion que obtuvo y las coordenadas 
        que le pretenecen
        Cada particula se le diferencia con un color en particular
    */

    let Puntuacion_1 = document.getElementById('Puntuacion-1');
    let Coordenadas_1 = document.getElementById('Coordenadas-1');
    let Puntuacion_2 = document.getElementById('Puntuacion-2');
    let Coordenadas_2 = document.getElementById('Coordenadas-2');
    let Puntuacion_3 = document.getElementById('Puntuacion-3');
    let Coordenadas_3 = document.getElementById('Coordenadas-3');

    Puntuacion_1.innerHTML = '';
    Puntuacion_2.innerHTML = '';
    Puntuacion_3.innerHTML = '';

    Coordenadas_1.innerHTML = '';
    Coordenadas_2.innerHTML = '';
    Coordenadas_3.innerHTML = '';
    
    Puntuacion_1.innerHTML = list_figuras[num_generaciones-1][0][1].toFixed(2);
    Puntuacion_2.innerHTML = list_figuras[num_generaciones-1][1][1].toFixed(2);
    Puntuacion_3.innerHTML = list_figuras[num_generaciones-1][2][1].toFixed(2);

    Coordenadas_1.innerHTML = "[ "+list_figuras[num_generaciones-1][0][0][0].toFixed(2) +", "
                                +list_figuras[num_generaciones-1][0][0][1].toFixed(2)+", "
                                +list_figuras[num_generaciones-1][0][0][2].toFixed(2)+", "
                                +list_figuras[num_generaciones-1][0][0][3].toFixed(2)+" ]";

    Coordenadas_2.innerHTML = "[ "+list_figuras[num_generaciones-1][1][0][0].toFixed(2) +", "
                                +list_figuras[num_generaciones-1][1][0][1].toFixed(2)+", "
                                +list_figuras[num_generaciones-1][1][0][2].toFixed(2)+", "
                                +list_figuras[num_generaciones-1][1][0][3].toFixed(2)+" ]";

    Coordenadas_3.innerHTML = "[ "+list_figuras[num_generaciones-1][2][0][0].toFixed(2) +", "
                                +list_figuras[num_generaciones-1][2][0][1].toFixed(2)+", "
                                +list_figuras[num_generaciones-1][2][0][2].toFixed(2)+", "
                                +list_figuras[num_generaciones-1][2][0][3].toFixed(2)+" ]";

    let arreglo_color = ['#076296','#DE6121','#7C1F7C'];
    let index_color = 0;

    var figura_rec = canvas.getContext('2d');

    for(let i=0; i<3; i++){

        figura_rec.strokeStyle = arreglo_color[index_color];
        index_color++;
        
        var x = list_figuras[num_generaciones-1][i][0][0];
        var y = list_figuras[num_generaciones-1][i][0][1];
        var rec_width = list_figuras[num_generaciones-1][i][0][2] - x;
        var rec_height = list_figuras[num_generaciones-1][i][0][3] - y;

        figura_rec.strokeRect(x,y,rec_width,rec_height);  
    }

}

function Print_circulo(list_figuras, num_generaciones){         // Se imprimen los mejores 3 de la generacion
    /*
        Para cada particula se le asigna una tarjeta el cual se le
        dan los valores de puntuacion que obtuvo y las coordenadas 
        que le pretenecen.
        Cada particula se le diferencia con un color en particular
    */
    
    let Puntuacion_1 = document.getElementById('Puntuacion-1');
    let Coordenadas_1 = document.getElementById('Coordenadas-1');
    let Puntuacion_2 = document.getElementById('Puntuacion-2');
    let Coordenadas_2 = document.getElementById('Coordenadas-2');
    let Puntuacion_3 = document.getElementById('Puntuacion-3');
    let Coordenadas_3 = document.getElementById('Coordenadas-3');

    Puntuacion_1.innerHTML = '';
    Puntuacion_2.innerHTML = '';
    Puntuacion_3.innerHTML = '';

    Coordenadas_1.innerHTML = '';
    Coordenadas_2.innerHTML = '';
    Coordenadas_3.innerHTML = '';

    Puntuacion_1.innerHTML = list_figuras[num_generaciones-1][0][1].toFixed(2);
    Puntuacion_2.innerHTML = list_figuras[num_generaciones-1][1][1].toFixed(2);
    Puntuacion_3.innerHTML = list_figuras[num_generaciones-1][2][1].toFixed(2);

    Coordenadas_1.innerHTML = "[ "+list_figuras[num_generaciones-1][0][0][0].toFixed(2) +", "
                                +list_figuras[num_generaciones-1][0][0][1].toFixed(2)+", "
                                +list_figuras[num_generaciones-1][0][0][2].toFixed(2)+" ]";

    Coordenadas_2.innerHTML = "[ "+list_figuras[num_generaciones-1][1][0][0].toFixed(2) +", "
                                +list_figuras[num_generaciones-1][1][0][1].toFixed(2)+", "
                                +list_figuras[num_generaciones-1][1][0][2].toFixed(2)+" ]";

    Coordenadas_3.innerHTML = "[ "+list_figuras[num_generaciones-1][2][0][0].toFixed(2) +", "
                                +list_figuras[num_generaciones-1][2][0][1].toFixed(2)+", "
                                +list_figuras[num_generaciones-1][2][0][2].toFixed(2)+" ]";
    
    let arreglo_color = ['#076296','#DE6121','#7C1F7C'];
    let index_color = 0;

    var figura_cir = canvas.getContext('2d');
   
    for(let i=0; i<3; i++){
        
        figura_cir.strokeStyle = arreglo_color[index_color];
        index_color++;
        
        let x = list_figuras[num_generaciones-1][i][0][0];
        let y = list_figuras[num_generaciones-1][i][0][1];
        let r = Math.abs(list_figuras[num_generaciones-1][i][0][2]);

        figura_cir.beginPath();
        figura_cir.arc(x ,y, r, 0, Math.PI*2);
        figura_cir.stroke();
    }
}



btn_simulacion.addEventListener('click', ()=> {
    /*
        Una vez hecho click en el boton se inicia la simulacion del algoritmo
        y se imprimen las mejores particulas de la poblacion en
        la ultima generacion
    */

    var tam_poblacion = document.getElementById('tam-poblacion').value;
    var num_generaciones = document.getElementById('num_generaciones').value;
    var ratio_1 = document.getElementById('ratio-1').value;
    var ratio_2 = document.getElementById('ratio-2').value;

    var Datos_simulacion = document.getElementById('Datos-simulacion');
    Datos_simulacion.style.display = 'grid';


    pso_alg = new PSO(tam_poblacion,num_generaciones,figura_inicial,((alto+ancho)/2));                   // Constructor de PSO
    pso_alg.run_pso(ale.rangoPos,ale.rangoNeg,figura_usuario.getArea(),ratio_1,ratio_2);    // Correr algoritmo

    console.log(pso_alg.three_best_in_generation);

    var select_generaciones = document.getElementById('select-generacion');
    for(let i=0; i<num_generaciones; i++){
        select_generaciones.options[i+1] = new Option(i+1,i+1);
    }

    if(figura_inicial == 'r') {
        Print_rectangulo(pso_alg.three_best_in_generation, num_generaciones);
    }else{
        Print_circulo(pso_alg.three_best_in_generation, num_generaciones);
    }
    
});



var boton_limpiar = document.getElementById('btn-limpiar');

boton_limpiar.addEventListener('click', () => {         // Se limpian todos los campos para poder ingresar uno nuevo

    let Datos_simulacion = document.getElementById('Datos-simulacion');
    let input = document.querySelectorAll('input.form-control');
    for(let i=0; i<input.length; i++){
        input[i].value = "";
    }
    canvas.width = canvas.width;    
    Datos_simulacion.style.display = 'none';
});


var select_generaciones = document.getElementById('select-generacion');

select_generaciones.addEventListener('change', () => {
    /*
        Una vez ingresado el numero de generacion que se quiera saber
        este lo dibuja y borra los anteriores.
    */

    let num_generacion = select_generaciones.options[select_generaciones.selectedIndex].text;
    let lista_generaciones = pso_alg.three_best_in_generation;
 
    canvas.width = canvas.width;

    Print_Aleatorios(ale);

    if(figura_inicial == 'r'){
        Print_Ventana_Rec();
        Print_rectangulo(lista_generaciones, num_generacion);
    }
    else{
        Print_Ventana_Circ();
        Print_circulo(lista_generaciones,num_generacion);
    }
        
    
});