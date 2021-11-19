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

进度表

| 项目          | 可显示 | 说明文档 | CDN化 |
| ------------- | ------ | -------- | ----- |
| create-vue    | ✅      | 50%      | NO    |
| vite2.x vue3  | ✅      | 50%      | NO    |
| @vue/cli vue3 | ✅      | 80%      | NO    |
| nuxt2         | ✅      | 80%      | NO    |
| nuxt3         | ✅      | 80%      | NO    |



在初始化项目完成后，统一安装命令：

``` sh
pnpm add three && pnpm add @types/three -D
```

你也可以使用等价的 npm 或 yarn 命令。



## ① create-vue

使用如下任意一条命令创建项目：

``` sh
pnpm init vue@next
pnpx create-vue@next

# or use your prefer package manager
npm init vue@next
npx create-vue@next
yarn create vue@next
```

### 功能的选用

| 名称       | 状态           |
| ---------- | -------------- |
| vue-router | 已安装，未使用 |
| vuex       | 已安装，未使用 |



## ② vite with vue ts template

使用如下任意一条命令创建项目：

``` sh
# I prefer
pnpm init vite
# or
pnpx create-vite

# or u can use
npm init vite
npx create-vite
yarn create vite
```

之后安装依赖我选用 pnpm，此处选择 vue-ts 模板。

这个其实就是 ① 去掉了 vuex、vue-router 的简易版本。



## ③ @vue/cli with vue3

cli 版本是最新版的 4.x，创建项目时，版本是 4.5.15.

``` sh
# 确保你已经全局安装了 @vue/cli
vue --version
```

目前，推荐遵循官方文档的安装步骤，来安装 @vue/cli.

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
pnpx nuxi init three-nuxt3
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

使用如下任意一条命令创建项目（选用你喜欢的包管理器）：

``` sh
pnpm init nuxt-app three-nuxt2
pnpx create-nuxt-app three-nuxt2

# or
npm init nuxt-app three-nuxt2
npx create-nuxt-app three-nuxt2
yarn create nuxt-app three-nuxt2
```

但是安装依赖只能随着脚手架的提示文字来了，目前只有 yarn 或者 npm。

选择的配置有：

```
create-nuxt-app v3.7.1
✨  Generating Nuxt.js project in three-nuxt2
? Project name: cesium-nuxt2
? Programming language: TypeScript
? Package manager: Yarn
? UI framework: None
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: ESLint, Prettier, StyleLint
? Testing framework: None
? Rendering mode: Single Page App
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Continuous integration: None
? Version control system: Git
```

有需要的后期可以试试 SSR 模式



# 2. Vue + CesiumJS



进度表

| 项目          | 可显示 | 说明文档 | CDN化 |
| ------------- | ------ | -------- | ----- |
| create-vue    | ✅      | 50%      | NO    |
| vite2.x vue3  | ✅      | 50%      | NO    |
| @vue/cli vue3 | ✅      | 80%      | NO    |
| nuxt2         | ✅      | 80%      | NO    |
| nuxt3         | ✅      | 80%      | NO    |



## ① create-vue

项目命名为：`cesium-createvue`

使用如下任意一条命令创建项目：

``` sh
pnpm init vue@next
pnpx create-vue@next

# or use your prefer package manager
npm init vue@next
npx create-vue@next
yarn create vue@next
```

### 功能的选用

| 名称       | 状态           |
| ---------- | -------------- |
| vue-router | 已安装，未使用 |
| vuex       | 已安装，未使用 |



## ② vite with vue ts template

项目命名为：`cesium-vite-vuets-tpl`

使用如下任意一条命令创建项目：

``` sh
# I prefer
pnpm init vite
# or
pnpx create-vite

# or u can use
npm init vite
npx create-vite
yarn create vite
```

之后安装依赖我选用 pnpm，此处选择 vue-ts 模板。

这个其实就是 ① 去掉了 vuex、vue-router 的简易版本。



## ③ @vue/cli with vue3

cli 版本是最新版的 4.x，创建项目时，版本是 4.5.15.

``` sh
# 确保你已经全局安装了 @vue/cli
vue --version
```

目前，推荐遵循官方文档的安装步骤，来安装 @vue/cli.

创建项目：

``` sh
vue create cesium-vuecli4
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

### 踩坑点

若让 webpack 介入打包过程，根据报错来看，与 create-react-app 中遇到的问题是一样的，也需要对 webpack 进行配置。

但处理完相同的问题后，我尝试使用 build 进行打包，报 “Syntax Error: Thread Loader”问题，查资料后发现社区有人遇到过，是线程加载器的问题，仍需修改 webpack。

最后，一份能跑在 webpack4.x for @vue/cli4 的配置如下：

``` js
// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  /* ... */
  chainWebpack: (config) => {
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
  }
};
```

**切记，chainWebpack 若为函数，不要返回 config。**

有时候用 HTTP 服务器看打包后的成果，发现仍不能运行，检查 `CESIUM_BASE_URL` 即可发现 Cesium 的基本路径没配好，这一点需要根据环境变量来配置了。

### 参考

https://github.com/vuejs/vue-cli/issues/2171



## ④ nuxt3

nuxi 版本：0.10.1

nuxt 版本：v3.0.0-27287661.1e0e881

``` sh
npx nuxi init three-nuxt3
pnpx nuxi init three-nuxt3
```

nuxt3 目前（文档最后更新时：2021年11月19日）使用 pnpm@6.20 下载依赖无法正常运行，改用 yarn 或 npm 是可以的

``` sh
yarn

