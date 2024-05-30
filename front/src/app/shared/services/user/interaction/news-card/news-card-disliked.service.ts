import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { NewsCardDisliked } from 'src/app/models/user/interaction/news-card/news-card-dislike.model';

@Injectable({
  providedIn: 'root',
})
export class NewsCardDislikedService {
  private readonly _BASE_URL =
    'http://localhost:8080/api/v1/newsCardDislikedList';

  constructor(private http: HttpClient) {}

  getCurrentUserNewsCardDislikedList(): Observable<NewsCardDisliked[]> {
    return this.http.get<NewsCardDisliked[]>(
      `${this._BASE_URL}/currentUser/all`
    );
  }

  addNewsCardDisliked(cardId: number): Observable<NewsCard> {
    return this.http.post<NewsCard>(`${this._BASE_URL}/add/${cardId}`, {});
  }

  deleteNewsCardDisliked(
    deletedNewsCardDisliked: NewsCardDisliked
  ): Observable<void> {
    const cardId = deletedNewsCardDisliked.id;
    return this.http.delete<void>(`${this._BASE_URL}/delete/${cardId}`);
  }
}
