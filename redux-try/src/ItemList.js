import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemAction } from './js/actions';

class ItemList extends Component {
	handleRemove(id) {
		this.props.removeItem(id);
	}
	render() {
		console.log('------ List Render -------');
		return (
			<ul>
				{this.props.basket.map((item, index) =>{
					return (
						<li 
						  key={index}
						  onDoubleClick={() => this.handleRemove(item.id)}>{item.data}</li>
					);
				})}
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		basket: state.basket
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		removeItem: (id) => {
			dispatch(removeItemAction(id));
		}
	}
}

let ItemListConnect = connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default ItemListConnect;