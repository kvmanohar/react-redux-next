import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fooActions } from '../redux/foo';

class Index extends Component {
	static getInitialProps({ store, isServer, pathname, query }) {
		// component will be able to read from store's state when rendered
		store.dispatch(fooActions.setFoo(' : Test-Foo - Index'));
		// you can pass some custom props to component from here
		return { custom: 'custom' };
	}
	render() {
		return (
			<div>
				<div>Prop from Redux - {JSON.stringify(this.props.foo)}</div>
				<div>Prop from Redux - {JSON.stringify(this.props.bar)}</div>
				<div>Prop from getInitialProps {this.props.custom}</div>
			</div>
		);
	}
}
export default connect((state) => state)(Index);
