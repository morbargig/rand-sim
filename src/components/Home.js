import React, { Component } from 'react';
import SearchSection from './SearchSection';
import PhotoGallery from './PhotoGallery';

class Home extends Component {

    render() {
        return (
            <div>
                <SearchSection requestPhotos={this.props.requestPhotos} />
                {this.props.images.length ? <PhotoGallery requestPhotos={this.props.requestPhotos} page={this.props.page} images={this.props.images} /> : null}
            </div>
        );
    }
}

export default Home;
