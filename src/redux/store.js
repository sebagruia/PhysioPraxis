import {createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger'

const middlewares = [];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, ...middlewares));

export default store;