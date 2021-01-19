import {
  LEAVE_MESSAGE_STATUS,
  SENDING_MESSAGE_STATUS,
  GET_HOME_PAGE_INFO,
  GET_HOME_PAGE_TESTIMONIAL
} from "./redux-actions";

const initialState = {
  news:[],
  leaveMessageStatus:false,
  sendingMessageStatus:false,
  homeContent:{},
  testimonialsHome:{}
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
    case GET_HOME_PAGE_TESTIMONIAL:
      return {
        ...state,
        testimonialsHome: action.payload,
      };
    default:
      return state;
  }
};
