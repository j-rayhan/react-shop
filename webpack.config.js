var path = require('path');

const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'public');
const SRC_DIR = path.resolve(__dirname, 'src');

console.log('BUILD_DIR', BUILD_DIR);
console.log('SRC_DIR', SRC_DIR);

module.exports = { 
  entry: {
    index: [SRC_DIR+'/index.js']
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve:{
      alias:{
    },
      extensions: ['.js','.jsx']
  },
  watch: true,
  module:{
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['react', 'es2015','stage-1']
            }
          }
        },
        {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      }
    ]
  }
}
