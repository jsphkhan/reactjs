//Custom component to practice component life cycle
//Good article: https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0
import React, { Component } from 'react';

export default class CustomComponent extends Component {
	constructor(props) {
		super(props);
		console.log('constructor');

		this.state = {
			changed: false
		}
	}
	componentWillMount() {
		console.log('will mount');
	}
	componentDidMount() {
		console.log('did mount');
	}
	componentWillUnMount() {
		console.log('will unmount');
	}
	shouldComponentUpdate() {
		console.log('should update');
		return true;
	}
	componentWillUpdate() {
		console.log('will update');
	}
	componentDidUpdate() {
		console.log('did update');
	}

	/* it is called when parent sends new props. not called during intial render */
	componentWillReceiveProps(nextProps) {
		console.log('will receive props', nextProps);
		//compare old props with next prop
		if(this.props.message !== nextProps.message) {
			console.log(this.props.message !== nextProps.message);
			//	this.setState({changed: true});
		}
	}
	handleClick() {
		this.setState({changed: !this.state.changed});
	}
	render() {
		console.log('render ----');
		let {changed} = this.state;
		let comp = (!changed) ? ("Hello Component") : ("Hello Changed");
		return (
			<div>
				<h1>{comp}</h1>
				<button onClick={this.handleClick.bind(this)}>Change State</button>
				<h3>{this.props.message}</h3>
			</div>
		);
	}
}