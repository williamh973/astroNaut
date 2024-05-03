import { ImageForPictureOfWeekCard } from "../images-for-cards/image-for-picture-of-week-card.model";

export class PictureOfWeekCard {
    constructor(
        public imageListForPictureOfWeek: ImageForPictureOfWeekCard[],
        public title: string,
        public resume: string,
        public timestamp: Date,
        public id?: number
    ) { }
}
 
   