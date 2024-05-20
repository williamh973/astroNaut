import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureSpecialEventCard } from 'src/app/models/cards/picture-special-event-card.model';

@Injectable({
  providedIn: 'root'
})
export class PictureSpecialEventCardService {

  private readonly _BASE_URL_PICTURE_SPECIAL_EVENT_CARD: string = "http://localhost:8080/pictureSpecialEventCards";
 

  constructor(private http: HttpClient) { }


  getCardList(): Observable<PictureSpecialEventCard[]> {
    return this.http.get<PictureSpecialEventCard[]>(`${this._BASE_URL_PICTURE_SPECIAL_EVENT_CARD}/all`);
  }

  getCardById(id: number): Observable<PictureSpecialEventCard> {
    return this.http.get<PictureSpecialEventCard>(`${this._BASE_URL_PICTURE_SPECIAL_EVENT_CARD}/${id}`);
  }

  createCard(pictureSpecialEventCard: PictureSpecialEventCard): Observable<PictureSpecialEventCard> {
    return this.http.post<PictureSpecialEventCard>(`${this._BASE_URL_PICTURE_SPECIAL_EVENT_CARD}/add`, pictureSpecialEventCard);
  }

  updateCard(pictureSpecialEventCard: PictureSpecialEventCard): Observable<PictureSpecialEventCard> {
    return this.http.put<PictureSpecialEventCard>(`${this._BASE_URL_PICTURE_SPECIAL_EVENT_CARD}/update/${pictureSpecialEventCard.id}`, pictureSpecialEventCard);
  } 

  deleteCard(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_PICTURE_SPECIAL_EVENT_CARD}/delete/${id}`);
  }


}
