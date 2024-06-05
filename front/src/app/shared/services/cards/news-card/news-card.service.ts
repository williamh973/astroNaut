import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { NewsCard } from 'src/app/models/cards/news-card.model';

@Injectable({
  providedIn: 'root',
})
export class NewsCardService {
  filteredCardListSubject$: BehaviorSubject<NewsCard[]> = new BehaviorSubject<
    NewsCard[]
  >([]);

  private readonly _BASE_URL_NEWSCARD: string =
    'http://localhost:8080/newsCards';

  constructor(private http: HttpClient) {}

  getCardListSubject$(): Observable<NewsCard[]> {
    return this.http
      .get<NewsCard[]>(`${this._BASE_URL_NEWSCARD}/all`)
      .pipe(tap((newsCard) => this.filteredCardListSubject$.next(newsCard)));
  }

  getCardById(id: number): Observable<NewsCard> {
    return this.http.get<NewsCard>(`${this._BASE_URL_NEWSCARD}/${id}`);
  }

  createCard(newsCard: NewsCard, userMail: string): Observable<NewsCard> {
    const userData = userMail;
    return this.http
      .post<NewsCard>(
        `${this._BASE_URL_NEWSCARD}/add?userAssociatedMail=${userData}`,
        newsCard
      )
      .pipe(
        tap((newNewsCard) => {
          this.postNewsCardListSubject$(newNewsCard);
        })
      );
  }

  updateCard(newsCard: NewsCard): Observable<NewsCard> {
    return this.http.put<NewsCard>(
      `${this._BASE_URL_NEWSCARD}/update/${newsCard.id}`,
      newsCard
    );
  }

  deleteCard(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_NEWSCARD}/delete/${id}`);
  }

  postFilterCardListForSearch(filteredCardList: NewsCard[]) {
    this.filteredCardListSubject$.next([...filteredCardList]);
  }

  postNewsCardListSubject$(newCard: NewsCard) {
    const currentNewsCardList = this.filteredCardListSubject$.value;
    this.filteredCardListSubject$.next([...currentNewsCardList, newCard]);
  }

  getFilteredCardList$(): Observable<NewsCard[]> {
    return this.filteredCardListSubject$.asObservable();
  }
}
