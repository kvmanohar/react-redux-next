import { SET_FOO } from '../types';

const initState = {
	foo: null
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case SET_FOO:
			return Object.assign({}, state, { foo: action.payload });

		default:
			return state;
	}
};

export default reducer;
