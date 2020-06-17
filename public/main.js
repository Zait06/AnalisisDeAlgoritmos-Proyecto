// const Rectangulo = require('./Rectangulo.js');

function init(){
    var rec = new Rectangulo(5,25,20,10);
    console.log(rec.getArea());
}

window.onload = init;