import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer from './reducers';

// In this file we are initializing the redux store by passing initial state and instance of reducer,
// we are applying thunk middleware to support async data flow. And also dev-tools & Logger for debugging.
export const makeStore = (initialState = {}) => {
	return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk, logger)));
};
