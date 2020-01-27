import { SET_BAR } from '../types';

const initState = {};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case SET_BAR:
			return { ...state, bar: action.payload };

		default:
			return state;
	}
};

export default reducer;
