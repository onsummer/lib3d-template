import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  mfsu: {}, // 会开启 webpack5
  workerLoader: {},
  
  //#region 不打包 Cesium，使用 CDN 引入
  externals: {
    cesium: 'window.Cesium'
  },
  scripts: [
    // `http://cdn.staticfile.org/cesium/1.87.1/Cesium.js`, // 未压缩版本
    `http://cdn.staticfile.org/cesium/1.87.1/Cesium.min.js` // 使用已压缩版本
  ],
  //#endregion

  //#region 若使用 webpack5 打包 cesium，则需要复制 Cesium 三大金刚目录
  /*
  copy: [
    {
      from: './node_modules/cesium/Build/CesiumUnminified/Assets/',
      to: 'Assets'
    },
    {
      from: './node_modules/cesium/Build/CesiumUnminified/Workers/',
      to: 'Workers'
    },
    {
      from: './node_modules/cesium/Build/CesiumUnminified/Widgets/',
      to: 'Widgets'
    }
  ],
  */
  //#endregion

  //#region 关于 cesium 公共的 css，可以从 CDN 导入，也可以从 copy 的 Widgets 目录中导入
  links: [
    /*
    // 从 copy 的 Widgets 目录中导入，要配置 copy
    { rel: 'stylesheet', href: './Widgets/widgets.css' }, 
    */

    // 从 cdn 导入
    { rel: 'stylesheet', href: 'http://cdn.staticfile.org/cesium/1.87.1/Widgets/widgets.css' }, 
  ]
  //#endregion
});
