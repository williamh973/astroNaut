import { User } from '../user.model';
import { NewsCard } from './news-card.model';

export class CommentCard {
  constructor(
    public content: string,
    public newsCard: NewsCard,
    public user: User,
    public timestamp: Date,
    public likeCount: number,
    public dislikeCount: number,
    public id?: number
  ) {}
}
