// CommonJS
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'bundle.js',
        // после добавления HtmlWebpackPlugin пришлось закомментировать эту строчку,
        // т.к. в итоговой сборке с файлом index.html в папке build указывался
        // неправильный путь к файлу bundle.js
        // publicPath: '/static/build/',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'hw1_Zhan',
        template: './src/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/env',
                        [
                            '@babel/preset-react',
                            {
                                runtime: 'automatic',
                            },
                        ],
                    ],
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};