<template>
  <div ref="sceneRef" class="sceneContainer"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
  WebGLRenderer,
} from 'three'
import { key, useStore } from '@/store'

const sceneRef = ref<HTMLDivElement>()

let camera: PerspectiveCamera | null = null
let scene: Scene | null = null
let renderer: WebGLRenderer | null = null
let geometry: BoxGeometry | null = null
let material: MeshNormalMaterial | null = null
let mesh: Mesh | null = null

const animation = (time: number) => {
  const refDiv = sceneRef.value
  if (!mesh || !camera || !renderer || !scene || !refDiv) return


  mesh.rotation.x = time / 2000
  mesh.rotation.y = time / 1000

  camera.aspect = +refDiv.clientWidth / +refDiv.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(+refDiv.clientWidth, +refDiv.clientHeight)

  renderer.render(scene, camera)
}

const initScene = () => {
  const refDiv = sceneRef.value as HTMLDivElement

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
  renderer.setAnimationLoop(animation)

  refDiv.appendChild(renderer.domElement)
}

const store = useStore()

onMounted(() => {
  initScene()

  if (scene)
    store.commit('setScene', scene)
})

</script>

<style>
.sceneContainer {
  width: 80vw;
  height: 75vh;
}
</style>