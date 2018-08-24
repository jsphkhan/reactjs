import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store from './js/store';
import {addItemAction, removeItemAction} from './js/actions';

import AddItemFormConnect from './AddItemForm';
import ItemListConnect from './ItemList';

class App extends Component {
  constructor(props) {
    super(props);

    //the following lines can be removed
    //used for playing in console
    window.store = store;
    window.addItemAction = addItemAction;
    window.removeItemAction = removeItemAction;
  }
  render() {
    return (
      <div className="App">
        <AddItemFormConnect />
        <ItemListConnect />
      </div>
    );
  }
}

export default App;
