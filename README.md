### File Loaders

Let's say you have a javascript file in which want to import an image from `/assets/images` folder, like this:

```javascript
import webpack_icon from "../assets/images/webpack.png";
```
Without any extra configuration, the Webpack wouldn't know how to compile this code, because the type of `webpack_icon` is unknown. Therefore, if you run `webpack` in terminal, you will get an error. To solve this, you'll need to install `file-loader` 

```shell
$ npm install file-loader --save-dev
```
Then add the loader to your `webpack` config. For example:

```javascript
{
    test: /\.(png|jpg)$/,
    use: {
        loader: 'file-loader',
        options: {
            outputPath: 'assets/'
        }
    }
}
```
Now run `webpack` again, The Webpack will generate a png file inside the `dist/assets/` folder. By default the filename is the MD5 hash code of the content. 

### CSS/SASS Loaders

Similar to compiling images, To compile CSS code in javascript, you need to install css loaders

```shell
$ npm install css-loader style-loader --save-dev
```

The `css-loader` will interpret `@import` and resolve it in `bundle.js`. The `style-loader` will add `<style>` tag to gernerated HTML files.Then add loaders to `webpack` config files：

```javascript
{
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
}
```

We can also use sass loader to compile sass code

```shell
$ npm install sass-loader node-sass
```

### Babel laoder

Babel loader allows transpiling JavaScript files using Babel which is probably the most popular loader in Webpack. To add babel loader you need to install

```javascript
{
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
        plugins: ["transform-class-properties"]
        }
    }
}
```

## License

The project is available under the MIT license. See the LICENSE file for more info.
