import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { NewsCardLiked } from 'src/app/models/user/interaction/news-card-like.model';

@Injectable({
  providedIn: 'root',
})
export class NewsCardLikeService {
  private readonly _BASE_URL = 'http://localhost:8080/api/v1/newsCardLikedList';

  constructor(private http: HttpClient) {}

  getCurrentUserNewsCardLikedList(): Observable<NewsCardLiked[]> {
    return this.http.get<NewsCardLiked[]>(`${this._BASE_URL}/currentUser/all`);
  }

  addNewsCardLiked(cardId: number): Observable<NewsCard> {
    return this.http.post<NewsCard>(
      `${this._BASE_URL}/newsCardLikedList/${cardId}`,
      {}
    );
  }

  deleteNewsCardLiked(deletedNewsCardLiked: NewsCardLiked): Observable<void> {
    const cardId = deletedNewsCardLiked.id;
    return this.http.delete<void>(`${this._BASE_URL}/delete/${cardId}`);
  }
}
