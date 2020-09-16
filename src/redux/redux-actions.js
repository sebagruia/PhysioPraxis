import { firestore } from "../firebase/firebase";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const GET_TESTIMONIALS = "GET_TESTIMONIALS";
export const GET_NEWS = "GET_NEWS";
export const LEAVE_MESSAGE_STATUS = "LEAVE_MESSAGE_STATUS";
export const SENDING_MESSAGE_STATUS = "SENDING_MESSAGE_STATUS";

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

export const getNews = () => async (dispatch) => {
  const docRef = firestore.collection("/news");
  try {
    const docSnapshot = await docRef.get();
    const allDocuments = docSnapshot.docs;
    const data = allDocuments.map((document) => {
      return document.data();
    });
    dispatch({
      type: GET_NEWS,
      payload: data,
    });
  } catch (error) {
    console.log(`Error getting news ${error.message}`);
  }
};

export const leaveMessageStatusChange = (value)=>{
  return{
    type:LEAVE_MESSAGE_STATUS,
    payload:!value

  }
}

export const sendingMessageStatus = (status)=>{
  return{
    type:SENDING_MESSAGE_STATUS,
    payload:!status
  }
}


