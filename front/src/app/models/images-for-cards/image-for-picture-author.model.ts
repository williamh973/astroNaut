import { PictureAuthorCard } from "../cards/picture-author-card.model";


export class ImageForPictureAuthorCard {
    constructor(
        public src: string, 
        public pictureAuthorCard: PictureAuthorCard,
        public id?: number
        ) {}
}