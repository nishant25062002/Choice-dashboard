import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBJMVNOBHoOeeIthuxmhnJ7PkH2YaYSA9U",
    authDomain: "cream-choice.firebaseapp.com",
    projectId: "cream-choice",
    storageBucket: "cream-choice.appspot.com",
    messagingSenderId: "659377887033",
    appId: "1:659377887033:web:90e01a0e8766d8685bfae8",
    measurementId: "G-NL7WBSSY5W"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const storage = firebase.storage();
const provider=new firebase.auth.GoogleAuthProvider();
export { auth, storage ,provider};

export default db;