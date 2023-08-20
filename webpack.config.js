const path = require('node:path');

module.exports = {
  mode: 'production',//development,prodaction
  entry: './src/JS/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'all.js',
  },
  watch: true,
  devtool:"source-map",
   module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  
  
};