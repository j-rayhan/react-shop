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
  watch: true,
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['react','es2015','stage-1']
        }
      }
    ]
  }
}
