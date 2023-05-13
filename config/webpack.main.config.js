const path = require("path");
const { merge } = require("webpack-merge");
const BaseConfig = require("./webpack.base.config.js");

module.exports = merge(BaseConfig, {
  entry: {
    main: path.join(__dirname, "../src/main.ts"),
  },
  target: "electron-main",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]-[hash].js",
  },
});
