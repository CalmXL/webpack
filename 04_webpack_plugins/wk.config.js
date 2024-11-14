const path = require('path');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
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
        // 最新版本不需要借助 loader， 只需要配置 type: 'assets'
        test: /\.(png|jpe?g|svg|gif)$/,
        // 打包两张图片，并且将自己的图片的地址设置到 img/bg
        // 缺点：多图片加载网络请求增加
        // type: 'asset/resource',

        // 将我们的图片转成 base64 编码，将编码后的源码放入打包后的 js 中
        // 缺点: 造成 js 文件非常大，下载 js 文件本身消耗时间长，造成 js 代码的下载和解析执行时间过长
        // type: 'asset/inline',

        // 3. 合理的规范
        // 3.1 对于小一点的图片可以 装成 base64,
        // 3.2 对于大一点的图片单独的图片打包，形成 url 地址，单独的请求
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 100,
          },
        },
        generator: {
          //  使用占位符，指向图片名称
          // 增加 hash， 防止图片重名
          filename: '[name]_[hash:8][ext]',
        },
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // plugins: [
              //   '@babel/plugin-transform-arrow-functions',
              //   '@babel/plugin-transform-block-scoping',
              // ],
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
  plugins: [new VueLoaderPlugin(), new CleanWebpackPlugin()],
  resolve: {
    // 添加拓展后缀名
    extensions: ['.js', 'json', '.vue', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
};
