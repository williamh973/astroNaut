import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CommentCard } from "../../../../models/cards/comment-card.model";
import { NewsCard } from 'src/app/models/cards/news-card.model';

@Injectable({
  providedIn: 'root'
})
export class CommentCardService {

  constructor(private http: HttpClient) { }

  private readonly _BASE_URL_COMMENT_CARD: string = "http://localhost:8080/commentCards";
  
  private commentListSubject$: BehaviorSubject<CommentCard[]> = new BehaviorSubject<CommentCard[]>([]);
 

  getCommentListFromDB(): Observable<CommentCard[]> {
    return this.http.get<CommentCard[]>(`${this._BASE_URL_COMMENT_CARD}/all`).pipe(
      tap(comments => this.commentListSubject$.next(comments))
    );
  }

  createComment(commentCard: CommentCard, newsCardAssociated: NewsCard): Observable<CommentCard> {
    const cardId = newsCardAssociated.id;
    return this.http.post<CommentCard>(`${this._BASE_URL_COMMENT_CARD}/add?newsCardAssociatedId=${cardId}`, commentCard).pipe(
      tap((newCommentCard) => {
        this.postCommentCardListSubject$(newCommentCard);
      })
    );
  }

  updateComment(commentCard: CommentCard): Observable<CommentCard> {
    return this.http.put<CommentCard>(`${this._BASE_URL_COMMENT_CARD}/update/${commentCard.id}`, commentCard);
  } 

  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_COMMENT_CARD}/delete/${id}`);
  }


  postCommentCardListSubject$(newCommentCard: CommentCard) {
    const currentCommentList = this.commentListSubject$.value;
    this.commentListSubject$.next([...currentCommentList, newCommentCard]);
  }

  getCommentsListSubject$(): Observable<CommentCard[]> {
    return this.commentListSubject$.asObservable();
  }

}
