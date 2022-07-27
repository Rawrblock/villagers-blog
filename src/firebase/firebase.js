// 按需引入
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBghZ7yCWwYnhtC9Ev8XSChNr7-ijjGh3Y',
  authDomain: 'villagers-blog.firebaseapp.com',
  projectId: 'villagers-blog',
  storageBucket: 'villagers-blog.appspot.com',
  messagingSenderId: '947615993711',
  appId: '1:947615993711:web:cf15490a17bfac9197e29a',
  measurementId: 'G-VMQQTHWE7T'
}

// 初始化firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()
