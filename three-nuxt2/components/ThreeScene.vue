<template>
  <div ref="sceneRef" class="sceneContainer"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
  WebGLRenderer,
} from 'three'

let camera: PerspectiveCamera | null = null
let scene: Scene | null = null
let renderer: WebGLRenderer | null = null
let geometry: BoxGeometry | null = null
let material: MeshNormalMaterial | null = null
let mesh: Mesh | null = null

export default Vue.extend({
  data() {
    return {

    }
  },
  methods: {
    initScene() {
      const that = this
      const refDiv = that.$refs.sceneRef as HTMLDivElement

      camera = new PerspectiveCamera(70, +refDiv.clientWidth / +refDiv.clientHeight, 0.01, 10)
      camera.position.z = 1

      scene = new Scene()

      geometry = new BoxGeometry(0.2, 0.2, 0.2)
      material = new MeshNormalMaterial()

      mesh = new Mesh(geometry, material)
      scene.add(mesh)

      renderer = new WebGLRenderer({
        antialias: true
      })
      renderer.setSize(+refDiv.clientWidth, +refDiv.clientHeight)
      renderer.setAnimationLoop(that.animation)

      refDiv.appendChild(renderer.domElement)
    },

    animation(time: number) {
      const refDiv = this.$refs.sceneRef as HTMLDivElement
      if (!mesh || !camera || !renderer || !scene || !refDiv) return


      mesh.rotation.x = time / 2000
      mesh.rotation.y = time / 1000

      camera.aspect = +refDiv.clientWidth / +refDiv.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(+refDiv.clientWidth, +refDiv.clientHeight)

      renderer.render(scene, camera)
    }
  },
  mounted() {
    this.initScene()
  }
})
</script>

<style scoped>
.sceneContainer {
  width: 80vw;
  height: 75vh;
}
</style>
