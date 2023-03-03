import React from 'react';
import ImageGallery from "../assets/ImageGallery";
import ImageCarousel from "../assets/ImageCarousel";

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
