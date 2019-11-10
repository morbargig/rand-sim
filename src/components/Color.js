
import React, { Component } from 'react';

class Color extends Component {

    render() {
        const r = this.props.rgb[0]
        const g = this.props.rgb[1]
        const b = this.props.rgb[2]

        return (
            <div className="color-scheme" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}></div>
        )
    }
}

export default Color;
