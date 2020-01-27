import { SET_BAR } from '../types';

//Action Creators
const setBar = (barString) => ({
	type: SET_BAR,
	payload: barString
});

export default {
	setBar
};
