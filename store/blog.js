import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const blogRef = db.collection('blogs')

export const state = () => ({
  blogs: []
})

export const actions = {
  // 初期化
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('blogs', blogRef)
  }),
  // 追加
  add: firestoreAction((context, { title, detail,summary, date, name }) => {
    if (title.trim()) {
      blogRef.add({
        title,
        summary,
        detail,
        date, 
        name,
      })
    }
  }),
  // 削除
  remove: firestoreAction((context, id) => {
    blogRef.doc(id).delete()
  }),
  // update: firestoreAction((context, id, title, detail, summary, name) => {
  //   console.log("きた")
  //   console.log(title,detail,summary,name)
  //   blogRef.doc(id).update({
  //     title: blog,
  //     summary: blog.summary,
  //     detail: blog.detail,
  //     date: firebase.firestore.FieldValue.serverTimestamp(),
  //     name: blog.name,
  //   })
  // })
}

// 日付の昇順でソート
export const getters = {
  orderdBlogs: (state) => {
    return _.orderBy(state.blogs, 'date', 'asc')
  }
}