# or
npm install
```

### 踩坑点

让 vite 打包 cesium，仍然是静态文件的问题，开发时可以勉强用 node_modules 下的包来凑数，否则打包后四大金刚文件夹仍然是找不到的。

能尽量别让打包器打包 cesium 就不要走这条路。



## ⑤ nuxt2

create-nuxt-app 版本：

nuxt版本：

使用如下任意一条命令创建项目（选用你喜欢的包管理器）：

``` sh
pnpm init nuxt-app cesium-nuxt2
pnpx create-nuxt-app cesium-nuxt2

# or
npm init nuxt-app cesium-nuxt2
npx create-nuxt-app cesium-nuxt2
yarn create nuxt-app cesium-nuxt2
```

但是安装依赖只能随着脚手架的提示文字来了，目前只有 yarn 或者 npm。

选择的配置有：

```
create-nuxt-app v3.7.1
✨  Generating Nuxt.js project in cesium-nuxt2
? Project name: cesium-nuxt2
? Programming language: TypeScript
? Package manager: Yarn
? UI framework: None
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: ESLint, Prettier, StyleLint
? Testing framework: None
? Rendering mode: Single Page App
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Continuous integration: None
? Version control system: Git
```

有需要的后期可以试试 SSR 模式。

### 踩坑点

仍旧是 webpack4 的配置，在 `nuxt.config.js` 中，要对 build 进行扩展。

而且，与其他的工程不太一样的是，静态资源使用 `copy-webpack-plugin` 复制到的地方是 `./dist/_nuxt/` 目录，而不是 `./dist/` 目录，所以对 `CESIUM_BASE_URL` 的配置（即 `definePlugin`）需要小心。



# 3. React + ThreeJS



进度表

| 项目              | 可显示 | 说明文档 | CDN化 |
| ----------------- | ------ | -------- | ----- |
| vite2.x react17ts | ✅      | 50%      | NO    |
| next.js 12        | ✅      | 90%      | NO    |
| umi 3.5           | ✅      | 90%      | ✅     |
| cra 2.x webpack4  | ✅      | 70%      | NO    |



## ① vite with react ts template

创建项目：

``` sh
# prefer
pnpm init vite
pnpx create-vite

# or u can use
npm init vite
npx create-vite
yarn create vite
```

选择其中 react-ts 模板即可。



## ② next.js

请注意，使用 `npm init` 或 `pnpm init` 创建项目，经测试，`--ts` 及 `--typescript` 参数是无效的。

所以推荐用 `yarn create`、`npx`、`pnpx` 来创建项目。

创建项目：

``` sh
pnpx create-next-app --ts
```

也可以用其他的包管理器

``` sh
npx create-next-app --ts

# yarn
yarn create next-app --ts
```

若使用 `yarn create`、`pnpx`、`pnpm init` 创建项目，会在创建完项目后，自动调用 yarn 下载依赖；若使用 `npx`、`npm init`，会在创建完项目后，自动调用 npm 下载依赖。

为了保持统一，我使用 pnpm 重新下载了一遍依赖。



## ③ umi.js

umi.js 开项目要先建文件夹，然后在文件夹下初始化。

```  sh
mkdir three-umi
cd ./three-umi/

# 使用你喜欢的包管理器初始化项目

# -- pnpm --
pnpm init @umijs/umi-app
# or use pnpx
pnpx @umijs/create-umi-app

# -- yarn --
yarn create @umijs/umi-app

# -- npm or npx --
npx @umijs/create-umi-app
# or use npm@6.x
npm init @umijs/umi-app
```

随后就是安装依赖、安装 three 和 three 的类型提示库即可。



## ④ create-react-app

创建项目：

``` sh
pnpx create-react-app three-cra --template typescript

# use pnpm init
pnpm init react-app three-cra --template typescript
```

你也可以用其他包管理器的初始化功能：

``` sh
# use npm/npx
npm init react-app three-cra --template typescript
npx create-react-app three-cra --template typescript

# use yarn
yarn create react-app three-cra --template typescript
```

无论是上面哪一个命令创建的项目，都会使用 yarn 来安装依赖，除非显示指定参数 `--use-npm`，才会用 npm 安装。很遗憾，cra 目前还不支持 pnpm。

我为了统一，将 lock 文件忽略并重新使用 pnpm 安装依赖，你可以选择你喜欢的包管理器。



# 4. React + CesiumJS



进度表

| 项目              | 可显示 | 说明文档 | CDN化 |
| ----------------- | ------ | -------- | ----- |
| vite2.x react17ts | ✅      | 50%      | NO    |
| next.js 12        | ✅      | 90%      | NO    |
| umi 3.5           | ✅      | 90%      | ✅     |
| cra 2.x webpack4  | ✅      | 70%      | NO    |



## ① vite with react ts template

创建项目：

``` sh
# prefer
pnpm init vite
pnpx create-vite

