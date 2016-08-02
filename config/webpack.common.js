'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    context: helpers.root('src'),

    entry: {
        vendor: './vendor',
        
        app: './app',

        // Set up an ES6-ish environment
        polyfill: 'babel-polyfill'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfill']
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
                test: /\.scss/,
                include: helpers.root('src'),
                loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
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