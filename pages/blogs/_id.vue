<template>
    <div id="app">
        <v-row>
            <v-col cols="12" md="12">
                <v-card
                    class="mx-auto detail-card"
                    color="#84a9ac"
                    dark
                    max-width="600"
                >
                    <v-card-title>
                        <span class="title font-weight-light">{{blog.title}}</span>
                    </v-card-title>

                    <v-card-text class="headline font-weight-bold" style="white-space:pre-wrap; word-wrap:break-word;">{{blog.detail}}</v-card-text>
                    <v-card-actions>
                        <v-list-item>
                            <v-list-item-avatar color="grey darken-3">
                            <v-img src="http://flat-icon-design.com/f/f_object_174/s256_f_object_174_0bg.png"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                            <v-list-item-title>{{ blog.name }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card-actions>
                </v-card>
                <div class="button-box">
                    <v-btn to="/" color="#204051" dark class="font-weight-bold">
                        戻る
                    </v-btn>
                    <v-btn :to="`/blogs/edit/${blog.id}`" color="#204051" dark class="font-weight-bold">
                        編集
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import axios from 'axios'

export default {
    async asyncData ({route}) {
        console.log("aaa")
        console.log(route.params.id)
        let { data } = await axios.get(`https://blogapi234.herokuapp.com/api/v1/blogs/${route.params.id}`)
        return { blog: data["data"] }
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