var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: [
    '../src/js/app.js'
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
  },
  stats: {
    // Configure the console output
    errorDetails: true, //this does show errors
    colors: false,
    modules: true,
    reasons: true
  }
};