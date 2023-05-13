const MainConfig = require('./config/webpack.main.config');
const RendererConfig = require('./config/webpack.renderer.config');
const PreloadConfig = require('./config/webpack.preload.config');

module.exports = [MainConfig, RendererConfig, PreloadConfig]
