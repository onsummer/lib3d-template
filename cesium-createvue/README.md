# 说明

本示例为 `create-vue` 这个轻量级脚手架创建的 vue3 + ts + vue-router + vuex 的简易项目，提供了非 CDN 的 CesiumJS 简易模板。

# 依赖安装与项目启动

建议使用 `yarn` 或 `pnpm` 安装并管理依赖。

``` sh
pnpm install

# or
yarn
```

随后即可启动

``` sh
pnpm dev
```

# 场景组件

场景组件位于 `src/components/CesiumScene.vue`，组件挂载时用 cube 例子作演示，并将 scene 对象提交至 Vuex.
