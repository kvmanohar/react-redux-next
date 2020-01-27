import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';

const Index = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.getPosts();
	};
	return (
		<div>
			<div>Prop from Redux {JSON.stringify(props)}</div>
			<button onClick={handleSubmit}>Load Posts</button>
			<div>Props from getInitialProps - {props.custom}</div>
		</div>
	);
};

Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
	await store.dispatch(actions.getPosts());
	return { custom: 'Custom props' };
};
export default connect((state) => state, actions)(Index);
