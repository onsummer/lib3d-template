import React, { useRef, useEffect } from 'react'
import {
  ArcGisMapServerImageryProvider,
  Viewer
} from 'cesium'

//#region 为 CESIUM_BASE_URL 补充定义
import './index.d'
/* 
  因为在 umi.js 项目中使用了 copy 配置，所以 `CESIUM_BASE_URL` 与其他项目略有不同
*/
// window.CESIUM_BASE_URL = './'
window.CESIUM_BASE_URL = 'http://cdn.staticfile.org/cesium/1.87.1/'
//#endregion

/* 
  不同的包管理器此 css 文件的路径不同
  若不在组件中导入，则需要在 .umirc.ts 中的 link 配置增加 widgets.css 的引用

  当前配置是从 public 下获取 cesium 的公共 css，配置在 `.umirc.ts > links` 项中。
*/
// import '../../../node_modules/.pnpm/cesium@1.87.1/node_modules/cesium/Build/CesiumUnminified/Widgets/widgets.css'
import './index.less'

let viewer: Viewer;
const CesiumScene = () => {
  const cesiumViewerDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    viewer = new Viewer(cesiumViewerDivRef.current as Element, {
      imageryProvider: new ArcGisMapServerImageryProvider({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
      })
    })
  }, [])

  return <div className="cesiumContainer" ref={cesiumViewerDivRef}></div>
}

export default CesiumScene
