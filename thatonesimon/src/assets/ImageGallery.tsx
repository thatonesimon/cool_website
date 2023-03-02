import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./assets.css";


import { carouselImages, performanceImages } from "./images/imageDirectory";
import Gallery from "react-photo-gallery";

export default class ImageGallery extends React.Component {

    transformCarouselImages() {
        return [...carouselImages, ...performanceImages].map(i => {
            let w = 1;
            let  h = 1; // TODO: here cause nullish ?? doesnt work...
            if (i.width) {
                w = i.width;
            }
            if (i.height) {
                h = i.height;
            }
            return {
                src: i.source,
                width: w,
                height: h,
            }
        })
    }

    render() {
        return (
            <div>
                <Gallery
                    // @ts-ignore
                    photos={this.transformCarouselImages()}
                    margin={5}
                />
            </div>
        );
    }
}
