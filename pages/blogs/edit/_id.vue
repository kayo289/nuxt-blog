<template>
  <v-container>
    <div id="app">
        <v-row>
            <v-col md="2"></v-col>
            <v-col cols="12" md="8">
            <v-form>
                <v-text-field
                v-model="title"
                label="title"
                ></v-text-field>

                <v-text-field
                v-model="summary"
                label="summary"
                ></v-text-field>

                <v-text-field
                v-model="detail"
                label="detail"
                ></v-text-field>

                <v-btn
                dark class="font-weight-bold"
                color="#204051"
                @click="update($route.params.id)"
                >
                    編集を登録
                </v-btn>
                <v-btn to="/" color="#204051" dark class="font-weight-bold">
                    topに戻る
                </v-btn>
                <v-btn @click="remove($route.params.id)" color="#204051" dark class="font-weight-bold">
                    削除
                </v-btn>
            </v-form>
            </v-col>
        </v-row>
    </div>
  </v-container>
</template>

<script>
import firebase from '~/plugins/firebase'
import axios from 'axios'
import Cookies from 'js-cookie'

export default {
    data: () => ({
        title: '',
        detail: '',
        summary: '',
    }),
    methods: {
        async remove(id) {
            const response = await axios.delete(`https://blogapi234.herokuapp.com/api/v1/blogs/${this.$route.params.id}`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('access_token')}`,
            }});
            this.$router.push('/')
        },
        async update(id) {
            const body = {
                title: this.title,
                detail: this.detail,
                summary: this.summary
            }
            const response = await axios.put(`https://blogapi234.herokuapp.com/api/v1/blogs/${this.$route.params.id}`, body,{
            headers: {
                'Authorization': `Bearer ${Cookies.get('access_token')}`,
            }});
            this.$router.push('/')
        }
    },
    async mounted() {
        console.log(this.$route.params.id)
        await axios.get(`https://blogapi234.herokuapp.com/api/v1/blogs/${this.$route.params.id}`)
        .then((res)=>{
            res = res["data"]["data"]
            this.title = res.title
            this.detail =res.detail
            this.summary = res.summary
            this.name = "user"+res.id
        })
    },
}
</script>

<style scoped>
.button-box{
    padding-top: 30px;
    width:600px;
    margin:0 auto;
}
.detail-card{
    margin-top: 50px;
}
</style>