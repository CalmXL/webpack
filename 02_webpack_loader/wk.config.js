const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        // 告诉 webpack 匹配什么文件
        test: /\.css$/,
        use: [
          // use 中的多个 loader 顺序从后往前
          // {
          //   loader: 'style-loader',
          // },
          // {
          //   loader: 'css-loader',
          // },
          // 简写: loader 只有一个
          // 1. loader: 'css-loader'
          // 多个 loader ['style-loader', 'css-loader']
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
};
