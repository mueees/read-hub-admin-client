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
                exclude: [
                    helpers.root('node_modules'),
                    helpers.root('src/vendor/')
                ],
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
                test: /\.(svg|jpg|png|gif|ttf|eot|woff|woff2)$/,
                loader: 'file?name=[path][name].[ext]'
            },

            // just for tinymce
            {
                test: require.resolve('tinymce/tinymce'),
                loaders: [
                    'imports?this=>window',
                    'exports?window.tinymce'
                ]
            },
            {
                test: /tinymce\/(themes|plugins)\//,
                loaders: [
                    'imports?this=>window'
                ]
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