var nodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/ },
      { test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/ },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
};
