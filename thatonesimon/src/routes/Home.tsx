import React from 'react';
import ImageGallery from "../assets/ImageGallery";
import ImageCarousel from "../assets/ImageCarousel";

export default class Home extends React.Component {

    render() {
        return (
            <div className='base-page'>
                <h3>Welcome to my profile!</h3>
                <ImageCarousel/>
                <h5>Image Gallery</h5>
                <ImageGallery/>
            </div>
        )
    }
}
