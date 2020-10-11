
import React, { Component } from 'react';

class Hello2 extends Component {
    state = { value: '' }
    _updateValue = ({ target: { value } }) => this.setState({ value })
    render = () => {
        const { value } = this.state
        return (
            <div>
                <h1>Hello {value} </h1>
                <input
                    value={value}
                    onChange={this._updateValue}
                />
            </div>
        )
    }
}


export default Hello2