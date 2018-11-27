var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['babel-polyfill','./src/index.jsx'],
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    limit: 25000,
                }
            },

            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                 }
            },

            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })],
    devServer: {
        historyApiFallback: true,
        https:false,
    },

    externals: {
        jquery: 'jQuery',
    }

}