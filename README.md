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

Para ver el proyecto en funcionamiento puede visitar: [Proyecto Aprendizaje Evolutivo](https://zait06.github.io/AnalisisDeAlgoritmos-Proyecto/)

El proyecto le solicitará al usuario elegir una figura, dependiendo la figura, este le lanzará campos extras que indican las coordenadas de la figura.

En el caso del rectángulo se necesitan ingresar valores de  <img src="https://latex.codecogs.com/gif.latex?x_1 < x_2"" />  y  <img src="https://latex.codecogs.com/gif.latex?y_1 > y_2"" />

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