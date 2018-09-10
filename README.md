## Multipage Applications

### Production Mode

Let's say your application has pages, `index1.js` and `index2.js`. To compile them individualy, you'll need to specify two entry points:

```javscript
entry: {
index1: './src/index1.js',
index2: './src/index2.js'
},
output: {
path: path.join(__dirname, 'dist'),
filename: '[name].bundle.[contenthash].js',
publicPath: ''
}
plugins:[
    new HtmlWebpackPlugin({
        filename: 'index-1.html',
        template: './index.html',
        chunks: ['index1']
        }),
    new HtmlWebpackPlugin({
        filename: 'index-2.html',
        template: './index.html',
        chunks: ['index2']
    })]
```

This will split production code into multiple files. 

Another common opitimization approch is to seperate the common js files from each js:

```javscript
mode: 'production',
optimization: {
    splitChunks: {
        chunks: 'all',
        minSize: 10000, //10kb
        automaticNameDelimiter: '_'
    }
}
```
Once each of your `.js` file exceeds the `10kb` limit, the Webpack will automaticlly seperate the redundent code into a new file. Below is the optimization results

```shell
                                                Asset       Size  Chunks             Chunk Names
                42552beea11702e41965f16202d2237f.png   49.9 KiB          [emitted]
vendors_index1_index2.bundle.7fbee8adf2034f127706.js   12.9 KiB       0  [emitted]  vendors_index1_index2
               index1.bundle.060d7c97f617c5dba95d.js   2.41 KiB       1  [emitted]  index1
               index2.bundle.1e6e1c9c9e53152cda23.js   1.97 KiB       2  [emitted]  index2
```

### Development

In the development envrionment, you only need to change the entry point

```javscript
entry: {
    index1: './src/index1.js',
    index2: './src/index2.js'
},
plugins:[
    new HtmlWebpackPlugin({
        filename: 'index-1.html',
        template: './index.html',
        chunks: ['index1']
        }),
    new HtmlWebpackPlugin({
        filename: 'index-2.html',
        template: './index.html',
        chunks: ['index2']
    })]
```

## License

The project is available under the MIT license. See the LICENSE file for more info.
