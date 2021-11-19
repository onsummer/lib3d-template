<template>
  <div ref="sceneRef" class="sceneContainer"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, shallowReactive } from 'vue'
import {
  ArcGisMapServerImageryProvider,
  Viewer
} from 'cesium'

import '../node_modules/cesium/Build/CesiumUnminified/Widgets/widgets.css'

let cesiumViewer: Viewer | null = null
const sceneRef = ref<HTMLDivElement>()

Object.defineProperty(globalThis, 'CESIUM_BASE_URL', {
  value: 'node_modules/cesium/Build/CesiumUnminified/'
})

const init = () => {
  cesiumViewer = new Viewer(sceneRef.value as Element, {
    animation: false,
    imageryProvider: new ArcGisMapServerImageryProvider({
      url: `https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer`
    })
  })
}

onMounted(() => {
  init()
})
</script>

<style>
.sceneContainer {
  width: 80vw;
  height: 75vh;
}
</style>
