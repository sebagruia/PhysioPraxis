import {
  SET_CURRENT_USER,
  GET_TESTIMONIALS,
  GET_NEWS,
  LEAVE_MESSAGE_STATUS,
  SENDING_MESSAGE_STATUS,
  GET_HOME_PAGE_INFO,
  GET_HOME_PAGE_TESTIMONIAL
} from "./redux-actions";

const initialState = {
  currentUser: null,
  testimonials: {},
  news:[],
  leaveMessageStatus:false,
  sendingMessageStatus:false,
  homeContent:{},
  testimonialsHome:[]
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case GET_TESTIMONIALS:
      return {
        ...state,
        testimonials: action.payload,
      };
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
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
    case GET_HOME_PAGE_TESTIMONIAL:
      return {
        ...state,
        testimonialsHome: action.payload,
      };
    default:
      return state;
  }
};
