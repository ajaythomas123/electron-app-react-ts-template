const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const BaseConfig = require("./webpack.base.config.js");

module.exports = merge(BaseConfig, {
  entry: {
    renderer: path.join(__dirname, "../src/renderer.tsx"),
  },
  target: 'electron-renderer',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]-[hash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: "body",
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
});
