import { NewsCard } from "./news-card.model";

export class Picture {
    constructor(
        public src: string, 
        public newsCard: NewsCard,
        public id?: number
        ) {}
}