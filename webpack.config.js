const path = require('path');
const HTMLWebpackPlagin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'

    },

    plugins: [
        new HTMLWebpackPlagin({
            template: './js/index.html',
            filename: 'main.html'
        }),

        new MiniCssExtractPlugin()
    ]
}