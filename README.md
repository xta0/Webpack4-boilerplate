## Webpack4-boilerplate

This project was designed to demonstrate the basic usage of Webpack4. Topics includes:

### Code Compress

- uglifyjs-webpack-plugin
- mini-css-extract-plugin
- clean-webpack-plugin
- html-webpack-plugin
   

```javascript
{
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader']
}
plugins: [
    new UgliyJSPlugin(),
    new MiniCssExtractPlugin({
        filename: 'style.css'
    }),
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
        template: './index.html'
    })
]
```

## License

The project is available under the MIT license. See the LICENSE file for more info.
