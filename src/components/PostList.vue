<template>
    <div class="PostList">
      <div class="loading" v-if="loading">
        Loading....
      </div>
      <div class="posts" v-else>
        <ul>
          <li v-for="post in posts" :key="post">
            <router-link :to="{name: 'user-info', params: {name: post.author.loginname}}" :title="post.author_id">
              <img :src="post.author.avatar_url" :title="post.author.loginname"/>
            </router-link>
            <span>
              {{ post.reply_count }}/{{ post.visit_count}}
            </span>
            <router-link :to="{ name: 'post_count', params: { id: post.id, name: ost.author.loginname}}" :title="post.title">
              {{post.title}}
            </router-link>
            <span class="last_reply">
              {{post.last_reply_at | formatDate}}
            </span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>export default {
  name: 'PostList',
  data () {
    return {
      posts: {},
      loading: false
    }
  },
  filters: {
    timeStyle (createTime) {
      return String(createTime).match(/.{10}/)[0]
    }
  },
  methods: {
    getData () {
      this.$http({
        url: 'https://cnodejs.org/api/v1/topics',
        method: 'get',
        params: {
          page: 1,
          limit: 20
        }
      }).then((response) => {
        if (response.data.success === true) {
          this.posts = response.data.data
          this.loading = false
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  beforeMount () {
    this.loading = true
    this.getData()
  }
}
</script>

<style scoped>

</style>
