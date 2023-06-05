const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  //進入點
  entry: './src/js/main.js',
  // 輸出點，輸出資料夾、輸出檔案名稱、清除資料
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].js',
    clean: true,
  },
  // 模組規則
  module: {
    rules: [
      //處理 HTML 文件
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      // 處理 CSS、SCSS 文件
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // 處理圖檔
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    // 使用 HtmlWebpackPlugin 指定 html 樣板位置、輸出位置
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/price.html',
      filename: './price.html',
    }),
    // 使用 MiniCssExtractPlugin 將 CSS 文件提取出來!
    new MiniCssExtractPlugin({
      filename: './css/all.css',
    }),
  ],
  //開發服務器，指定狀態位置，伺服器端口
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
};