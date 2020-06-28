<template>
    <div id="app">
        <v-row>
            <v-col cols="12" md="12">
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

                <v-text-field
                v-model="name"
                label="name"
                ></v-text-field>

                <v-btn
                dark class="font-weight-bold"
                color="#204051"
                @click="update($route.params.id)"
                >
                    編集を登録
                </v-btn>
                <v-btn to="/board" color="#204051" dark class="font-weight-bold">
                    topに戻る
                </v-btn>
                <v-btn @click="remove($route.params.id)" color="#204051" dark class="font-weight-bold">
                    削除
                </v-btn>
            </v-form>
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
        summary: '',
        name: '',
    }),
    methods: {
        remove(id) {
            this.$store.dispatch('blog/remove', id)
            this.$router.push('/')
        },
        update(id) {
            // this.$store.dispatch('blog/update', id, this.title, this.detail, this.summary, this.name)
            const db = firebase.firestore()
            const blogRef = db.collection('blogs')
            blogRef.doc(id).update({
                title: this.title,
                summary: this.summary,
                detail: this.detail,
                date: firebase.firestore.FieldValue.serverTimestamp(),
                name: this.name,
            })
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
            this.summary = data.summary
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