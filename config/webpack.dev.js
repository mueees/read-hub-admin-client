var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ],

    devServer: {
        historyApiFallback: true,
        noInfo: false,
        quiet: false,
        stats: {colors: true},

        proxy: [{
            path: '/api/*',
            target: {
                "host": /*"localhost",*/ "hub.mue.in.ua",
                "protocol": 'http:',
                "port": /*20000*/  80
            },
            ignorePath: false,
            changeOrigin: true,
            secure: false
        }]
    }
});