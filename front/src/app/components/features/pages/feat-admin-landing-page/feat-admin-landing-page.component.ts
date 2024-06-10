import { Component, Input } from '@angular/core';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-feat-admin-landing-page',
  templateUrl: './feat-admin-landing-page.component.html',
  styleUrls: ['./feat-admin-landing-page.component.scss'],
})
export class FeatAdminLandingPageComponent {
  @Input() role!: string;
  @Input() userMail!: string;

  newsCard: NewsCard = new NewsCard(
    [],
    '',
    '',
    '',
    '',
    0,
    new Date(),
    0,
    0,
    [],
    new User('', '', 'ROLE_ADMIN', false, [], [], [])
  );

  isEditNewsCardFormOpen: boolean = false;
  isCreateMod: boolean = false;
  isAdminMod = true;

  ngOnInit() {
    this.newsCard.user.email = this.userMail;
  }

  onEditNewsCardFormOpen() {
    this.isEditNewsCardFormOpen = !this.isEditNewsCardFormOpen;
    this.isCreateMod = true;
  }

  onCloseEditNewsCardForm(isEditNewsCardFormOpen: boolean) {
    this.isEditNewsCardFormOpen = isEditNewsCardFormOpen;
  }
}
