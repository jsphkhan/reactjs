import React, { Component } from 'react';

const STATUS = {
	HOVERED: 'hovered',
	NORMAL: 'normal'
};

export default class Link extends Component {
	state = {
		class: STATUS.NORMAL
	}
	constructor(props) {
		super(props);
	}
	onMouseEnter() {
		this.setState({class: STATUS.HOVERED});
	}
	onMouseLeave() {
		this.setState({class: STATUS.NORMAL});
	}
	render() {
		return (
			<a 
			  className={this.state.class}
			  href={this.props.page || "#"}
			  target="_blank"
			  onMouseEnter={this.onMouseEnter.bind(this)}
			  onMouseLeave={this.onMouseLeave.bind(this)}>
			  	{this.props.children}
		  	</a>
		);
	}
}