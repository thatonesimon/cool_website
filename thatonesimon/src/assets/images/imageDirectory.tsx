import desert_hearts from "./2022/deserthearts.png";
import vibey_desert from "./2022/vibeydesert.jpg";
import dart_democracy from "./2022/dartdemocracy.jpg";

import pirate1 from "./2022/DSC_4204.jpg";
import pirate2 from "./2022/DSC_4196.jpg";
import pirate3 from "./2022/DSC_4172.jpg";

import tunnel1 from "./2022/HNcOfWyQ.jpeg";

import beach1 from "./2022/DSC_5240.jpg";
import beach2 from "./2022/DSC_5241.jpg";

export interface ImageDetails {
    source: string,
    description?: string,

    width?: number,
    height?: number,
}

export const carouselImages: ImageDetails[] = [
    {
        source: desert_hearts,
        description: 'Desert Hearts 2022',
    },
    {
        source: vibey_desert,
        description: 'Vibey Desert 2022',
    },
    {
        source: dart_democracy,
        description: 'Dart Democracy 2022',
    },

];

export const performanceImages: ImageDetails[] = [
    {
        source: pirate1,
        width: 3,
        height: 4,
    },
    {
        source: tunnel1,
        width: 5,
        height: 3,
    },
    {
        source: beach1,
        width: 3,
        height: 4,
    },
    {
        source: pirate2,
        width: 4,
        height: 3,
    },
    {
        source: beach2,
        width: 4,
        height: 3,
    },
    {
        source: pirate3,
        width: 3,
        height: 4,
    },
]