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
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'hw2_Zhan',
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
                    plugins: [
                        [
                            '@babel/plugin-proposal-class-properties',
                            {loose: true},
                        ]
                    ],
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'inline-source-map',
};