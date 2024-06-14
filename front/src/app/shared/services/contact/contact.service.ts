import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  private readonly _BASE_URL_CONTACT: string =
    'http://localhost:8080/contactTexts';

  private contactListSubject$: BehaviorSubject<Contact[]> = new BehaviorSubject<
    Contact[]
  >([]);

  getContactList(): Observable<Contact[]> {
    return this.http
      .get<Contact[]>(`${this._BASE_URL_CONTACT}/all`)
      .pipe(tap((contactList) => this.contactListSubject$.next(contactList)));
  }

  createContact(
    contactMessage: Contact,
    userMail: string
  ): Observable<Contact> {
    const senderUserMail = userMail;
    return this.http
      .post<Contact>(
        `${this._BASE_URL_CONTACT}/add?senderUserMail=${senderUserMail}`,
        contactMessage
      )
      .pipe(tap((newContact) => this.postContactListSubject$(newContact)));
  }

  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_CONTACT}/delete/${id}`);
  }

  postContactListSubject$(newContact: Contact) {
    const currentContactList = this.contactListSubject$.value;
    this.contactListSubject$.next([...currentContactList, newContact]);
  }

  getContactListSubject$(): Observable<Contact[]> {
    return this.contactListSubject$.asObservable();
  }
}
