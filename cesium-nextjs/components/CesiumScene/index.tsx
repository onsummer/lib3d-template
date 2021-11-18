import React, { useRef, useEffect } from 'react'
import {
  Viewer,
  ArcGisMapServerImageryProvider
} from 'cesium'

import styles from './index.module.css'

import './index.d'
// window.CESIUM_BASE_URL = 'http://cdn.staticfile.org/cesium/1.87.1/'

let viewer: Viewer
const CesiumScene = () => {
  const cesiumViewerDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    viewer = new Viewer(cesiumViewerDivRef.current as Element, {
      animation: false,
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