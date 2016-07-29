'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    context: helpers.root('src'),

    entry: {
        app: './app',

        vendor: './vendor',

        // Set up an ES6-ish environment
        polyfill: 'babel-polyfill'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app']
        }),

        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    module: {
        loaders: [
            {
                loader: "babel",
                exclude: helpers.root('node_modules'),
                test: /\.js$/
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss/,
                include: helpers.root('src', 'app'),
                loaders: ['raw', 'sass']
            },
            {
                test: /\.(svg|jpg|png|ttf|eot|woff|woff2)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    }
};