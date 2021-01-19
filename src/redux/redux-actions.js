export const LEAVE_MESSAGE_STATUS = "LEAVE_MESSAGE_STATUS";
export const SENDING_MESSAGE_STATUS = "SENDING_MESSAGE_STATUS";
export const GET_HOME_PAGE_INFO = "GET_HOME_PAGE_INFO";
export const GET_HOME_PAGE_TESTIMONIAL = "GET_HOME_PAGE_TESTIMONIAL";

// const port =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_DOMAIN_URL
//     : "http://localhost:5000";

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
    const data = await fetch(`/contentful/homeContent`);
    const homeContent = await data.json();
    dispatch({
      type: GET_HOME_PAGE_INFO,
      payload: homeContent,
    });
  } catch (error) {
    console.log(`Error getting homeContent ${error.message}`);
  }
};

export const getHomePageTestimonials = () => async (dispatch) => {
  try {
    const data = await fetch(`/contentful/testimonialsHome`);
    const testimonialsHome = await data.json();
    console.log(testimonialsHome);
    dispatch({
      type: GET_HOME_PAGE_TESTIMONIAL,
      payload: testimonialsHome,
    });
  } catch (error) {
    console.log(`Error getting testimonialsHome ${error.message}`);
  }
};
