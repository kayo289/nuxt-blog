<template>
  <v-container class="todo">
    <v-form ref="form">
      <v-row>
        <v-col cols="12" md="12">
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

export default {
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
  }
}
</script>

<style scoped>
.status.done {
  text-decoration: line-through;
}
</style>