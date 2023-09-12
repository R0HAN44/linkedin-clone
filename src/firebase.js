import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmWgqP6ZUE50C7OFKAvPvo_8g8khE4gwQ",
  authDomain: "linkedin-clone-6dede.firebaseapp.com",
  projectId: "linkedin-clone-6dede",
  storageBucket: "linkedin-clone-6dede.appspot.com",
  messagingSenderId: "469953757852",
  appId: "1:469953757852:web:01c44e6333b4bd4aad2359",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
