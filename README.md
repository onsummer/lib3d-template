# 项目说明

此项目包括了 ThreeJS、CesiumJS 在现代常用前端框架 Vue3、Vue2、React17+ 以及其打包环境、脚手架工具中的初始化项目，可作为模板使用。

TODO：后续会使用 CDN 进行打包加速。

所有案例全部使用 TypeScript。



# 1. ThreeJS

在初始化项目完成后，统一安装命令：

``` sh
pnpm add three && pnpm add @types/three -D
```

你也可以使用等价的 npm 或 yarn 命令。



## ① create-vue

``` sh
pnpm init vue@next
# or
npm init vue@next
```

### 功能

| 名称       | 状态           |
| ---------- | -------------- |
| vue-router | 已安装，未使用 |
| vuex       | 已安装，未使用 |

## ② vite with vue ts template

``` sh
# prefer
pnpm init vite

# or u can use
npm init vite
yarn create vite
```

这个其实就是 ① 去掉了 vuex、vue-router 的简易版本。



## ③ @vue/cli with vue3

cli 版本是最新版的 4.x，创建项目时，版本是 4.5.15.

``` sh
# 确保你已经全局安装了 @vue/cli
vue --version # 
```

目前，推荐使用官方文档进行安装 @vue/cli.

创建项目：

``` sh
vue create three-vuecli4
```

选择的配置有：

| 名称              | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| vue 版本          | 3.x                                                          |
| ESLint + Prettier | 启用，只在 commit 时启动 Lint，用不到可以不加这个，配置文件在独立文件中 |
| 包管理器          | pnpm，你可以用 yarn、npm                                     |
| CSS 预处理器      | 启用，使用 Less，你也可以用 Sass/SCSS                        |
| Babel             | 启用                                                         |
| 组件命名风格      | 大驼峰                                                       |



## ④ nuxt3

nuxi 版本：0.10.1

nuxt 版本：3.0.0-27268729.5b8e10f

``` sh
npx nuxi init three-nuxt3
```

nuxt3 目前使用 pnpm@6.20 下载依赖无法正常运行，改用 yarn 或 npm 是可以的

``` sh
yarn

# or
npm install
```



## ⑤ nuxt2

create-nuxt-app 版本：

nuxt版本：

你可以用官方推荐的 yarn 来开项目，也可以用 pnpm

``` sh
yarn create nuxt-app three-nuxt2

# or
pnpm init nuxt-app three-nuxt2
npm init nuxt-app three-nuxt2
```

但是安装依赖只能随着脚手架的提示文字来了，目前只有 yarn 或者 npm。

选择的配置有：

| 配置名       | 说明                                     |
| ------------ | ---------------------------------------- |
| UI 框架      | 无，你可以选你自己喜欢的或者后期自己添加 |
| 包管理器     | yarn                                     |
| 测试框架     | 无                                       |
| 版本控制     | git                                      |
| 代码规范工具 | ESLint、Prettier 等，按需选择            |
| 渲染模式     | 单页应用（SPA）                          |

