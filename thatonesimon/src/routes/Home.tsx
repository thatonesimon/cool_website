import React from 'react';
import ImageCarousel from "../assets/ImageCarousel";
import ImageGallery from "../assets/ImageGallery";

export default class Home extends React.Component {

    render() {
        return (
            <div className='base-page'>
                <h1>Welcome to Simon's performer profile!</h1>
                <ImageCarousel/>
                <h1>Image Gallery</h1>
                <ImageGallery/>
            </div>
        )
    }
}
