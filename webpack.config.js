module.exports = {
  devtool: 'sourcemaps',
  entry: './src/main.js',
  output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss?$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
