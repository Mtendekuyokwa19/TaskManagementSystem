const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    Dom:{
      import:'./src/Dom.js',
      dependOn:'shared'
    },
    shared: 'date-fns',
   },
   optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mtende Tasks',
    }),
  ],
  output: {
    filename: '[name].task.js',
    path: path.resolve(__dirname, 'dist'),
   
    clean:true
  },

  devtool:'inline-source-map',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

 
 
};