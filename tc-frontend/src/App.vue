<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <app-header></app-header>
    <Home msg="Tuition Center"/>
    <!-- <app-post></app-post> -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Home from './components/Home.vue'
import Post from './components/Post.vue'

export default {
  name: 'app',
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
    Home,
    'app-post': Post
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
