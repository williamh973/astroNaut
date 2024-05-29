import { NewsCard } from './cards/news-card.model';
import { NewsCardLiked } from './user/interaction/news-card-like.model';

export class User {
  constructor(
    public pseudo: string,
    public email: string,
    public role: 'ROLE_USER' | 'ROLE_ADMIN',
    public blocked: boolean,
    public newsCard: NewsCard[],
    public newsCardLikedList: NewsCardLiked[],
    public id?: number
  ) {}
}
