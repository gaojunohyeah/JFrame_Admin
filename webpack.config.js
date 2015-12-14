/**
 * Created by gaojun on 15/12/11.
 */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var sep = require('path').sep;

module.exports = {
  entry: [
    "./public/js/app.js",
    "./public/js/vendor.js",
    "./public/css/main.scss"
  ],
  output: {
    path: __dirname + "/public/build",
    filename: "app.js",
    publicPath: "/public/build"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
      { test: new RegExp('node_modules' + sep + 'admin-config' + sep + '.*\\.jsx?$'), loader: 'babel' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    })
  ]
};
