import desert_hearts from "./2022/deserthearts.png";
import vibey_desert from "./2022/vibeydesert.jpg";
import dart_democracy from "./2022/dartdemocracy.jpg";

import pirate1 from "./2022/DSC_4204.jpg";
import pirate2 from "./2022/DSC_4196.jpg";
import pirate3 from "./2022/DSC_4172.jpg";

import tunnel1 from "./2022/HNcOfWyQ.jpeg";
import tunnel2 from "./2022/VeQrsi_g.jpeg";
import tunnel3 from "./2022/IMG_3068.jpg";

import beach1 from "./2022/DSC_5240.jpg";
import beach2 from "./2022/DSC_5241.jpg";
import beach4 from "./2022/20191222110127_IMG_3183_1.jpg";
import beach5 from "./2022/received_2363289267269843.jpeg";
import beach6 from "./2022/received_1256850007855878.jpeg";
import beach7 from "./2022/received_746006075866370.jpeg";
import beach8 from "./2022/IMG_20210519_183713_296.jpg";
import beach9 from "./2022/7R301103.jpg";

// import gif1 from "./2022/heart.mp4";

export interface ImageDetails {
    source: string,
    description?: string,
}

const transformToImageDetails = (images: string[]): ImageDetails[] => {
    const res: ImageDetails[] = [];
    images.forEach(image => res.push({source: image}));
    return res;
}

export const promoImages: ImageDetails[] = [
    {
        source: desert_hearts,
        description: 'Desert Hearts 2022',
    },
    {
        source: vibey_desert,
        description: 'Vibey Desert 2021',
    },
    {
        source: dart_democracy,
        description: 'Dart Democracy 2022',
    },

];

export const performanceImages: ImageDetails[] = transformToImageDetails([
    pirate1,
    tunnel1,
    beach1,
    pirate2,
    beach2,
    pirate3,
    tunnel2,
    tunnel3,
    // beach3,
    beach4,
    beach5,
    beach6,
    beach7,
    beach8,
    beach9,
]);

export const casualImages: ImageDetails[] = transformToImageDetails([]);

