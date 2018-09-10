## Single page application

For a single page applications, serve the dist foler as a static content folder

```javascript
output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/static/'
  },
```
Then setup web server's route path:

```javascript
app.get('/', function(req, res) {
  const pathTohtml = path.resolve(__dirname, '../dist/index.html');
  const content = fs.readFileSync(pathTohtml, 'utf-8');
  res.send(content);
});
app.use('/static', express.static(path.resolve(__dirname, '../dist')));
app.listen(3000);
```

## License

The project is available under the MIT license. See the LICENSE file for more info.
