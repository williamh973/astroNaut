import { Component, Input } from '@angular/core';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { User } from 'src/app/models/user.model';
import { ContactFormPopupService } from 'src/app/shared/services/contact-form-popup/contact-form-popup.service';

@Component({
  selector: 'app-feat-admin-landing-page',
  templateUrl: './feat-admin-landing-page.component.html',
  styleUrls: ['./feat-admin-landing-page.component.scss'],
})
export class FeatAdminLandingPageComponent {
  @Input() admin!: User;

  newsCard: NewsCard = new NewsCard(
    [],
    '',
    '',
    0,
    new Date(),
    0,
    0,
    [],
    new User('', '', '', '', 'ROLE_ADMIN', false, [], [], [])
  );

  isEditNewsCardFormOpen: boolean = false;
  isNewsCardListOpen: boolean = false;
  isContactListOpen: boolean = true;
  isCreateMod: boolean = false;
  isAdminMod = true;

  constructor(private contactFormService: ContactFormPopupService) {}

  ngOnInit() {
    this.newsCard.user.email = this.admin.email;
    this.contactFormService.isContactFormPopupOpen$.subscribe(
      (popupOpen) => {}
    );
  }

  onOpenEditNewsCardForm(isEditNewsCardFormOpen: boolean) {
    this.isEditNewsCardFormOpen = isEditNewsCardFormOpen;
    this.isCreateMod = true;
  }

  onOpenNewsCardList(isNewsCardListOpen: boolean) {
    this.isNewsCardListOpen = isNewsCardListOpen;
  }

  onCloseEditNewsCardForm(isEditNewsCardFormOpen: boolean) {
    this.isEditNewsCardFormOpen = isEditNewsCardFormOpen;
  }

  onOpenContactList(isContactListOpen: boolean) {
    this.isContactListOpen = isContactListOpen;
  }
}
