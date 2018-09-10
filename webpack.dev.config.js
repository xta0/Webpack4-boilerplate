const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index1: './src/index1.js',
    index2: './src/index2.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    index: 'index.html',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputpath: 'assets/'
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-class-properties']
          }
        }
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      filename: 'index1.html',
      chunks: ['index1'],
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'index2.html',
      chunks: ['index2'],
      template: './index.html'
    })
  ]
};
