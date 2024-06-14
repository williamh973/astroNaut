import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactFormPopupService {
  private isContactFormPopupOpenSubject$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  isContactFormPopupOpen$ = this.isContactFormPopupOpenSubject$.asObservable();

  openPopup() {
    this.isContactFormPopupOpenSubject$.next(true);
  }

  closePopup() {
    this.isContactFormPopupOpenSubject$.next(false);
  }
}
