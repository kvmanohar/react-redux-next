import * as types from './types';

//Action Creators
export const setFoo = (fooString) => ({
	type: types.SET_FOO,
	payload: fooString
});
