<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12">
        <v-list color="#e7dfd5">
          <v-subheader class="font-weight-bold">{{ title }}</v-subheader>
          <v-col v-for="blog in bloglist" :key="blog.id" cols="12" class="pt-0">
            <v-card>
              <nuxt-link :to="`/blogs/${blog.id}`">
                <v-card-title class="headline pb-0">{{blog.title}}</v-card-title>
                <v-card-text class="pb-0">{{ blog.summary }}</v-card-text>
                <v-card-actions class="pt-0">
                  <v-col cols="10" md="10" class="pl-0">
                    <v-btn text>
                      <v-chip color="grey lighten-3" label>
                        {{ blog.name }}
                      </v-chip>
                    </v-btn>
                  </v-col>
                </v-card-actions>
              </nuxt-link>
            </v-card>
          </v-col>
        </v-list>
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
.theme--light.v-label {
  color: #000;
}
.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
  margin-bottom: 0px;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-right: 0;
}
</style>