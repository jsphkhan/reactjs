//individual step

import React, { Component } from 'react';

export default class Step extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
    }
    render() {
        return (
            <div className={'step' + ((this.props.current)? ' active' : '')}>
                {this.props.label}
            </div>
        );
    }
}