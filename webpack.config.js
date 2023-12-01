const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    add: './src/add.js',
    check:'./src/check.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: '[name].task.js',
    path: path.resolve(__dirname, 'dist'),
   
    clean:true
  },

  devtool:'inline-source-map'
};