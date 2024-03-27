import { Picture } from "./picture.model";

export class NewsCard {
    constructor(
        public picturesList: Picture[],
        public title: string,
        public timestamp: Date,
        public id?: number
    ) { }
}
 
   