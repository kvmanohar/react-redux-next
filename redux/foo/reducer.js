import * as types from './types';

const initState = {
	foo: ''
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SET_FOO:
			return { ...state, foo: action.payload };

		default:
			return state;
	}
};

export default reducer;
