
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Image extends Component {


    render() {

        const image = this.props.image
        // console.log(image)
        // console.log("here")

        return (
            <div className="image">
                <div className="grid-sizer"></div>
                <Link className="grid-item" to={`image/${image.id}`}><img alt="" src={image.url} /></Link>
            </div>
        )
    }
}

export default Image;
