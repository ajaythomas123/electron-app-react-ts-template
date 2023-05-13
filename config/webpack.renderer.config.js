const path = require("path");
const { merge } = require("webpack-merge");
const BaseConfig = require("./webpack.base.config.js");

module.exports = merge(BaseConfig, {
  entry: {
    renderer: path.join(__dirname, "../src/renderer.tsx"),
  },
  target: 'electron-renderer',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
  },
});
