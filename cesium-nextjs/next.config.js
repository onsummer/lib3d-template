const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.join(
                __dirname,
                'node_modules/cesium/Build/Cesium/Workers'
              ),
              to: '../public/Cesium/Workers',
            },
            {
              from: path.join(
                __dirname,
                'node_modules/cesium/Build/Cesium/ThirdParty'
              ),
              to: '../public/Cesium/ThirdParty',
            },
            {
              from: path.join(
                __dirname,
                'node_modules/cesium/Build/Cesium/Assets'
              ),
              to: '../public/Cesium/Assets',
            },
            {
              from: path.join(
                __dirname,
                'node_modules/cesium/Build/Cesium/Widgets'
              ),
              to: '../public/Cesium/Widgets',
            },
          ],
        })
      )
    }
    config.plugins.push(
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./Cesium/'),
      })
    )
    config.resolve.exportsFields = []

    return config
  },
  experimental: {
    urlImports: ['http://cdn.staticfile.org/cesium/1.87.1/']
  }
}
