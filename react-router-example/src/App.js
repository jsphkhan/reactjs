import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Route1 extends Component {
  render() {
    return (
      <h1>Hello</h1>
    );
  }
}
class Route2 extends Component {
  render() {
    return (
      <h1>Hi</h1>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul className="links">
              <li><Link to="/route1">Route1</Link></li>
              <li><Link to="/route2">Route2</Link></li>
            </ul>
            <div className="content">
              <Route exact={true} path="/route1" component={Route1} />
              <Route path="/route2" component={Route2} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
