import React, { Component } from 'react';
import {CustomPureComponent, CustomNormalComponent} from './components/CustomPureComponent';

export default class ComponentTest extends Component {
    render() {
        return (
            <div>
                <CustomPureComponent />
                <hr/>
                <CustomNormalComponent />
            </div>
        );
    }
}