import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reply } from 'src/app/models/admin/reply.model';

@Injectable({
  providedIn: 'root',
})
export class ReplyService {
  constructor(private http: HttpClient) {}

  private readonly _BASE_URL_REPLY: string = 'http://localhost:8080/replyTexts';

  getReplyList(userMail: string): Observable<Reply[]> {
    return this.http.get<Reply[]>(`${this._BASE_URL_REPLY}/${userMail}/all`);
  }

  createReply(newReply: Reply, receiverUserId: number): Observable<Reply> {
    return this.http.post<Reply>(
      `${this._BASE_URL_REPLY}/add?receiverUserId=${receiverUserId}`,
      newReply
    );
  }
}
