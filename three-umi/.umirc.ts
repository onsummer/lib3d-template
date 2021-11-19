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
  
  //#region 不打包 Three，CDN 引入，减少约 500 KB 体积（Gzip 后减小至少130KB）
  externals: {
    three: 'window.THREE'
  },
  scripts: [
    // `https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.js`, // 未压缩版本
    `https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js` // 使用已压缩版本
  ],
  //#endregion
});
