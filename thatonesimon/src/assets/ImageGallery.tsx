import React, { useEffect, useState } from "react";
import { getImageSize } from "react-image-size";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./assets.css";


import { promoImages, ImageDetails, performanceImages } from "./images/imageDirectory";
import Gallery from "react-photo-gallery";
import { shuffle } from "./utils";

export default function ImageGallery() {
    const [images, setImages] = useState<any>([]);



    const transformCarouselImages = async () => {
        const allImages: ImageDetails[] = [...shuffle(performanceImages)];
        // const allImages: ImageDetails[] = [...promoImages, ...performanceImages];

        const transformedImages = [];

        for (let i of allImages) {
            const {width, height} = await getImageSize(i.source);
            transformedImages.push({
                src: i.source,
                width: width,
                height: height,
            });
        }
        return transformedImages;
    }

    useEffect(() => {
        transformCarouselImages().then(r =>
            setImages(r)
        );
    }, [])

    return (
        <div>
            <Gallery
                // @ts-ignore
                photos={images}
                margin={5}
            />
        </div>
    );
}
