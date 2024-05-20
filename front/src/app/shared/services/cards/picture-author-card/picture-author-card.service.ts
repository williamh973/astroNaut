import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureAuthorCard } from 'src/app/models/cards/picture-author-card.model';

@Injectable({
  providedIn: 'root'
})
export class PictureAuthorCardService {

  private readonly _BASE_URL_PICTURE_AUTHOR_CARD: string = "http://localhost:8080/pictureAuthorCards";
 

  constructor(private http: HttpClient) { }


  getCardList(): Observable<PictureAuthorCard[]> {
    return this.http.get<PictureAuthorCard[]>(`${this._BASE_URL_PICTURE_AUTHOR_CARD}/all`);
  }

  getCardById(id: number): Observable<PictureAuthorCard> {
    return this.http.get<PictureAuthorCard>(`${this._BASE_URL_PICTURE_AUTHOR_CARD}/${id}`);
  }

  createCard(pictureAuthorCard: PictureAuthorCard): Observable<PictureAuthorCard> {
    return this.http.post<PictureAuthorCard>(`${this._BASE_URL_PICTURE_AUTHOR_CARD}/add`, pictureAuthorCard);
  }

  updateCard(pictureAuthorCard: PictureAuthorCard): Observable<PictureAuthorCard> {
    return this.http.put<PictureAuthorCard>(`${this._BASE_URL_PICTURE_AUTHOR_CARD}/update/${pictureAuthorCard.id}`, pictureAuthorCard);
  } 

  deleteCard(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_PICTURE_AUTHOR_CARD}/delete/${id}`);
  }


}

