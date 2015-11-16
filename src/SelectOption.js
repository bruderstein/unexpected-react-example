
import React, { Component } from 'react';

class SelectOption extends Component {

    render() {
        return (
            <li id={'unique_' + Math.floor(Math.random()*10000)} className="option">
                {this.props.label}
            </li>);
    }
}

module.exports = SelectOption;