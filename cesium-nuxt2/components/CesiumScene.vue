<template>
  <div ref="sceneRef" class="sceneContainer"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  Viewer,
  ArcGisMapServerImageryProvider
} from 'cesium'

import '../node_modules/cesium/Build/CesiumUnminified/Widgets/widgets.css'

let viewer: Viewer;
export default Vue.extend({
  data() {
    return {

    }
  },
  methods: {
    init() {
      const that = this
      const refDiv = that.$refs.sceneRef as Element

      viewer = new Viewer(refDiv, {
        animation: false,
        imageryProvider: new ArcGisMapServerImageryProvider({
          url: `https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer`
        })
      })
    }
  },
  mounted() {
    this.init()
  }
})
</script>

<style scoped>
.sceneContainer {
  width: 80vw;
  height: 75vh;
}
</style>
