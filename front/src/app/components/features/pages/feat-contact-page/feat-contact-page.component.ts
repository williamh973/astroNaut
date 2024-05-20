import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Contact } from 'src/app/models/contact-page-textarea.model';
import { ContactService } from 'src/app/shared/services/contact/contact.service';

@Component({
  selector: 'app-feat-contact-page',
  templateUrl: './feat-contact-page.component.html',
  styleUrls: ['./feat-contact-page.component.scss']
})
export class FeatContactPageComponent {

  contactText: Contact = new Contact('', new Date())

  isSubmitBtnDisabled: boolean = true;
  isLoadingComposantActive: boolean = false;
  isContactTextCreatedSuccess: boolean = false;
  isContactTextCreatedError: boolean = false;

  constructor(
    private contactService: ContactService,
    ) {}


  onSubmitActived() {
    return (
      this.contactText.textarea.length > 5 &&
      this.contactText.textarea.length <= 1000
    )
  }

  onSubmit() {
    this.isLoadingComposantActive = true;
    this.createContactText();
  }

  createContactText() {
    this.contactService.createContactTextArea(this.contactText).pipe(
      catchError(
        () => {
        this.isLoadingComposantActive = false;
        this.isContactTextCreatedError = true;
        setTimeout(() => {
          this.isContactTextCreatedError = false;
        }, 3000);
        return of(null);
      })
    ).subscribe(contactTextCreated => {
      if (contactTextCreated !== null) {
        this.isLoadingComposantActive = false;
        this.isContactTextCreatedSuccess = true;
        setTimeout(() => {
          this.isContactTextCreatedSuccess = false;
        }, 3000);
      }
    });
  }
}
