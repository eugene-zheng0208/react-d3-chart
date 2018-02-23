const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build",
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    stats: "errors-only",
    overlay: {
      errors: true,
      warnings: true
    }
  }
};
