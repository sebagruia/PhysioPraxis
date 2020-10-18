import {createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, process.env.NODE_ENV === "development" && logger));

export default store;