import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactFormPopupService {
  private isContactFormPopupOpenSubject$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  isContactFormPopupOpen$ = this.isContactFormPopupOpenSubject$.asObservable();
  userName$: string = '';
  userEmail$: string = '';
  adminRole$: string = '';

  openPopup(contact: Contact, adminRole: string) {
    this.userName$ = contact.name;
    this.userEmail$ = contact.user.email;
    this.adminRole$ = adminRole;
    this.isContactFormPopupOpenSubject$.next(true);
  }

  closePopup() {
    this.isContactFormPopupOpenSubject$.next(false);
  }
}
