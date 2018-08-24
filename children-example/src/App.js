import React, { Component } from 'react';
import './App.css';

import TabBar, {Tab} from './components/Tab';
import Stepper, {Step} from './components/Stepper';

class App extends Component {
  state = {
    currentTab: 0,
    currentStep: 0
  }
  handleChange(index) {
    console.log('handleChange', index);
    this.setState({currentTab: index});
  }
  handleClick(stepNo) {
    this.setState({currentStep: stepNo});
  }
  render() {
    return (
      <div className="App">
        <Stepper current={this.state.currentStep}>
          <Step label="Step1"/>
          <Step label="Step2"/>
          <Step label="Step3"/>
        </Stepper>

        <button onClick={this.handleClick.bind(this, 0)}>Step1</button>
        <button onClick={this.handleClick.bind(this, 1)}>Step2</button>
        <button onClick={this.handleClick.bind(this, 2)}>Step3</button>
        <hr/>
        <TabBar currentTab={0} onTabChange={this.handleChange.bind(this)}>
          <Tab title="Tab1"/>
          <Tab title="Tab2"/>
          <Tab title="Tab3"/>
        </TabBar>
        <div className="tab-body">
          {this.state.currentTab === 0 && (<div className="body1">Body1</div>)}
          {this.state.currentTab === 1 && (<div className="body2">Body2</div>)}
          {this.state.currentTab === 2 && (<div className="body3">Body3</div>)}
        </div>
      </div>
    );
  }
}

export default App;
