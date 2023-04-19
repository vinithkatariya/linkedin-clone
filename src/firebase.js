import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDP-gX1eKB1fVs5POfP6sD4YwJ3qF76vfQ",
  authDomain: "linkedin-clone-3caf9.firebaseapp.com",
  projectId: "linkedin-clone-3caf9",
  storageBucket: "linkedin-clone-3caf9.appspot.com",
  messagingSenderId: "459729742972",
  appId: "1:459729742972:web:b8e767b9a74ac43ef9edf9"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export {db , auth};