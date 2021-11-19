import { Viewer } from 'cesium'
import { InjectionKey } from 'vue'
import { useStore as baseUseStore, createStore, Store } from 'vuex'

export interface State {
  cesiumViewer: Viewer | null
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    cesiumViewer: null
  },
  mutations: {
    /**
     * 将 Cesium 的 Viewer 保存至中央状态库中
     * @param {State} state 
     * @param {Scene} scene 
     */
    setCesiumViewer(state: State, cesiumViewer: Viewer) {
      state.cesiumViewer = cesiumViewer
    }
  },
  actions: {},
  modules: {}
})

export const useStore = () => {
  return baseUseStore(key)
}
