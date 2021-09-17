import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDYRBx41OOsqNwLEhPqlSkfB9xbG8M6Xqo',
  authDomain: 'my-subscriptions-3ed68.firebaseapp.com',
  projectId: 'my-subscriptions-3ed68',
  storageBucket: 'my-subscriptions-3ed68.appspot.com',
  messagingSenderId: '600899225389',
  appId: '1:600899225389:web:39c8b10f6877387e61f5a4'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
