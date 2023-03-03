import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { promoImages } from "./images/imageDirectory";

export default function ImageCarousel() {

    const getCarouselItems = () => {
        return promoImages.map(i => {
            return (
                <Carousel.Item>

                    <img
                        className="d-block w-100"
                        src={i.source}
                        alt={i.description}
                    />
                    <Carousel.Caption>
                        <p>{i.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
    }

    return (
        <div className='image-carousel-container'>
            <Carousel>
                {getCarouselItems()}
            </Carousel>
        </div>
    )
}