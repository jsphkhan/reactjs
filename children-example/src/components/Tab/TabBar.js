import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: this.props.currentTab
        };
    }
    handleClick(index) {
        //console.log(index);
        // this.setState((prevState) => {
        //     return {currentTab: index}
        // });
        this.setState({currentTab: index}, () => {
            this.props.onTabChange(index);
        });
    }
    render() {
        const children = this.props.children;
        return (
            <div>
                <h3>Tab Bar</h3>
                {/* <p>{React.Children.count(children)}</p> */}
                <div style={{display: 'flex'}}>
                    {React.Children.map(children, (child, i) => {
                        return React.cloneElement(child, {
                            active: (this.state.currentTab === i),//true or false
                            whenClicked: this.handleClick.bind(this, i)
                        });
                    })}
                </div>
                <p>{this.state.currentTab}</p>
            </div>
        );
    }
}

TabBar.propTypes = {
    children: PropTypes.any,
    onTabChange: PropTypes.func,
    currentTab: PropTypes.number
}