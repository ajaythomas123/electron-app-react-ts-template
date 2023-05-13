const path = require("path");
const { merge } = require("webpack-merge");
const BaseConfig = require("./webpack.base.config.js");

module.exports = merge(BaseConfig, {
  entry: {
    preload: path.join(__dirname, "../src/preload.ts"),
  },
  target: 'electron-preload',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
  },
});