# or u can use
npm init vite
npx create-vite
yarn create vite
```

选择其中 react-ts 模板即可。



## ② next.js

请注意，使用 `npm init` 或 `pnpm init` 创建项目，经测试，`--ts` 及 `--typescript` 参数是无效的。

所以推荐用 `yarn create`、`npx`、`pnpx` 来创建项目。

创建项目：

``` sh
pnpx create-next-app --ts
```

也可以用其他的包管理器

``` sh
# npx
npx create-next-app --ts

# yarn
yarn create next-app --ts
```

若使用 `yarn create`、`pnpx`、`pnpm init` 创建项目，会在创建完项目后，自动调用 yarn 下载依赖；若使用 `npx`、`npm init`，会在创建完项目后，自动调用 npm 下载依赖。

为了保持统一，我使用 pnpm 重新下载了一遍依赖。

next.js 中对 Cesium 的组件不能使用服务端渲染，有可能是我不会。

当前配置为让 webpack 打包，暂未引入 Cesium CDN，待后续增补。

### 踩坑点

- Cesium 场景组件使用动态导入，并禁用 ssr

``` ts
const CesiumScene = dynamic(() => import('../components/CesiumScene'), {
  ssr: false,
})
```

- 配置 next.config.js 使用 NodeJS 的 cmd 模块化，不能使用 ts，若使用 es 模块化，则改后缀 `.mjs`；对于 webpack 打包 cesium 的方式，要配置 `CopyWebpackPlugin`，把 `Widgets`、`Assets`、`ThirdParty`、`Workers` 四大目录复制到 public 目录下；尤其注意一点，`to` 的相对路径是 `./.next`，而不是 `./`（项目根目录）。

### 参考

https://github.com/willwill96/cesium-nextjs-example



## ③ umi.js

创建项目：

``` sh
mkdir cesium-umi
cd ./cesium-umi/

pnpm init @umijs/umi-app
# or use pnpx
pnpx @umijs/create-umi-app
```

如果你使用 yarn 或者 npx/npm，你可以这么做：

``` sh
# or use yarn
yarn create @umijs/umi-app
# or use npx
npx @umijs/create-umi-app
# or use npm@6.x
npm init @umijs/umi-app
```

会提示是否安装初始化项目用的包：

``` sh
Need to install the following packages:
  @umijs/create-umi-app
Ok to proceed? (y)
```

回车确认即可。

umi.js 3.x 的项目需要在工程文件夹内操作，cli 不会帮你创建新的文件夹。

### 踩坑点

Webpack 4 会在开发或打包时报 Cesium 的第三方依赖：Zip.js 打包错误，这个只需在 `.umirc.ts` 中开启 `webpack5` 即可。

开发时要配置 `.umirc.ts` 中的 `copy` 项，将 Cesium 的静态文件预先复制到 `public` 目录下，且要将

以上两个问题，可以一步到位，直接配置 CDN 免去 Cesium 的打包即可。

此示例项目使用了 CDN。



## ④ create-react-app

创建项目：

``` sh
pnpx create-react-app cesium-cra --template typescript

# use pnpm init
pnpm init react-app cesium-cra --template typescript
```

你也可以用其他包管理器的初始化功能：

``` sh
# use npm/npx
npm init react-app cesium-cra --template typescript
npx create-react-app cesium-cra --template typescript

# use yarn
yarn create react-app cesium-cra --template typescript
```

无论是上面哪一个命令创建的项目，都会使用 yarn 来安装依赖，除非显示指定参数 `--use-npm`，才会用 npm 安装。很遗憾，cra 目前还不支持 pnpm。

我为了统一，将 lock 文件忽略并重新使用 pnpm 安装依赖，你可以选择你喜欢的包管理器。

create-react-app 就没 umi.js 那么多接地气的配置了，我按 CDN 的方式配置。

### webpack4 引发的 Cesium Zip.js 依赖错误问题

Zip.js 用到了 WebWorker，而 cra 截至发稿前，react-scripts 似乎还在用 webpack4，只要切换成 webpack5 就没有这个问题了，因为 webpack5 内置了 WebWorker 的支持。

关于这个问题，官方龟速推进了一年还在摸鱼：https://github.com/facebook/create-react-app/issues/9994

可以自己替换掉 `package.json` 中 `scripts` 的 react-scripts，只需在 npmjs 官方网站上找找合适的包即可（至少在官方正式更新前只能这么干了）。

社区上有一个更好的解决方法：

https://github.com/gildas-lormeau/zip.js/discussions/258#discussioncomment-1360408

但是使用 `@craco/craco` 去修改 webpack 的配置的话，仍然是在操作 webpack4，要确保 `copy-webpack-plugin` 的版本是 6.x 才可以。
