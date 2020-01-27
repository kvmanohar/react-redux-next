import { combineReducers } from 'redux';

//Import all reducers
import fooReducer from './fooReducer';
import barReducer from './barReducer';

const rootReducer = combineReducers({
	foo: fooReducer,
	bar: barReducer
});

export default rootReducer;
