import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageForPictureSpecialEventCard } from 'src/app/models/images-for-cards/image-for-picture-special-event.model';

@Injectable({
  providedIn: 'root'
})
export class ImageForPictureSpecialEventCardService {

  private readonly _BASE_URL_IMAGE_FOR_PICTURE_SPECIAL_EVENT_CARD: string = "http://localhost:8080/imagePictureSpecialEventCards";
 

  constructor(private http: HttpClient) { }

  getImageList(): Observable<ImageForPictureSpecialEventCard[]> {
    return this.http.get<ImageForPictureSpecialEventCard[]>(`${this._BASE_URL_IMAGE_FOR_PICTURE_SPECIAL_EVENT_CARD}/all`);
  }

  getImageById(id: number): Observable<ImageForPictureSpecialEventCard> {
    return this.http.get<ImageForPictureSpecialEventCard>(`${this._BASE_URL_IMAGE_FOR_PICTURE_SPECIAL_EVENT_CARD}/${id}`);
  }

  createImage(imageForPictureSpecialEventCard: ImageForPictureSpecialEventCard): Observable<ImageForPictureSpecialEventCard> {
    return this.http.post<ImageForPictureSpecialEventCard>(`${this._BASE_URL_IMAGE_FOR_PICTURE_SPECIAL_EVENT_CARD}/add`, imageForPictureSpecialEventCard);
  }

  updateImage(imageForPictureSpecialEventCard: ImageForPictureSpecialEventCard): Observable<ImageForPictureSpecialEventCard> {
    return this.http.put<ImageForPictureSpecialEventCard>(`${this._BASE_URL_IMAGE_FOR_PICTURE_SPECIAL_EVENT_CARD}/update/${imageForPictureSpecialEventCard.id}`, imageForPictureSpecialEventCard);
  } 

  deleteImage(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_IMAGE_FOR_PICTURE_SPECIAL_EVENT_CARD}/delete/${id}`);
  }

}

