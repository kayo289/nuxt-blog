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
                        <span class="title font-weight-light">{{title}}</span>
                    </v-card-title>

                    <v-card-text class="headline font-weight-bold" style="white-space:pre-wrap; word-wrap:break-word;">{{detail}}</v-card-text>
                    <v-card-actions>
                        <v-list-item>
                            <v-list-item-avatar color="grey darken-3">
                            <v-img src="http://flat-icon-design.com/f/f_object_174/s256_f_object_174_0bg.png"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                            <v-list-item-title>{{ name }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card-actions>
                </v-card>
                <div class="button-box">
                    <v-btn to="/" color="#204051" dark class="font-weight-bold">
                        戻る
                    </v-btn>
                    <v-btn :to="`/blogs/edit/${$route.params.id}`" color="#204051" dark class="font-weight-bold">
                        編集
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {   
    data: () => ({
        title: '',
        detail: '',
        name: '',
        date: new Date(),
    }),
    methods: {
        remove(id) {
            this.$store.dispatch('blog/remove', id)
            this.$router.push('/')
        }
    },
    mounted() {
        const db = firebase.firestore()
        const docRef = db.collection('blogs').doc(this.$route.params.id)
        docRef.get().then((doc)=>{
            const data = doc.data()
            this.title = data.title
            this.detail = data.detail
            this.name = data.name
            this.date = data.date
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