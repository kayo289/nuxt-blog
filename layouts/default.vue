<template>
  <v-app dark>
    <v-app-bar color="#3b6978" fixed app dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Blog'
    }
  }
}
</script>

<style>
.theme--light.v-application {
  background: #fff;
}
.v-toolbar__title {
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
}
</style>