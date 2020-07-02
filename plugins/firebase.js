import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCvRuiIam4wbzAUUPwJKv_MvRPoiYXYjS0",
    authDomain: "blog-661a7.firebaseapp.com",
    databaseURL: "https://blog-661a7.firebaseio.com",
    projectId: "blog-661a7",
    storageBucket: "blog-661a7.appspot.com",
    messagingSenderId: "963381379607",
    appId: "1:963381379607:web:b178508afb33eff7265252"
  })
}

export const auth = firebase.auth()
export default firebase