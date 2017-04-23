const path = require('path');

const conf = {
  entry: "./app/components/Main.js",
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
            presets: ['react', 'es2015']
          }
        }
      }
    ]
  }
};

module.exports = conf;