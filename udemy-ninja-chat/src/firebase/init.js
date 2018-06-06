import firebase from 'firebase'
import firestore from 'firestore'

var config = {
  apiKey: "AIzaSyD29WKHMFib4vMsV8HoZxC-Vi_Ng6Vkyp8",
  authDomain: "udemy-ninja-chat-65b61.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-65b61.firebaseio.com",
  projectId: "udemy-ninja-chat-65b61",
  storageBucket: "udemy-ninja-chat-65b61.appspot.com",
  messagingSenderId: "192060683056"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore();