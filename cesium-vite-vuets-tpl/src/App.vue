<template>
  <CesiumScene />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CesiumScene from './components/CesiumScene.vue'

export default defineComponent({
  name: 'App',
  components: {
    CesiumScene
  }
})
</script>

<style>
</style>
