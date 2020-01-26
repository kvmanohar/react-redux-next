import { combineReducers } from 'redux';

//Import all reducers
import fooReducer from './foo/reducer';
import barReducer from './bar/reducer';

const rootReducer = combineReducers({
	foo: fooReducer,
	bar: barReducer
});

export default rootReducer;
