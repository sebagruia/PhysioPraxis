import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import {formatDate} from "../DATA";

const firebaseConfig = {
  apiKey: "AIzaSyCV67yo2fn2qZfUwqZQUk9ZcT8JQ5puJw8",
  authDomain: "physiopraxis-51c08.firebaseapp.com",
  databaseURL: "https://physiopraxis-51c08.firebaseio.com",
  projectId: "physiopraxis-51c08",
  storageBucket: "physiopraxis-51c08.appspot.com",
  messagingSenderId: "142074726160",
  appId: "1:142074726160:web:133a5a5fa679a2d7364795",
  measurementId: "G-3X5L6DP9DG",
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

// export const addTestimonial = async (text, name, image)=>{
//   const docRef = firestore.collection('/testimonials');
//   try{
//     await docRef.add({
//       id:`testimonial${Math.floor(Math.random()*1000000)}`,
//       createDate: formatDate(),
//       text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       Urna egestas diam nunc orci. Nulla bibendum cum tristique
//       diam varius fringilla magna commodo at. Vel varius semper
//       nisl cursus aliquam urna semper quam. Vivamus proin blandit
//       pharetra quis porttitor massa.`,
//       image: 'https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/testimonials%2Fface3.jpg?alt=media&token=8476aa05-9005-4419-acd8-f52162a37fed',
//       name: "Delia Gruia",
//     })
//   }
//   catch(error){
//     console.log(`Error creating testimonial ${error.message}`);
//   }

// }

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

export const getTestimonials = async ()=>{
  const docRef = firestore.collection('/testimonials');
  try{
    const docSnapshot = await docRef.get();
    const allDocuments = docSnapshot.docs;
    const data = allDocuments.map((document)=>{
          return document.data();
    
      });
  console.log(data);
      return data;
  }
  catch(error){
    console.log(`Error getting testimonials ${error.message}`);
  }
 

}

export default firebase;
