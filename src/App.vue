<template>
  <div id="app">
    <router-view></router-view>
    <boss-header></boss-header>
  </div>
</template>

<script>
import bossHeader from './components/Header'
export default {
  name: 'app',
  components:{bossHeader}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
