# AnalisisDeAlgoritmos-Proyecto

Este es un proyecto escolar, el cuál, consiste en un algoritmo evolutivo que tiene como objetivo aprender algunas figuras, los cuales son:
- Rectangulo
- Circulo
- Marcos

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