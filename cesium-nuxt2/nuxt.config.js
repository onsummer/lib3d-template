import CopyWebpackPlugin from 'copy-webpack-plugin'
import { DefinePlugin } from 'webpack'
import path from 'path'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cesium-nuxt2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
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
      }),
      new DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./_nuxt/Cesium/'),
      }),
    ],
    extend(config) {
      //#region 解决 Webpack4 打包 CesiumWorker 的问题
      config.module.rules.push({
        test: /\.js$/,
        use: { loader: require.resolve('@open-wc/webpack-import-meta-loader') },
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
    }
  }
}
