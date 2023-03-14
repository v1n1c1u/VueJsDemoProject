<template>
  <div id="app">
    <Menu v-if="this.$router.currentRoute.name != 'Login'"></Menu>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/menu/Menu.vue'

export default {
  components:{
    Menu: Menu
  }
}
</script>

<style>
:root{
  --primary-color: #42b983;
  --secondary-color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  margin-top:35px;
}
body {
  margin: 0;
  padding: 0;
}
.page-title{
  font-size: 600;
  font-weight: bold;
}

</style>