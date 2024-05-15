import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from "../../models/comment.model";
import { NewsCard } from 'src/app/models/cards/news-card.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  private readonly _BASE_URL_COMMENTS: string = "http://localhost:8080/comments";


  getCommentList(): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this._BASE_URL_COMMENTS}/all`);
  }

  createComment(comments: Comments, newsCard: NewsCard): Observable<Comments> {
    const cardId = newsCard.id;
    return this.http.post<Comments>(`${this._BASE_URL_COMMENTS}/add?newsCardId=${cardId}`, comments);
  }

  updateComment(comments: Comments): Observable<Comments> {
    return this.http.put<Comments>(`${this._BASE_URL_COMMENTS}/update/${comments.id}`, comments);
  } 

  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_COMMENTS}/delete/${id}`);
  }

}
