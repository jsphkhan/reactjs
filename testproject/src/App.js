import React, { Component } from 'react';
import './App.css';

import CustomComponent from './components/CustomComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Message from parent'
    }
  }
  render() {
    console.log('parent render');
    return (
      <div className="App">
        <CustomComponent message={this.state.message}/>
        <button onClick={() => this.setState({message: 'Message from parent updated'})}>Parent Button</button>
      </div>
    );
  }
}

export default App;
