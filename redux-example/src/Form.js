import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from './js/actions';

class ConnectedForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);

	}
	handleChange(e) {
		//console.log(e.currentTarget.value);
		this.setState({text: e.currentTarget.value});
	}
	handleClick() {
		console.log('handleClick');

		//dispatch an action to add Article to the state
		this.props.addArticle({name: this.state.text, id: Date.now()});
	}
	render() {
		return (
			<div className="form-box">
				<input type="text" onChange={this.handleChange}/>
				<button onClick={this.handleClick}>Save</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addArticle: (article) => {
			dispatch(addArticle(article));
		} 
	}
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;