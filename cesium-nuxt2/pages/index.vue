<template>
  <div>
    <CesiumScene />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CesiumScene from '~/components/CesiumScene.vue'

export default Vue.extend({
  components: {
    CesiumScene
  }
})
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

body {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
