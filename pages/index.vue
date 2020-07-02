<template>
  <v-container class="todo">
    <v-form ref="form">
      <v-row>
        <v-col cols="12" md="12">
          <v-btn v-if="isLogin" @click="logout">ログアウト</v-btn>
          <blog-post></blog-post>
        </v-col>
      </v-row>
    </v-form>
    <blog-list title="blog index" :bloglist="bloglist"></blog-list>
  </v-container>
</template>

<script>
import BlogList from '../components/BlogList.vue'
import BlogPost from '../components/BlogPost.vue'
import { auth } from '../plugins/firebase'

export default {
  data () {
    return {
      isLogin: false
    }
  },
  components: {
    BlogList,
    BlogPost,
  },
  computed: {
    bloglist() {
      return this.$store.getters['blog/orderdBlogs']
    },
  },
  created() {
    this.$store.dispatch('blog/init')
  },
  async mounted () {
    // ログイン済みであれば、ログアウトボタンを表示する
    await auth.onAuthStateChanged((user) => this.isLogin = user ? true :false)
  },
  methods: {
    async logout() {
      await auth.signOut()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.status.done {
  text-decoration: line-through;
}
</style>