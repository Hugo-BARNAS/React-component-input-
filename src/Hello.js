import React, { Component } from 'react'

class Hello extends Component {
    state = { label: "World" }

    _updateLabel = () => this.setState({ label: this.props.label })

    render = () => {
        const { label } = this.state

        return (
            <div>
                <h1>Hello {label}</h1>
                <button onClick={this._updateLabel}>Go</button>
            </div>
        )
    }

}






export default Hello