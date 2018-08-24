import React, { Component } from 'react';

export default class RemoveBtn extends Component {
    shouldComponentUpdate(nextProps) {
        return true; //prevent wasted render
    }
    render() {
        return (
            <h3>Remove Btn</h3>
        );
    }
}