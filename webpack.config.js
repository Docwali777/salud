const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            "presets": ['es2015', 'react']
          }
        },
        { test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)$/,
          use: [
            {
              loader: 'image-webpack-loader',
              options: {limit: 100000}
            },
            {
              loader: 'url-loader',
            options: {limit: 100000}
          }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      inline: true,
      port: 3000
    }
  }
