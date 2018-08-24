import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  state = {
    text: '',
    data: []
  }
  constructor(props) {
    super(props);
    window.performance.mark('App');
  }
  componentDidMount() {
    console.log(window.performance.now('App'));
  }
  handleClick() {
    console.log(this.state.text);
    this.setState({data: this.state.data.concat(this.state.text)});
  }
  render() {
    return (
      <div className="App">
        <div className="form">
          <input type="text" onChange={(evt) => this.setState({text: evt.currentTarget.value})}/>
          <button onClick={this.handleClick.bind(this)}>Submit</button>
        </div>
        <List data={this.state.data}/>
      </div>
    );
  }
}

export default App;
