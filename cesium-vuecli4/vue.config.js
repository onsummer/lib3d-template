const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  lintOnSave: false,
  configureWebpack: (config) => {
    config.module.rules.forEach(v => {
      if (v.use) {
        const idx = v.use.findIndex(w => w.loader.includes('thread-loader'))
        if (idx !== -1) v.use.splice(idx, 1)
      }
    });
    config.amd = { ...config.amd, toUrlUndefined: true };
    config.plugins.push(
      new DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./Cesium/'),
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(
              __dirname,
              'node_modules/cesium/Build/Cesium/Workers'
            ),
            to: './Cesium/Workers',
          },
          {
            from: path.join(
              __dirname,
              'node_modules/cesium/Build/Cesium/ThirdParty'
            ),
            to: './Cesium/ThirdParty',
          },
          {
            from: path.join(
              __dirname,
              'node_modules/cesium/Build/Cesium/Assets'
            ),
            to: './Cesium/Assets',
          },
          {
            from: path.join(
              __dirname,
              'node_modules/cesium/Build/Cesium/Widgets'
            ),
            to: './Cesium/Widgets',
          },
        ],
      })
    );
    //#region 解决 Webpack4 打包 CesiumWorker 的问题
    config.module.rules.push({
      test: /\.js$/,
      use: { loader: require.resolve('@open-wc/webpack-import-meta-loader') }
    });
    //#endregion
    //#region 解决 Webpack 打包 Cesium 在控制台报警告的问题
    config.module.unknownContextRegExp = /^('|')\.\/.*?\1$/;
    config.module.unknownContextCritical = false
    //#endregion
  },
};
