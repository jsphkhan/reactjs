import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConnectedRemove from './RemoveItem';

class ConnectedList extends Component {
	constructor(props) {
		super(props);

		//console.log(this.props.articles);
	}
	render() {
		return (
			<div>
				<h1>ToDo List</h1>
				<ul>
					{this.props.articles.map((article, index) => {
						return (
							<li key={index}>
								{article.name}
								<ConnectedRemove id={article.id}/>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		articles: state.articles
	}
}

const List = connect(mapStateToProps)(ConnectedList);
export default List;

