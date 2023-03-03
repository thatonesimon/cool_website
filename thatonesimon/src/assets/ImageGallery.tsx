import React, { useEffect, useState } from "react";
import { getImageSize } from "react-image-size";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./assets.css";


import { ImageDetails, performanceImages } from "./images/imageDirectory";
import Gallery from "react-photo-gallery";
import { shuffle } from "./utils";
import { Spinner } from "react-bootstrap";

export default function ImageGallery() {
    const [images, setImages] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);


    const transformCarouselImages = async () => {
        const allImages: ImageDetails[] = [...shuffle(performanceImages)];

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
        transformCarouselImages().then(r => {
            setImages(r);
            setLoading(false);
        })
    }, [])

    return (
        <div>
            {loading ?
                <div>
                    <Spinner animation="grow" variant="light" style={{margin: "2%"}}/>
                    <Spinner animation="grow" variant="light" style={{margin: "2%"}}/>
                    <Spinner animation="grow" variant="light" style={{margin: "2%"}}/>
                </div>
                :
                <Gallery
                    // @ts-ignore
                    photos={images}
                    margin={5}
                />
            }
        </div>
    );
}
