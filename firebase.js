import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkPB2jHHOUUmWlASHyOrdUwSfobXkAdz8",
  authDomain: "whatsapp-2-8b517.firebaseapp.com",
  projectId: "whatsapp-2-8b517",
  storageBucket: "whatsapp-2-8b517.appspot.com",
  messagingSenderId: "795966024111",
  appId: "1:795966024111:web:b52ba85317ef160e91675a",
  measurementId: "G-22P3W0N438",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
