import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './components/Link';
import CheckboxWithLabel from './components/CheckboxWithLabel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link page="https://www.facebook.com">Facebook</Link>
          <Link page="https://www.google.com">Google</Link>
        </div>
        <CheckboxWithLabel labelOn="Bombay" labelOff="Delhi" />
      </div>
    );
  }
}

export default App;
