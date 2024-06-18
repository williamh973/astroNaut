import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/shared/services/contact/contact.service';

@Component({
  selector: 'app-feat-contact-card',
  templateUrl: './feat-contact-card.component.html',
  styleUrls: ['./feat-contact-card.component.scss'],
})
export class FeatContactCardComponent {
  @Input() contact!: Contact;
  @Input() isAdminMod!: boolean;
  isLoadingComposantActive: boolean = false;
  isContactCardDeleteSuccess: boolean = false;
  isContactCardDeleteError: boolean = false;
  isReplyFormOpen: boolean = false;
  adminRole: string = 'ROLE_ADMIN';

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    // console.log(this.contact);
  }

  onOpenContactFormForReply() {
    this.isReplyFormOpen = true;
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
