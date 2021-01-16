import { firestore } from "../firebase/firebase";
import {client} from "../utils/contentful";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const GET_TESTIMONIALS = "GET_TESTIMONIALS";
export const GET_NEWS = "GET_NEWS";
export const LEAVE_MESSAGE_STATUS = "LEAVE_MESSAGE_STATUS";
export const SENDING_MESSAGE_STATUS = "SENDING_MESSAGE_STATUS";
export const GET_HOME_PAGE_INFO = "GET_HOME_PAGE_INFO";
export const GET_HOME_PAGE_TESTIMONIAL = "GET_HOME_PAGE_TESTIMONIAL";

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

export const leaveMessageStatusChange = (value) => {
  return {
    type: LEAVE_MESSAGE_STATUS,
    payload: value,
  };
};

export const sendingMessageStatusAction = (status) => {
  return {
    type: SENDING_MESSAGE_STATUS,
    payload: status,
  };
};
export const getingHomePageInfo = () => async (dispatch) => {
  try {
    const homeContent = await client.getEntry("6qEtbqFKX5CXcj6jPTg4VR");
     dispatch({
      type: GET_HOME_PAGE_INFO,
      payload: homeContent,
    }) 
  } catch (error) {
    console.log(`Error getting homeContent ${error.message}`);
  }
};
export const getHomePageTestimonials = () => async (dispatch) => {
  try {
    const testimonialsHome = await client.getEntries({content_type:'testimonial'});
    dispatch({
      type: GET_HOME_PAGE_TESTIMONIAL,
      payload: testimonialsHome,
    }) 
  } catch (error) {
    console.log(`Error getting testimonialsHome ${error.message}`);
  }
};
