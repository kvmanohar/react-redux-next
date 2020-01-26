import * as types from './types';

const initState = {
	bar: ''
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SET_BAR:
			return { ...state, bar: action.payload };

		default:
			return state;
	}
};

export default reducer;
