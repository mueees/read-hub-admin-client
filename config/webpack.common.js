'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    context: helpers.root('src'),

    entry: {
        app: './app',

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