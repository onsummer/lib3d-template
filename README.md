# 项目说明

此项目包括了 ThreeJS、CesiumJS 在现代常用前端框架 Vue3、Vue2、React17+ 以及其打包环境、脚手架工具中的初始化项目，可作为模板使用。

TODO：后续会使用 CDN 进行打包加速。

✅**所有案例全部使用 TypeScript。**



## Vue 系列说明

- create-vue：是一个比较新的轻量级脚手架工具，能帮你快速搭建起 vite 为打包环境的 vue3 项目，通过命令行进行初始化项目，初始化时允许增加 vue 生态的一些库，例如 vue-router、vuex 等，与直接用 vite 的 vue3 模板开项目再手动配置需要的库是一样的；
- vite 模板：使用到了 vue-ts 模板，创建出来的项目非常简单，只包含 vue3 本身和 typescript，需要任何其他库都要自己添加；
- @vue/cli：cli 使用最新版，创建 vue3 的项目。@vue/cli 比较成熟，基于 webpack 这个工具进行开发和打包，配置非常完备，本质上是一个丰富的脚手架工具，仍不具备约定式配置等框架级功能；
- nuxt2/3：使用 vue 进行 web 前端开发的框架，版本 2 比较成熟，主要使用 webpack 进行开发与打包，版本 3 比较新，默认使用 vite 进行开发与打包，支持 SSR、约定式配置，省去很多配置工作，只需在其提供的项目目录中进行约定式开发即可完成一个健壮的 web 前端程序。



## React 系列说明

- vite 模板：使用到了 react-ts 模板，创建出来的项目只包含 react、react-dom 和 typescript，状态管理、路由等完全没有，也因为简单所以看起来很方便；
- next.js & umi.js：与 nuxt2/3 是同概念的东西，两个开发框架，目前 next.js 和 umi.js 的最新稳定版均基于 webpack 来完成开发服务器伺服和打包，SSR、状态管理等配置一应俱全；
- create-react-app：它的作用很像脚手架，但是比脚手架还弱，省去自己配置 webpack 和 react、react-dom 的过程，简单开启一个基于 webpack 的项目。



## 共同说明

无论是 ThreeJS，还是 CesiumJS，都以封装一个组件的方法，展示如何在这些框架、库、脚手架项目中使用这两个三维库。



# 1. Vue + ThreeJS

在初始化项目完成后，统一安装命令：

``` sh
pnpm add three && pnpm add @types/three -D
```

你也可以使用等价的 npm 或 yarn 命令。



## ① create-vue

创建项目：

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



# 2. Vue + CesiumJS

## ① create-vue

## ② vite with vue ts template

## ③ @vue/cli with vue3

## ④ nuxt3

## ⑤ nuxt2



# 3. React + ThreeJS

## ① vite with react ts template

## ② next.js

## ③ umi.js

## ④ create-react-app



# 3. React + CesiumJS

## ① vite with react ts template

创建项目：

``` sh
# prefer
pnpm init vite

# or u can use
npm init vite
yarn create vite
```

选择其中 react-ts 模板即可。

## ② next.js

创建项目：

``` sh

```



## ③ umi.js

创建项目：

``` sh
```





## ④ create-react-app

创建项目：

``` sh
pnpx create-react-app
```

