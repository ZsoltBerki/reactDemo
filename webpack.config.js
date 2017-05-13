const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const conf = {
  entry: "./app/Main.js",
  output: {
    path: "/",
    filename: 'app.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_conponents)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }, {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", 'sass-loader']
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};

module.exports = conf;