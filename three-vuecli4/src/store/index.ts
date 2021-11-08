import { Scene } from 'three'
import { InjectionKey } from 'vue'
import { useStore as baseUseStore, createStore, Store } from 'vuex'

export interface State {
  scene: Scene | null
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    scene: null
  },
  mutations: {
    /**
     * 将 Scene 保存至中央状态库中
     * @param {State} state 
     * @param {Scene} scene 
     */
    setScene(state: State, scene: Scene) {
      state.scene = scene
    }
  },
  actions: {},
  modules: {}
})

export const useStore = () => {
  return baseUseStore(key)
}
