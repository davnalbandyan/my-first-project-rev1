const path = require('node:path');

module.exports = {
  mode: 'development',//development,prodaction
  entry: './src/JS/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'all.js',
  },
  watch: true,
  devtool:"source-map"
};