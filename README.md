# AnalisisDeAlgoritmos-Proyecto

## Creado por:
- Benítez Morales Manuel Emilio (ManBenit)
- Hernández López Ángel Zait (Zait06)
- Tellez Perez Juan Manuel (juanM20)

## Información general
Este es un proyecto escolar, el cuál, consiste en un algoritmo evolutivo que tiene como objetivo aprender algunas figuras, los cuales son:
- Rectangulo
- Circulo

El algoritmo evolutivo utilizado fue Particle Swarm Optimization (PSO), que es un método adaptativo que utiliza agentes o partículas que se mueven a través del espacio de búsqueda utilizando los principios de evaluación, comparación e imitación.

## Funcionamiento

El proyecto le solicitará al usuario elegir una figura, dependiendo la figura, este le lanzará campos extras que indican las coordenadas de la figura.

En el caso del rectángulo se necesitan ingresar valores de:
- <img src="https://latex.codecogs.com/gif.latex?x_1<x_2"/>
- <img src="https://latex.codecogs.com/gif.latex?y_1>y_2"/>

Y para todas las coordenadans deben ser valores reales positivos; para los valores aleatorios, solo se solicita la cantidad de puntos que se quieren para ayudar al algoritmo a aprender. Una vez ingresado estos valores, se le da click en aceptar y se mostrarán las coordenadas aleatorias y la figura en la parte de Simulación.

Despues de esto, se debe configurar el algoritmo evolutivo, el cual pedirá:
- Tamaño de la población (entero positivo)
- Numero de generaciones (entero positivo)
- Ratio de aprendizaje 1 (valor entre 0.1 y 0.9)
- Ratio de aprendizaje 2 (valor entre 0.1 y 0.9)

Se da click en comenzar simulación y dibujará las figuras que corresponden a las partículas con diferentes colores, además se puede manipular para observar las mejores partículas en cada generación, además se pueden ver los puntajes/aptitudes de las mejores partículas en la epoca seleccionada.

Para ingresar una nueva figura o bien modificar los datos cuales sean, se da click en el boton Limpiar para poder ingresar de nuevo los datos.

Para probar en funcionamiento puede visitar: [Proyecto Aprendizaje Evolutivo](https://zait06.github.io/AnalisisDeAlgoritmos-Proyecto/)

## Modulos utilizados:

- WebPakc:
    * npm i webpack
    * npm i webpack-cli
    * npm i webpack-dev-server

- HTML plugin:
    * npm i html-webpack-plugin

- Styles loader:
    * npm i css-loader style-loader
    * npm i node-sass sass-loader
    * npm i mini-css-extract-plugin
    * npm i autoprefixer
    * npm i file-loader
    * npm i postcss-loader
    * npm i rimraf
	
- Numjs:
	* npm i windows-build-tools (Ejecutar como administrador)
	* npm i debug			(No se si es necesario)
	* npm i @aas395/numjs

Si es que salen errores: error from chokidar y/o error:ENOSPC; será necesario ejecutar:
- echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
- sysctl --system
- npm i chokidar (si es que sigue el error)