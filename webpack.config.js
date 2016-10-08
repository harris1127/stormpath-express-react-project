/**
 * This looks in our src folder and packages all the files and scripts together
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
    }

    ]
  }
};