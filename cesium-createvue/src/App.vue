<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
.wrapper {
  display: flex;
  height: 5vh;
}
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
#nav > a {
  font-size: 1rem;
  padding: 0.5rem;
}
</style>
