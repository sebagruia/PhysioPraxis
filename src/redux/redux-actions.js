import {client} from "../utils/contentful";
export const LEAVE_MESSAGE_STATUS = "LEAVE_MESSAGE_STATUS";
export const SENDING_MESSAGE_STATUS = "SENDING_MESSAGE_STATUS";
export const GET_HOME_PAGE_INFO = "GET_HOME_PAGE_INFO";
export const GET_HOME_PAGE_TESTIMONIAL = "GET_HOME_PAGE_TESTIMONIAL";



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
