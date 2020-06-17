const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './src/app.js',      // Archivo que vamos a empaquetar
    output: {
        path: __dirname + "/public",     // dirección de salida __dirname es la constante a una direccion absoluta
        filename: "main.js"             // Nombre del archivo empaquetado
    },
    devServer:{
        port:1234
    },
    module:{
        rules:[
            {
                test: /\.(sa|sc|c)ss$/,
                use:[
                    {loader:MiniCssExtractPlugin.loader},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'styles.css'
        })
    ]
}