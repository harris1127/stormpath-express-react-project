
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(stormpath.init(app, {
  web: {
    produces: ['application/json']
  }
}));

app.get('../css/bootstrap.min.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/css/bootstrap.min.css'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

app.on('stormpath.ready', function () {
  app.listen(3000, 'localhost', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at http://localhost:3000');
  });
});