import React, { Component } from 'react';

export default class Stepper extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props.children);
    }
    render() {
        const {children, current} = this.props;
        return (
            <div className="stepper-box">
                {React.Children.map(children, (child, i) => {
                    return React.cloneElement(child, {
                        current: current === i
                    });
                })}
            </div>
        );
    }
}