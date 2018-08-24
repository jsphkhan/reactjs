import React, { Component } from 'react';
import RemoveBtn from './RemoveBtn';

export default class ListItem extends Component {
    componentDidMount() {
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps) {
        console.log('shouldComponentUpdate', nextProps);
        return false; //prevents wasted render from here on. The re-rendering is not trigerred down the subtree to its child component
    }
    render() {
        return (
            <div>
                <span>{this.props.text}</span>
                <RemoveBtn />
            </div>
        );
    }
}