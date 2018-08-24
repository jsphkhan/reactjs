import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact={true} component={Screen1} />
          <Route path="/screen2" component={Screen2} />
        </div>
      </Router>
    );
  }
}

export default App;
