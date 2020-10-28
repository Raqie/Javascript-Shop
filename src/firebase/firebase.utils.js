import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firebase-app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

var config = {
  apiKey: "AIzaSyBKN3e67jiwHh6DXTHpKNqjKRYWDGT5v6A",
  authDomain: "crwn-db-7673a.firebaseapp.com",
  databaseURL: "https://crwn-db-7673a.firebaseio.com",
  projectId: "crwn-db-7673a",
  storageBucket: "crwn-db-7673a.appspot.com",
  messagingSenderId: "946100934390",
  appId: "1:946100934390:web:33aa4f20837e58e3cbbed7",
  measurementId: "G-YQ6F2F92EM",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
