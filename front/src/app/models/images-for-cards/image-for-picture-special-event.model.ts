import { PictureSpecialEventCard } from "../cards/picture-special-event-card.model";

export class ImageForPictureSpecialEventCard {
    constructor(
        public src: string, 
        public pictureSpecialEventCard: PictureSpecialEventCard,
        public id?: number
        ) {}
}