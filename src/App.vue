<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import obj from './utils/binge'

  export default {

    created() {
      obj.findAll();
    }
  }
</script>
<style lang="scss">
  html, body, #app {
    width: 100%;
    height: 100%;
  }


</style>
