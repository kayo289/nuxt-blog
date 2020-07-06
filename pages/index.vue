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
    <!-- {{blogs}} -->
    <blog-list title="blog index" :bloglist="blogs"></blog-list>
  </v-container>
</template>

<script>
import BlogList from '../components/BlogList.vue'
import BlogPost from '../components/BlogPost.vue'
import { auth } from '../plugins/firebase'
import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  data () {
    return {
      isLogin: false,
    }
  },
  components: {
    BlogList,
    BlogPost,
  },
  async asyncData ({ params }) {
    let { data } = await axios.get(`https://blogapi234.herokuapp.com/api/v1/blogs`)
    return { blogs: data["data"] }
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
      Cookies.remove('access_token');
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