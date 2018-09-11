<template>
    <div id="second">
      <h3>second</h3>
      <ul>
        <span v-for='article in articles' :key = 'article'>
          <img ;src="article.image.medium"><span v-text="article.title">
          conlog.log('title:' + article.title)
        </span>
        </span>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'second',
  data () {
    return {
      author: 'second',
      articles: []
    }
  },
  mounted: function () {
    this.$http.jsonp('http://api.douban.com/v2/movie/top250?count=10', {}, {
      headers: {
      },
      emulateJSON: true
    }).then(function (response) {
      this.article = response.data.subjects
    }, function (response) {
      console.log('测试： ' + response)
    })
  }
}
</script>

<style scoped>

</style>
