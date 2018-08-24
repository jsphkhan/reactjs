import React, { Component } from 'react';
import {
	Redirect
} from 'react-router-dom';

export default class Screen1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			dataArr: []
		};
	}
	handleClick() {
		this.setState((prevState) => {
			return {redirect: !prevState.redirect};
		});
	}
	handleItemClick(id) {
		console.log(id);
		//fetch purchases for this user
		let url = `http://localhost:3000/users/${id}/purchases`;
		fetch(url, {
			method: 'GET', 
			headers: {
				'Accept': 'application/json'
			}
		}).then((response) => {
			if(response.ok) {
				return response.json();
			} else {
				throw new Error('Request Error');
			}
		}).then((responseJson) => {
			console.log(responseJson);
		}).catch((err) => {
			console.log('Request Error', err);
		});
	}
	componentDidMount() {
		let url = 'http://localhost:3000/users';

		fetch(url).then((response) => {
			if(response.ok) {
				return response.json();
			} else {
				throw new Error('Request Error');
			}
		}).then((responseJson) => {
			console.log(responseJson);
			this.setState({dataArr: responseJson});
		}).catch((err) => {
			console.log('Request Error', err);
		});
	}
	render() {
		let {redirect} = this.state;

		if(redirect) {
			return (
				<Redirect to={{pathname: '/screen2', state: {data: 'Joseph'}}}/>
			);
		}
		return (
			<div>
				<h1>Hello</h1>
				<button onClick={this.handleClick.bind(this)}>Screen2</button>

				<ul>
				{this.state.dataArr.map((item ,index) => {
					return (
						<li onClick={() => {this.handleItemClick(item._id)}} key={index} id={item._id}>
							{item.name} {item.balance}
						</li>
					);
				})}
				</ul>
			</div>
		)
	}
}