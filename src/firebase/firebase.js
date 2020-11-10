import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import {formatDate} from "../DATA";

var firebaseConfig = {
  apiKey:process.env.REACT_APP_YOUR_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_YOUR_FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_YOUR_FIREBASE_DATABASE_URL,
  projectId:process.env.REACT_APP_YOUR_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_YOUR_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_YOUR_FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_YOUR_FIREBASE_APP_ID,
  measurementId:process.env.REACT_APP_YOUR_FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signOutWithGoogle = () => auth.signOut();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (error) {
      console.log(`Error creating user ${error.message}`);
    }
  }
  return userRef;
};


export const addTestimonial = async (name, message, selectionAvatar)=>{
  const docRef = firestore.collection('/testimonials');
  try{
    await docRef.add({
      id:`testimonial${Math.floor(Math.random()*1000000)}`,
      createDate: formatDate(),
      name,
      message,
      selectionAvatar
      
    })
  }
  catch(error){
    console.log(`Error creating testimonial ${error.message}`);
  }

}

export const addPost = async (postTitle, postText, postImageLink)=>{
  const docRef = firestore.collection('/news');
  try{
    await docRef.add({
      id:`post${Math.floor(Math.random()*1000000)}`,
      createDate: formatDate(),
      postTitle,
      postText,
      postImageLink
    })
  }
  catch(error){
    console.log(`Error creating post ${error.message}`);
  }

}

export const getTestimonials = async ()=>{
  const docRef = firestore.collection('/testimonials');
  try{
    const docSnapshot = await docRef.get();
    const allDocuments = docSnapshot.docs;
    const data = allDocuments.map((document)=>{
          return document.data();
    
      });
      return data;
  }
  catch(error){
    console.log(`Error getting testimonials ${error.message}`);
  }
 

}

export default firebase;
