 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/functions'


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5JdnKEyCoEv3d2qLREgypecoBaJL_gmI",
  authDomain: "instagram-clone-507c6.firebaseapp.com",
  projectId: "instagram-clone-507c6",
  storageBucket: "instagram-clone-507c6.appspot.com",
  messagingSenderId: "861722803052",
  appId: "1:861722803052:web:b2de0c14e25fb34cddd149",
  measurementId: "G-QXPLTESBMZ"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};