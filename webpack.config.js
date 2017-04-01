const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/renderDOM.jsx',
    tachyons: 'tachyons/css/tachyons.css',
    index: './src/styles/index.css'
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};
