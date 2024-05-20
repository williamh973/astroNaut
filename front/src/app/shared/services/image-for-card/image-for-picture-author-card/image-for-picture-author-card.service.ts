import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageForPictureAuthorCard } from 'src/app/models/images-for-cards/image-for-picture-author.model';

@Injectable({
  providedIn: 'root'
})
export class ImageForPictureAuthorCardService {

  private readonly _BASE_URL_IMAGE_FOR_PICTURE_AUTHOR_CARD: string = "http://localhost:8080/imagePictureAuthorCards";
 

  constructor(private http: HttpClient) { }

  getImageList(): Observable<ImageForPictureAuthorCard[]> {
    return this.http.get<ImageForPictureAuthorCard[]>(`${this._BASE_URL_IMAGE_FOR_PICTURE_AUTHOR_CARD}/all`);
  }

  getImageById(id: number): Observable<ImageForPictureAuthorCard> {
    return this.http.get<ImageForPictureAuthorCard>(`${this._BASE_URL_IMAGE_FOR_PICTURE_AUTHOR_CARD}/${id}`);
  }

  createImage(imageForPictureAuthorCard: ImageForPictureAuthorCard): Observable<ImageForPictureAuthorCard> {
    return this.http.post<ImageForPictureAuthorCard>(`${this._BASE_URL_IMAGE_FOR_PICTURE_AUTHOR_CARD}/add`, imageForPictureAuthorCard);
  }

  updateImage(imageForPictureAuthorCard: ImageForPictureAuthorCard): Observable<ImageForPictureAuthorCard> {
    return this.http.put<ImageForPictureAuthorCard>(`${this._BASE_URL_IMAGE_FOR_PICTURE_AUTHOR_CARD}/update/${imageForPictureAuthorCard.id}`, imageForPictureAuthorCard);
  } 

  deleteImage(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_IMAGE_FOR_PICTURE_AUTHOR_CARD}/delete/${id}`);
  }

}

