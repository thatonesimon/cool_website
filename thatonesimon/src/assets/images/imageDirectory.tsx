import desert_hearts from "./2022/deserthearts.png";
import vibey_desert from "./2022/vibeydesert.jpg";
import dart_democracy from "./2022/dartdemocracy.jpg";

export interface ImageDetails {
    source: string,
    description: string,
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