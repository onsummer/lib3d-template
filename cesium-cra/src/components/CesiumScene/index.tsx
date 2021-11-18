import React, { useEffect, useRef } from 'react'
import {
  ArcGisMapServerImageryProvider,
  Viewer
} from 'cesium'

import '../../../node_modules/cesium/Build/Cesium/Widgets/widgets.css'
import styles from './index.module.css'

// eslint-disable-next-line
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

  return (
    <div className={styles.cesiumContainer} ref={cesiumViewerDivRef}></div>
  )
}

export default CesiumScene