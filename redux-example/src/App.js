//Fantastic tutorial: https://www.valentinog.com/blog/react-redux-tutorial-beginners/
//code repo: https://github.com/valentinogagliardi/minimal-react-redux-webpack

import React, { Component } from 'react';
import './App.css';

import List from './List';
import Form from './Form';

import store from './js/store';
import { addArticle } from './js/actions'


class App extends Component {
  constructor(props) {
    super(props);

    //making it global so that I can use in console
    window.store = store;
    window.addArticle = addArticle;
  }
  componentWillMount() {
		window.performance.mark('App');
	}
	componentDidMount() {
		console.log(window.performance.now());
	}
  render() {
    return (
      <div className="App">
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
