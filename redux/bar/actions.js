import * as types from './types';

//Action Creators
export const setBar = (barString) => ({
	type: types.SET_BAR,
	payload: barString
});
