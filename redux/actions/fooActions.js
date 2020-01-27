import { SET_FOO } from '../types';

import axios from 'axios';

const getPosts = () => (dispatch) => {
	axios({
		method: 'GET',
		url: `https://jsonplaceholder.typicode.com/posts`,
		headers: []
	}).then((response) => dispatch({ type: SET_FOO, payload: response.data[0] }));
};

export default {
	getPosts
};
