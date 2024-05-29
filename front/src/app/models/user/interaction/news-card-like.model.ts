import { NewsCard } from '../../cards/news-card.model';
import { User } from '../../user.model';

export class NewsCardLiked {
  constructor(
    public newsCard: NewsCard,
    public user: User,
    public id?: number
  ) {}
}
