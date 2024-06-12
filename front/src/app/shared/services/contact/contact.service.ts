import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  private readonly _BASE_URL_CONTACT_TEXTAREA: string =
    'http://localhost:8080/contactTexts';

  getContactTextAreaList(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this._BASE_URL_CONTACT_TEXTAREA}/all`);
  }

  createMessage(
    contactMessage: Contact,
    userMail: string
  ): Observable<Contact> {
    const senderUserMail = userMail;
    return this.http.post<Contact>(
      `${this._BASE_URL_CONTACT_TEXTAREA}/add?senderUserMail=${senderUserMail}`,
      contactMessage
    );
  }

  updateContactTextArea(contactTextarea: Contact): Observable<Contact> {
    return this.http.put<Contact>(
      `${this._BASE_URL_CONTACT_TEXTAREA}/update/${contactTextarea.id}`,
      contactTextarea
    );
  }

  deleteContactTextArea(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this._BASE_URL_CONTACT_TEXTAREA}/delete/${id}`
    );
  }
}
