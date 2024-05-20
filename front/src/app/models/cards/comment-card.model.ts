import { NewsCard } from "./news-card.model";

export class CommentCard {
    constructor(
        public content: string,
        public newsCard: NewsCard,
        public timestamp: Date,
        public likeCount: number,
        public dislikeCount: number,
        public id?: number
        ) {}
}