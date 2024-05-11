import { ImageForPictureAuthorCard } from "../images-for-cards/image-for-picture-author.model";

export class PictureAuthorCard {
    constructor(
        public imageListForPictureAuthor: ImageForPictureAuthorCard[],
        public title: string,
        public resume: string,
        public timestamp: Date,
        public id?: number
    ) { }
}
 
   