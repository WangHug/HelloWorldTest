<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <p>{{ msg }}</p>
    <input type="text" v-model="msg">
    <first></first>
    <div id="leftmenu">
      <ul>
        <li><router-link to="/first">跳转第一页</router-link></li>
        <li><router-link to="/second">跳转第二页</router-link></li>
      </ul>
    </div>
    <div id="bottom">
      <footer></footer>
    </div>
    <!--<router-view/>-->
  </div>
</template>

<script>
import first from './components/first.vue'
import second from './components/second.vue'
import footer1 from './components/footer.vue'
export default {
  name: 'App',
  data () {
    return {
      msg: 'welcom'
    }
  },
  components: {
    first, second, footer1
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
  #leftmenu{
    width: 20%;
    height: 50%
  }
</style>
