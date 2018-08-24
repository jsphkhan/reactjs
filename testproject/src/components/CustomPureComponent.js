import React, { Component, PureComponent } from 'react';

/*
 A PureComponent implements its own shouldComponentUpdate() method,
 where it decides whether to re-render or not based on state change.
 Here in this example the state is updating (setState()) but data
 has not changed, so automatically shouldComponentUpdate() returns false. 
 No re-rendering happens because nothing has changed.
 PureComponent implements its own shouldComponentUpdate() by doing a 
 shallow comparision of the state and props.
 Prevents wasted render or unnecessary re-rendering. 
 You do not write your own shouldComponentUpdate() method. It throws a console error
 PureComponents are efficient. Use them when the UI does not change with same set of data
*/
export class CustomPureComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Joseph',
            email: 'jkhan@yodlee.com'
        }
    }
    handleClick() {
        //here although I am updating the state, but data is not changing
        //so re-rendering does not happen.
        //if we had updated with diff data then it would have.
        this.setState({name: 'Joseph', email: 'jkhan@yodlee.com'});
    }
    render() {
        return (
            <div style={{width: 300, padding: 10, borderWidth: 1, borderColor: '#9a9a9a', backgroundColor: '#efefef'}}>
                <h3>Pure Custom Component</h3>
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <button onClick={this.handleClick.bind(this)}>Update</button>
            </div>
        );
    }
}


/*
 A Normal Component does not implement its own shouldComponentUpdate() 
 method. So that is left to the developer to decide whether to re-render
 or not on state/prop (eg. props coming as state change from parent) change.
 For a normal Component, whenever you update the state it calls a re-render
 everytime and it does not matter if data has changed ot not. This is the
 default behavior (eg. shouldComponentUpdate() returns true by default). 
 You can control this by writing your own logic inside 
 shouldComponentUpdate() method. 
So for components that does not update over time in your application,
this will cause unnecessary re-renddering or waster render and will
slow down your application. Better to go with PureComponent in that case.
*/
export class CustomNormalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Joseph',
            email: 'jkhan@yodlee.com'
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    handleClick() {
        //Here the data is same, and I am updating the state
        //it calls the render() method everytime even though nothing has changed
        //so there is a case of wasted render here
        this.setState({name: 'Joseph', email: 'jkhan@yodlee.com'});
    }
    render() {
        return (
            <div style={{width: 300, padding: 10, borderWidth: 1, borderColor: '#9a9a9a', backgroundColor: '#efefef'}}>
                <h3>Normal Custom Component</h3>
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <button onClick={this.handleClick.bind(this)}>Update</button>
            </div>
        );
    }
}