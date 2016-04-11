var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main.js',
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        //new ExtractTextPlugin("styles.css")
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src/styles'),
                loader: 'style!css!sass',
                //loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    }
};
