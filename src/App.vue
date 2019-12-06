<template>
  <div id="app">
    <Background title = "SEU" desc = "" text = "CSAcademy" isHome = "true"/>
  </div>
</template>

<script>
import Background from './components/Background.vue'

export default {
  name: 'app',
  components: {
    Background
  }
}
</script>

<style>
body {
  margin:0;
  padding:0;
  background:#f0f0f0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content-title {
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
