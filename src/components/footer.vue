<template>
    <div id="footer">
      <hr>
      <p>this is footer</p>
      <a href="http://baidu.com">baidu</a>
      <a>copy {{author}}</a>
    </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      author: 'oooooo'
    }
  }
}
</script>

<style scoped>

</style>
