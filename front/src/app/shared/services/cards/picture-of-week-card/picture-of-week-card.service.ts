import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureOfWeekCard } from 'src/app/models/cards/picture-of-week-card.model';

@Injectable({
  providedIn: 'root'
})
export class PictureOfWeekCardService {

  
  private readonly _BASE_URL_PICTURE_OF_WEEK_CARD: string = "http://localhost:8080/pictureOfWeekCards";
 

  constructor(private http: HttpClient) { }


  getCardList(): Observable<PictureOfWeekCard[]> {
    return this.http.get<PictureOfWeekCard[]>(`${this._BASE_URL_PICTURE_OF_WEEK_CARD}/all`);
  }

  getCardById(id: number): Observable<PictureOfWeekCard> {
    return this.http.get<PictureOfWeekCard>(`${this._BASE_URL_PICTURE_OF_WEEK_CARD}/${id}`);
  }

  createCard(pictureOfWeekCard: PictureOfWeekCard): Observable<PictureOfWeekCard> {
    return this.http.post<PictureOfWeekCard>(`${this._BASE_URL_PICTURE_OF_WEEK_CARD}/add`, pictureOfWeekCard);
  }

  updateCard(pictureOfWeekCard: PictureOfWeekCard): Observable<PictureOfWeekCard> {
    return this.http.put<PictureOfWeekCard>(`${this._BASE_URL_PICTURE_OF_WEEK_CARD}/update/${pictureOfWeekCard.id}`, pictureOfWeekCard);
  } 

  deleteCard(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_PICTURE_OF_WEEK_CARD}/delete/${id}`);
  }


}
