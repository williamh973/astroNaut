import { Picture } from "../images-for-cards/image-for-news-card.model";
import { Comments } from "../comment.model";

export class NewsCard {
    constructor(
        public picturesList: Picture[],
        public title: string,
        public mainArticle: string,
        public optionalArticleOne: string,
        public optionalArticleTwo: string,
        public optionalArticleThree: string,
        public readingTime: number,
        public timestamp: Date,
        public likeCount: number,
        public dislikeCount: number,
        public commentsList: Comments[],
        public id?: number
    ) { }
}
 
   