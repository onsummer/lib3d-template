import React, { useRef, useEffect } from 'react'
import {
  Viewer,
  ArcGisMapServerImageryProvider
} from 'cesium'
import '../../node_modules/cesium/Source/Widgets/widgets.css'
import './index.css'

//#region 为 CESIUM_BASE_URL 补充定义
import './index.d'
window.CESIUM_BASE_URL = './node_modules/cesium/Build/CesiumUnminified/'
//#endregion

let viewer: Viewer;
function CesiumScene() {
  const cesiumContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    viewer = new Viewer(cesiumContainerRef.current as Element, {
      animation: false,
      imageryProvider: new ArcGisMapServerImageryProvider({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
      })
    })
  }, [])

  return (
    <div className="cesiumContainer" ref={cesiumContainerRef}></div>
  )
}

export default CesiumScene
