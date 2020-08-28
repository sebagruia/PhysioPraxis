import * as firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCV67yo2fn2qZfUwqZQUk9ZcT8JQ5puJw8",
    authDomain: "physiopraxis-51c08.firebaseapp.com",
    databaseURL: "https://physiopraxis-51c08.firebaseio.com",
    projectId: "physiopraxis-51c08",
    storageBucket: "physiopraxis-51c08.appspot.com",
    messagingSenderId: "142074726160",
    appId: "1:142074726160:web:133a5a5fa679a2d7364795",
    measurementId: "G-3X5L6DP9DG"
  };


  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});

  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

  export const signOutWithGoogle = ()=>auth.signOut();

  export default firebase;