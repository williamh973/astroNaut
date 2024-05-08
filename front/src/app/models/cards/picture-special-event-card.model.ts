import { ImageForPictureSpecialEventCard } from "../images-for-cards/image-for-picture-special-event.model";

export class PictureSpecialEventCard {
    constructor(
        public imageListForPictureSpecialEvent: ImageForPictureSpecialEventCard[],
        public title: string,
        public resume: string,
        public timestamp: Date,
        public id?: number
    ) { }
}
 
   