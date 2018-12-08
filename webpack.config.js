const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

var fileNumber = '005-Longest Palindromic Substring.js';
const APP_FILE = path.resolve(__dirname, './src/'+ fileNumber) 

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      APP_FILE
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, './'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './debug.html',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase:path.resolve(__dirname, './dist'),
    port: 9000,
    hot:true,
    open:true
  }
}