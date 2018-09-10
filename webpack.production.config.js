const path = require('path');
const UgliyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index1: './src/index1.js',
    index2: './src/index2.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.[contenthash].js',
    publicPath: ''
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      automaticNameDelimiter: '_'
    }
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
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
    new UgliyJSPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].style.[contenthash].css'
    }),
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      filename: 'index-1.html',
      template: './index.html',
      chunks: ['index1']
    }),
    new HtmlWebpackPlugin({
      filename: 'index-2.html',
      template: './index.html',
      chunks: ['index2']
    })
  ]
};
