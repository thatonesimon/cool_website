import React from "react";
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets.css";


import { promoImages } from "../images/imageDirectory";

export default class DeprecatedImageCarousel extends React.Component {

    transformCarouselImages() {
        return promoImages.map(i => {
            return (
                <div>
                    <img src={i.source} alt={i.description}/>
                    <p className="legend">{i.description}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='image-carousel-container'>
                <Carousel className='image-carousel'>
                    {this.transformCarouselImages()}
                </Carousel>
            </div>
        );
    }
}
