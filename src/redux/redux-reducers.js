import {
  LEAVE_MESSAGE_STATUS,
  SENDING_MESSAGE_STATUS,
  GET_HOME_PAGE_INFO,
  GET_TESTIMONIAL,
  GET_ABOUT_US_PAGE,
  GET_SERVICES,
  GET_POSTS
} from "./redux-actions";

const initialState = {
  leaveMessageStatus:false,
  sendingMessageStatus:false,
  homeContent:null,
  testimonials:null,
  aboutUs:null,
  services:null,
  posts:null
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
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
