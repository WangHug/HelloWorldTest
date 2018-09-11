<template>
    <div id="first">
      <h3>first component</h3>
      <a>written {{ author }}</a>
    </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      author: 'xx'
    }
  }
}
</script>

<style scoped>

</style>
