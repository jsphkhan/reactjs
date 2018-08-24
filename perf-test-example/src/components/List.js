import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {
    shouldComponentUpdate(nextProps) {
        //console.log('shouldComponentUpdate', nextProps);
        return true;
    }
    componentWillUpdate() {
        //console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        //console.log('componentDidUpdate');
    }
    render() {
        //console.log('render');
        return (
            <div>
                {this.props.data.map((item, index) => {
                    return <ListItem key={index} text={item}/>
                })}
            </div>
        );
    }
}