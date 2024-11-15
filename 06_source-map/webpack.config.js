const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
};
