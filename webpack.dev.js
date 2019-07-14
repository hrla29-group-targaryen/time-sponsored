const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devServer:{
    contentBase: './static',
    port: 3005
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ]
})


