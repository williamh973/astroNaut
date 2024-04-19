import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { NewsCard } from 'src/app/models/news-card.model';



@Injectable({
  providedIn: 'root'
})
export class NewsCardService {


  filteredCardListSubject$: BehaviorSubject<NewsCard[]> = new BehaviorSubject<NewsCard[]>([]);

  
  private readonly _BASE_URL_NEWSCARD: string = "http://localhost:8080/newsCards";
 

  constructor(private http: HttpClient) { }


  getCardList(): Observable<NewsCard[]> {
    return this.http.get<NewsCard[]>(`${this._BASE_URL_NEWSCARD}/all`);
  }

  getCardById(id: number): Observable<NewsCard> {
    return this.http.get<NewsCard>(`${this._BASE_URL_NEWSCARD}/${id}`);
  }

  createCard(newsCard: NewsCard): Observable<NewsCard> {
    return this.http.post<NewsCard>(`${this._BASE_URL_NEWSCARD}/add`, newsCard);
  }

  updateCard(newsCard: NewsCard): Observable<NewsCard> {
    return this.http.put<NewsCard>(`${this._BASE_URL_NEWSCARD}/update/${newsCard.id}`, newsCard);
  } 

  deleteCard(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_NEWSCARD}/delete/${id}`);
  }

 

  postFilterCardList(filteredCardList: NewsCard[]) {
    this.filteredCardListSubject$.next([...filteredCardList]);
  }
  
  getFilteredCardList$(): Observable<NewsCard[]> {
    return this.filteredCardListSubject$.asObservable();
  }

}
