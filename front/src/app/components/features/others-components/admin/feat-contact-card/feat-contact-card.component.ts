import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactFormPopupService } from 'src/app/shared/services/contact-form-popup/contact-form-popup.service';
import { ContactService } from 'src/app/shared/services/contact/contact.service';

@Component({
  selector: 'app-feat-contact-card',
  templateUrl: './feat-contact-card.component.html',
  styleUrls: ['./feat-contact-card.component.scss'],
})
export class FeatContactCardComponent {
  @Input() contact!: Contact;
  isLoadingComposantActive: boolean = false;
  isContactCardDeleteSuccess: boolean = false;
  isContactCardDeleteError: boolean = false;
  isContactReplyFormOpen: boolean = false;
  adminRole: string = 'ROLE_ADMIN';

  constructor(private contactService: ContactService) {}

  onOpenContactFormForReply() {
    this.isContactReplyFormOpen = true;
  }

  onDeleteContactCard() {
    this.isLoadingComposantActive = true;
    this.contactService.deleteContact(this.contact.id!).subscribe(
      () => {
        this.isLoadingComposantActive = false;
        this.isContactCardDeleteSuccess = true;

        setTimeout(() => {
          this.isContactCardDeleteSuccess = false;
        }, 2_500);
      },
      () => {
        this.isLoadingComposantActive = false;
        this.isContactCardDeleteError = true;

        setTimeout(() => {
          this.isContactCardDeleteError = false;
        }, 2_500);
      }
    );
  }
}
