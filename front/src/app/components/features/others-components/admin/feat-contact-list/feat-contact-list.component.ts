import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/shared/services/contact/contact.service';

@Component({
  selector: 'app-feat-contact-list',
  templateUrl: './feat-contact-list.component.html',
  styleUrls: ['./feat-contact-list.component.scss'],
})
export class FeatContactListComponent {
  @Input() isAdminMod!: boolean;
  @Input() admin!: User;
  contactList: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    if (this.isAdminMod) {
      this.contactService.getContactList().subscribe((contactListFromDB) => {
        this.contactList = contactListFromDB;
        this.sortContactListByTimestamp();
      });
    } else {
      this.contactService.getContactList().subscribe((contactListFromDB) => {
        this.contactList = contactListFromDB;
        this.sortContactListByTimestamp();
      });
    }
  }

  private sortContactListByTimestamp() {
    this.contactList.sort(
      (contactA, contactB) =>
        new Date(contactB.timestamp).getTime() -
        new Date(contactA.timestamp).getTime()
    );
  }
}
