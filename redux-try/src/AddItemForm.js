import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemAction } from './js/actions';

class AddItemForm extends Component {
	state = {
		text: ""
	}
	handleClick() {
		console.log(this.state.text);
		//dispatch the add item action
		this.props.addItem({data: this.state.text, id: Math.random()});
	}
	render() {
		return (
			<div>
				<input 
				  type="text" 
				  className="addItemBox"
				  onChange={(evt) => {
				  	this.setState({text: evt.currentTarget.value});
				  }}/>
				<button
				  onClick={this.handleClick.bind(this)}
				  className="addItemButton">
				  	Add Item to Basket
			  	</button>
			</div>
		);
	} 
}

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (item) => {
			dispatch(addItemAction(item));
		}
	}
}

let AddItemFormConnect = connect(null, mapDispatchToProps)(AddItemForm);
export default AddItemFormConnect;