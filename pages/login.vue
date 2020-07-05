<template>
  <v-form>
    <v-container>
      <v-text-field label="MailAddress" v-model="mail" ></v-text-field>
      <v-text-field label="Password" v-model="pass" type="password"></v-text-field>
      <v-btn color="primary" @click="login">ログイン</v-btn>
    </v-container>
  </v-form>
</template>

<script>
// ここ追加①
import { auth } from '../plugins/firebase'
import Cookies from 'js-cookie'

export default {
  data () {
    return {
      mail: '',
      pass: ''
    }
  },
  methods: {
    login () {
      auth.signInWithEmailAndPassword(this.mail, this.pass)
        .then(user => {
          auth.currentUser.getIdToken(true).then((idToken) => {
            Cookies.set('access_token', idToken)
          })
          this.$router.push('/')
          })
        .catch(e => alert(e.message))

    }
  }
}
</script>