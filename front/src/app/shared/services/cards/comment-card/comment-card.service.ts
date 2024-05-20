import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommentCard } from "../../../../models/cards/comment-card.model";
import { NewsCard } from 'src/app/models/cards/news-card.model';

@Injectable({
  providedIn: 'root'
})
export class CommentCardService {

  constructor(private http: HttpClient) { }

  private readonly _BASE_URL_COMMENT_CARD: string = "http://localhost:8080/commentCards";

  commentList$: BehaviorSubject<CommentCard[]> = new BehaviorSubject<CommentCard[]>([]);


  getCommentList(): Observable<CommentCard[]> {
    return this.http.get<CommentCard[]>(`${this._BASE_URL_COMMENT_CARD}/all`);
  }

  createComment(commentCard: CommentCard, newsCardAssociated: NewsCard): Observable<CommentCard> {
    const cardId = newsCardAssociated.id;
    return this.http.post<CommentCard>(`${this._BASE_URL_COMMENT_CARD}/add?newsCardAssociatedId=${cardId}`, commentCard);
  }

  updateComment(commentCard: CommentCard): Observable<CommentCard> {
    return this.http.put<CommentCard>(`${this._BASE_URL_COMMENT_CARD}/update/${commentCard.id}`, commentCard);
  } 

  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_COMMENT_CARD}/delete/${id}`);
  }


  postCommentsList(newFilteredCommentList: CommentCard[]) {
    // const currentComments = this.commentList$.value;
    this.commentList$.next([...newFilteredCommentList]);
  }

  getCommentsList$(): Observable<CommentCard[]> {
    return this.commentList$.asObservable();
  }

}
