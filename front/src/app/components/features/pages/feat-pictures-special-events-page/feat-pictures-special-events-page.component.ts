import { Component } from '@angular/core';
import { PictureSpecialEventCard } from 'src/app/models/cards/picture-special-event-card.model';
import { PictureSpecialEventCardService } from 'src/app/shared/services/cards/picture-special-event-card/picture-special-event-card.service';
import { LoginOrRegisterPopupService } from 'src/app/shared/services/login-or-register-popup/login-or-register-popup.service';

@Component({
  selector: 'app-feat-pictures-special-events-page',
  templateUrl: './feat-pictures-special-events-page.component.html',
  styleUrls: ['./feat-pictures-special-events-page.component.scss'],
})
export class FeatPicturesSpecialEventsPageComponent {
  pictureSpecialEventCardList: PictureSpecialEventCard[] = [];
  transferredPictureCardList: PictureSpecialEventCard[] = [];
  isPictureSpecialEventPageOpen: boolean = true;
  isLoginOrRegisterPopupOpen: boolean = false;

  constructor(
    private pictureSpecialEventCardService: PictureSpecialEventCardService,
    private loginOrRegisterPopupService: LoginOrRegisterPopupService
  ) {}

  ngOnInit() {
    this.onGetPictureSpecialEventCardList();
    this.onLoginOrRegisterFormSouscription();
  }

  onLoginOrRegisterFormSouscription() {
    this.loginOrRegisterPopupService.isAccountPopupOpen$.subscribe((result) => {
      if (result) {
        this.isLoginOrRegisterPopupOpen = true;
      } else {
        this.isLoginOrRegisterPopupOpen = false;
      }
    });
  }

  onGetPictureSpecialEventCardList() {
    this.pictureSpecialEventCardService
      .getCardList()
      .subscribe((cardListFromDatabase: PictureSpecialEventCard[]) => {
        this.pictureSpecialEventCardList = cardListFromDatabase;
      });
  }
}
