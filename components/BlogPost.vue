<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="#204051" dark class="font-weight-bold" v-on="on"
        ><v-icon small class="mr-2">mdi-plus-circle-outline </v-icon
        >新規ブログを追加</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">新規ブログを追加</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="title" label="Title"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="summary" label="Summary"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="detail" label="Detail"></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="primary" text @click="dialog = false">キャンセル</v-btn>
        <v-btn color="primary" text @click="add">登録</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from '~/plugins/firebase'
import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      title: '',
      detail: '',
      name: '',
      summary: '',
      dialog: false,
      menu: false,
      modal: false
    }
  },
  methods: {
    async add() {
      const body = {
        title: this.title,
        detail: this.detail,
        summary: this.summary
      }
      const response = await axios.post("https://blogapi234.herokuapp.com/api/v1/blogs", body, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('access_token')}`,
        }});
      this.dialog = false
    }
  }
}
</script>