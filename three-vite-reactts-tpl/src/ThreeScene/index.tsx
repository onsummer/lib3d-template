import React, { useEffect, useRef, useCallback } from 'react'
import {
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
  WebGLRenderer,
} from 'three'

import './index.css'

let camera: PerspectiveCamera | null = null
let scene: Scene | null = null
let renderer: WebGLRenderer | null = null
let geometry: BoxGeometry | null = null
let material: MeshNormalMaterial | null = null
let mesh: Mesh | null = null

/**
 * ThreeJS 的场景组件，绘制一个 cube
 */
const ThreeScene = () => {
  const sceneDivRef = useRef<HTMLDivElement>(null)

  const animation = useCallback((timeSpan: number) => {
    const refDiv = sceneDivRef.current
    if (!mesh || !camera || !renderer || !scene || !refDiv) return


    mesh.rotation.x = timeSpan / 2000
    mesh.rotation.y = timeSpan / 1000

    camera.aspect = +refDiv.clientWidth / +refDiv.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(+refDiv.clientWidth, +refDiv.clientHeight)

    renderer.render(scene, camera)
  }, [])

  const initScene = useCallback(() => {
    const refDiv = sceneDivRef.current
    if (!refDiv) return

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
  }, [])

  useEffect(() => {
    initScene()
  }, [])

  return (
    <div className={"sceneContainer"} ref={sceneDivRef}></div>
  )
}

export default ThreeScene
