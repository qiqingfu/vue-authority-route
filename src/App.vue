<template>
  <div id="app">
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
  html,body {
    height: 100%;
    margin: 0;
    padding: 0
  }

  #app {
    width: 100%;
    height: 100%;
  }
</style>
