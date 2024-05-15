import { NewsCard } from "./cards/news-card.model";

export class Comments {
    constructor(
        public content: string,
        public newsCard: NewsCard,
        public timestamp: Date,
        public likeCount: number,
        public dislikeCount: number,
        public id?: number
        ) {}
}