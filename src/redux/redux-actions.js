import { firestore } from "../firebase/firebase";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const GET_TESTIMONIALS = "GET_TESTIMONIALS";
export const ADD_TESTIMONIAL = "ADD_TESTIMONIAL";

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const getTestimonials = () => async (dispatch) => {
  const docRef = firestore.collection("/testimonials");
  try {
    const docSnapshot = await docRef.get();
    const allDocuments = docSnapshot.docs;
    const data = allDocuments.map((document) => {
      return document.data();
    });
    dispatch({
      type: GET_TESTIMONIALS,
      payload: data,
    });
  } catch (error) {
    console.log(`Error getting testimonials ${error.message}`);
  }
};



