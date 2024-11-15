const path = require('path');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    // assetModuleFilename: 'abc.jpg',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 100,
          },
        },
        generator: {
          filename: '[name]_[hash:8][ext]',
        },
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '电商项目',
      template: './index.html',
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      codewhy: "'why'",
      counter: "'123'",
    }),
  ],
  resolve: {
    extensions: ['.js', 'json', '.vue', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  devServer: {
    hot: true, // 默认为 true
    host: '0.0.0.0', // 监听当前网段下的 8080
    port: 8888, // 配置端口
  },
};
