import React from "react";
import ReactImageGallery from "react-image-gallery";
import { carouselImages } from "./images/imageDirectory";

import "react-image-gallery/styles/css/image-gallery.css";

// This does not work due to https://github.com/xiaolin/react-image-gallery/issues/624
export default class BrokenImageGallery extends React.Component {

    transformCarouselImages() {
        return carouselImages.map(i => {
            return {
                original: i.source,
                thumbnail: i.source,
            }
        })
    }

    render() {
        return (
            <ReactImageGallery
                items={this.transformCarouselImages()}
                thumbnailPosition={"top"}
                autoPlay={true}
            />
        );
    }
}
