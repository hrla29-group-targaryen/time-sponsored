const path = require("path");
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: [
    // "core-js/modules/es.promise",
    // "core-js/modules/es.array.iterator",
    path.resolve(__dirname, "./client/")
    ],
  output: {
      path: path.resolve(__dirname, "./static"),
      filename: "bundle.js"
    },
  // devServer:{
  //   contentBase: './static',
  //   port: 3005
  // },
	module: {
		rules: [{
        test: /\.js[x]?/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
         use:['style-loader','css-loader']
      }]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
  plugins: [
    new CompressionPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css|html|svg)$/,
    threshold: 8192,
    minRatio: 0.8
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    // new BundleAnalyzerPlugin()
  ]
}