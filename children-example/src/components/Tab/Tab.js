import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tab extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }
    render() {
        return (
            <div 
                style={{
                  flex: 1, 
                  marginRight: 1, 
                  height: 50, 
                  backgroundColor: (this.props.active) ? 'red': 'green', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  cursor: 'pointer'
                }}
                onClick={this.props.whenClicked}>
                    {this.props.title}
            </div>
        );
    }
}