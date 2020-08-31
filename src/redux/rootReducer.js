import {combineReducers} from "redux";
import {userReducer} from "./redux-reducers";

const rootReducer = combineReducers({userReducer});

export default rootReducer;