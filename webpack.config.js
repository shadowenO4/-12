const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // Set to 'production' for production builds
  entry: './src/client/index.js', // Entry point for the application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
    libraryTarget: 'var', // Add libraryTarget
    library: 'Client' // Add library
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader',   // Translates CSS into CommonJS
          'sass-loader'   // Compiles Sass to CSS
        ],
      },
    ],
  },
  // Additional configurations (loaders, plugins) can be added here
};
