const path = require('path');
const express = require('express');
const config = require('./webpack.config');
const webpack = require('webpack');
const compiler = webpack(config);
const webpackMiddleware = require("webpack-dev-middleware");

const app = express();

app.use(webpackMiddleware(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/:path', function (req, res) {
  res.sendFile(path.join(__dirname, './public/' + req.params.path));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
