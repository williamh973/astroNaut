import { PictureOfWeekCard } from "../cards/picture-of-week-card.model";

export class ImageForPictureOfWeekCard {
    constructor(
        public src: string, 
        public pictureOfWeekCard: PictureOfWeekCard,
        public id?: number
        ) {}
}