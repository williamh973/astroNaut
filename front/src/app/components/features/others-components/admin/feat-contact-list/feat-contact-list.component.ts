import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/shared/services/contact/contact.service';

@Component({
  selector: 'app-feat-contact-list',
  templateUrl: './feat-contact-list.component.html',
  styleUrls: ['./feat-contact-list.component.scss'],
})
export class FeatContactListComponent {
  contactList: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContactList().subscribe((contactListFromDB) => {
      this.contactList = contactListFromDB.sort((contactA, contactB) => {
        const timestampA = new Date(contactA.timestamp ?? new Date(0));
        const timestampB = new Date(contactB.timestamp ?? new Date(0));
        return timestampB.getTime() - timestampA.getTime();
      });
      console.log(contactListFromDB);
    });
  }
}
