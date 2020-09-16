import {
  SET_CURRENT_USER,
  GET_TESTIMONIALS,
  GET_NEWS,
  LEAVE_MESSAGE_STATUS,
  SENDING_MESSAGE_STATUS
} from "./redux-actions";

const initialState = {
  currentUser: null,
  testimonials: {},
  news: {},
  leaveMessageStatus:false,
  bookingMessageStatus:false
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
        bookingMessageStatus: action.payload,
      };
    default:
      return state;
  }
};
