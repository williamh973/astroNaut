import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from 'src/app/models/images-for-cards/image-for-news-card.model';



@Injectable({
  providedIn: 'root'
})
export class PictureService {

  
  private readonly _BASE_URL_PICTURE: string = "http://localhost:8080/pictures";
 

  constructor(private http: HttpClient) { }

  getPictureList(): Observable<Picture[]> {
    return this.http.get<Picture[]>(`${this._BASE_URL_PICTURE}/all`);
  }

  getPictureById(id: number): Observable<Picture> {
    return this.http.get<Picture>(`${this._BASE_URL_PICTURE}/${id}`);
  }

  addPicture(picture: Picture): Observable<Picture> {
    return this.http.post<Picture>(`${this._BASE_URL_PICTURE}/add`, picture);
  }

  updatePicture(picture: Picture): Observable<Picture> {
    return this.http.put<Picture>(`${this._BASE_URL_PICTURE}/update/${picture.id}`, picture);
  } 

  deletePicture(pictureId: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_PICTURE}/delete/${pictureId}`);
  }

}
