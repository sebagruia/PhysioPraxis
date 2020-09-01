import { SET_CURRENT_USER, GET_TESTIMONIALS, GET_NEWS } from "./redux-actions";

const initialState = {
  currentUser: null,
  testimonials: {},
  news:{}
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
    default:
      return state;
  }
};
