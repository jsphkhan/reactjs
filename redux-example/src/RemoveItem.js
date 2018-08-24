import React, { Component } from 'react';
import {connect} from 'react-redux';

class RemoveItem extends Component {
    shouldComponentUpdate(nextProps) {
        console.log(nextProps, this.props);
        //if the next props is same as current one then we do not need to re-render
        if(nextProps.id === this.props.id) {
            return false; //by setting false we prevent unnecessary re-render/ wasted render of this component
        } else {
            return true;
        }
    }
    handleClick(id) {
        //console.log(id);
        this.props.removeItem(id);
    }
    render() {
        return (
            <button onClick={() => this.handleClick(this.props.id)}>Remove</button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: function(id) {
            dispatch({type: 'REMOVE_ARTCILE', id: id});
        }
    }
}
const ConnectedRemove = connect(null, mapDispatchToProps)(RemoveItem);
export default ConnectedRemove;