
export const LEAVE_MESSAGE_STATUS = "LEAVE_MESSAGE_STATUS";
export const SENDING_MESSAGE_STATUS = "SENDING_MESSAGE_STATUS";
export const GET_HOME_PAGE_INFO = "GET_HOME_PAGE_INFO";
export const GET_TESTIMONIAL = "GET_TESTIMONIAL";
export const GET_ABOUT_US_PAGE = "GET_ABOUT_US_PAGE";

const path = process.env.NODE_ENV !== "production" ? "http://localhost:5000" : process.env.REACT_APP_SERVER_LINK;

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
    const data = await fetch(`${path}/contentful/homeContent`);
    const homeContent = await data.json();
    dispatch({
      type: GET_HOME_PAGE_INFO,
      payload: homeContent,
    });
  } catch (error) {
    console.log(`Error getting homeContent ${error.message}`);
  }
};

export const getTestimonials = () => async (dispatch) => {
  try {
    const data = await fetch(`${path}/contentful/testimonials`);
    const testimonials = await data.json();
    dispatch({
      type: GET_TESTIMONIAL,
      payload: testimonials,
    });
  } catch (error) {
    console.log(`Error getting testimonials ${error.message}`);
  }
};

export const getAboutUsPage = () => async (dispatch) => {
  try {
    const data = await fetch(`${path}/contentful/aboutUs`);
    const aboutUs = await data.json();
    dispatch({
      type: GET_ABOUT_US_PAGE,
      payload: aboutUs,
    });
  } catch (error) {
    console.log(`Error getting aboutUs ${error.message}`);
  }
};
