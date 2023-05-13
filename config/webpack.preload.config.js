const path = require("path");
const { merge } = require("webpack-merge");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const BaseConfig = require("./webpack.base.config.js");

module.exports = merge(BaseConfig, {
  entry: {
    preload: path.join(__dirname, "../src/preload.ts"),
  },
  target: 'electron-preload',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]-[hash].js",
  },
  plugins: [
    new WebpackManifestPlugin({ fileName: 'manifest.preload.json' }),
  ],
});
