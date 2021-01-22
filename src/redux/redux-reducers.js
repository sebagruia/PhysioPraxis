import {
  LEAVE_MESSAGE_STATUS,
  SENDING_MESSAGE_STATUS,
  GET_HOME_PAGE_INFO,
  GET_TESTIMONIAL,
  GET_ABOUT_US_PAGE
} from "./redux-actions";

const initialState = {
  news:[],
  leaveMessageStatus:false,
  sendingMessageStatus:false,
  homeContent:null,
  testimonials:null,
  aboutUs:null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEAVE_MESSAGE_STATUS:
      return {
        ...state,
        leaveMessageStatus: action.payload,
      };
    case SENDING_MESSAGE_STATUS:
      return {
        ...state,
        sendingMessageStatus: action.payload,
      };
    case GET_HOME_PAGE_INFO:
      return {
        ...state,
        homeContent: action.payload,
      };
    case GET_TESTIMONIAL:
      return {
        ...state,
        testimonials: action.payload,
      };
    case GET_ABOUT_US_PAGE:
      return {
        ...state,
        aboutUs: action.payload,
      };
    default:
      return state;
  }
};
