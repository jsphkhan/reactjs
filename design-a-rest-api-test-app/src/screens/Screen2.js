import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Screen2 extends Component {
	state = {
		redirect: false
	}
	handleBack() {
		this.setState({redirect: true});
	}
	render() {
		let {data} = this.props.location.state;
		let {redirect} = this.state;

		if(redirect) {
			return (
				<Redirect to={{pathname: '/'}} />
			);
		}
		return (
			<div>
				<h1>Screen2</h1>
				<h3>{data}</h3>
				<button onClick={this.handleBack.bind(this)}>Back</button>
			</div>
		)
	}
}