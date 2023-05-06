import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import message from './message'
import auth from './auth'
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk]
const rootReducers = combineReducers({
    // message,
    // auth,
    rootReducer
})

const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(...middleware)))

export default store;
