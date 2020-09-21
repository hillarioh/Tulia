const path = require('path');

module.exports = {
  mode: 'production',
   entry: path.join(__dirname, 'src', 'index.js'),
   output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname),           
   },
   module: {
       rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env']
          }
        },
      }
    ]
   }, 
   devtool: 'source-map',
   resolve: {
     extensions: ['.js','*']
   },
};