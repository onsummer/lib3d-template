<template>
  <div>
    <ThreeScene />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ThreeScene from '~/components/ThreeScene.vue'

export default Vue.extend({
  components: {
    ThreeScene
  }
})
</script>

<style>
html, body {
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