const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'eval-source-map',
  /**
   * 不生成source-map
   * false
   * none => production
   * eval => development
   *
   * 生成 source-map
   * source-map => production
   *
   * 不常见的值
   * eval-source-map: 添加到 eval 后面
   * inline-source-map: 添加到文件的后面
   * cheap-source-map: 低开销，更加高效
   *
   */
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  plugins: [new CleanWebpackPlugin()],
};
