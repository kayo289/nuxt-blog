<template>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="blog in bloglist"
          :key="blog.id"
          cols="12"
          sm="6"
          md="4"
          class="d-flex"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card color="#e7dfd5" width="100%" :elevation="hover ? 6 : 2">
              <nuxt-link :to="`/blogs/${blog.id}`" class="d-block" style="height: 100%;">
                <v-card-title class="card-text">{{ blog.title }}</v-card-title>
                <v-card-text class="card-text">{{ blog.summary }}</v-card-text>
                <v-card-actions class="pt-0">
                    <v-btn text>
                      <v-chip color="grey lighten-3" label>
                        user{{ blog.id }}
                      </v-chip>
                    </v-btn>
                </v-card-actions>
              </nuxt-link>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    bloglist: {
      type: Array,
      default: null
    }
  },
  methods: {
    remove(id) {
      this.$store.dispatch('blog/remove', id)
    },
  }
}
</script>

<style>
.card-text {
  color: #000;
}
.v-application a{
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>