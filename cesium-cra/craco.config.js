const CopyWebpackPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')
const path = require('path')

module.exports = {
  webpack: {
    configure: (config) => {
      config.plugins.push(new CopyWebpackPlugin({
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
      }));
      config.plugins.push(new DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./Cesium/'),
      }));

      //#region 解决 Webpack4 打包 CesiumWorker 的问题
      config.module.rules.push({
        test: /\.js$/,
        use: { loader: require.resolve('@open-wc/webpack-import-meta-loader') }
      });
      //#endregion

      //#region 解决 Webpack 打包 Cesium 在控制台报警告的问题
      config.module['unknownContextRegExp'] = /^('|')\.\/.*?\1$/
      config.module['unknownContextCritical'] = false
      config.amd = {
        ...config.amd,
        toUrlUndefined: true
      }
      //#endregion

      return config;
    }
  }
}