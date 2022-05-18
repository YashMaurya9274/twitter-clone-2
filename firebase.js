import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAyrG2liZNjuK0sqpclgRtNFJyWKD9lupQ',
  authDomain: 'twitter-2-c59ee.firebaseapp.com',
  projectId: 'twitter-2-c59ee',
  storageBucket: 'twitter-2-c59ee.appspot.com',
  messagingSenderId: '144386213675',
  appId: '1:144386213675:web:a919bf62d54a69bf6b676e',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export default db
