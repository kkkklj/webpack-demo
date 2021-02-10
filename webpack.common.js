const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//动态生成html，里面的js引用也会动态变化
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//清除dist

module.exports = {
  entry: {
    app:'./src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],

  module:{
    rules:[//加载loader（webpack认识的module都是js的，需要loader来翻译不是js的）
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  optimization: {//tree shaking
    usedExports: true,
  },
 
};