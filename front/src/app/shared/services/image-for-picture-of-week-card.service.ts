import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageForPictureOfWeekCard } from 'src/app/models/images-for-cards/image-for-picture-of-week-card.model';

@Injectable({
  providedIn: 'root'
})
export class ImageForPictureOfWeekCardService {

  private readonly _BASE_URL_IMAGE_FOR_PICTURE_OF_WEEK_CARD: string = "http://localhost:8080/imagePictureOfWeekCards";
 

  constructor(private http: HttpClient) { }

  getImageList(): Observable<ImageForPictureOfWeekCard[]> {
    return this.http.get<ImageForPictureOfWeekCard[]>(`${this._BASE_URL_IMAGE_FOR_PICTURE_OF_WEEK_CARD}/all`);
  }

  getImageById(id: number): Observable<ImageForPictureOfWeekCard> {
    return this.http.get<ImageForPictureOfWeekCard>(`${this._BASE_URL_IMAGE_FOR_PICTURE_OF_WEEK_CARD}/${id}`);
  }

  createImage(imageForPictureOfWeekCard: ImageForPictureOfWeekCard): Observable<ImageForPictureOfWeekCard> {
    return this.http.post<ImageForPictureOfWeekCard>(`${this._BASE_URL_IMAGE_FOR_PICTURE_OF_WEEK_CARD}/add`, imageForPictureOfWeekCard);
  }

  updateImage(imageForPictureOfWeekCard: ImageForPictureOfWeekCard): Observable<ImageForPictureOfWeekCard> {
    return this.http.put<ImageForPictureOfWeekCard>(`${this._BASE_URL_IMAGE_FOR_PICTURE_OF_WEEK_CARD}/update/${imageForPictureOfWeekCard.id}`, imageForPictureOfWeekCard);
  } 

  deleteImage(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_IMAGE_FOR_PICTURE_OF_WEEK_CARD}/delete/${id}`);
  }

}
