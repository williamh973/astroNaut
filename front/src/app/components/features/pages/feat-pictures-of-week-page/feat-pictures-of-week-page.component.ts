import { Component } from '@angular/core';
import { PictureOfWeekCard } from 'src/app/models/cards/picture-of-week-card.model';
import { PictureOfWeekCardService } from 'src/app/shared/services/cards/picture-of-week-card/picture-of-week-card.service';
import { LoginOrRegisterPopupService } from 'src/app/shared/services/login-or-register-popup/login-or-register-popup.service';

@Component({
  selector: 'app-feat-pictures-of-week-page',
  templateUrl: './feat-pictures-of-week-page.component.html',
  styleUrls: ['./feat-pictures-of-week-page.component.scss'],
})
export class FeatPicturesOfWeekPageComponent {
  pictureOfWeekCardList: PictureOfWeekCard[] = [];
  isPictureOfWeekPageOpen: boolean = true;
  elapsedTime: string = '';
  isLoginOrRegisterPopupOpen: boolean = false;

  constructor(
    private pictureOfWeekCardService: PictureOfWeekCardService,
    private loginOrRegisterPopupService: LoginOrRegisterPopupService
  ) {}

  ngOnInit() {
    this.onGetPictureOfWeekCardList();
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

  onGetPictureOfWeekCardList() {
    this.pictureOfWeekCardService
      .getCardList()
      .subscribe((cardListFromDatabase: PictureOfWeekCard[]) => {
        this.pictureOfWeekCardList = cardListFromDatabase;

        this.calculateElapsedTime(this.pictureOfWeekCardList);
      });
  }

  private getTime(
    publishedTime: number,
    pictureOfWeekCardList: PictureOfWeekCard[]
  ) {
    const currentTime = new Date().getTime();
    const elapsedTimeInMilliseconds = currentTime - publishedTime;

    const seconds = Math.floor(elapsedTimeInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    this.showElapsedTime(seconds, minutes, hours, days, months, years);

    this.cardListDeletedAfterSevenDays(days, pictureOfWeekCardList);
  }

  private calculateElapsedTime(pictureOfWeekCardList: PictureOfWeekCard[]) {
    pictureOfWeekCardList.forEach((pictureOfWeekCard) => {
      const pictureOfWeekCardPublishedTime = new Date(
        pictureOfWeekCard.timestamp
      ).getTime();
      this.getTime(pictureOfWeekCardPublishedTime, pictureOfWeekCardList);
    });
  }

  private showElapsedTime(
    seconds: number,
    minutes: number,
    hours: number,
    days: number,
    months: number,
    years: number
  ) {
    if (years > 0) {
      this.elapsedTime = years + ' ans';
    } else if (months > 0) {
      this.elapsedTime = months + ' mois';
    } else if (days > 0) {
      this.elapsedTime = days + ' jours';
    } else if (hours > 0) {
      this.elapsedTime = hours + ' heures';
    } else if (minutes > 0) {
      this.elapsedTime = minutes + ' minutes';
    } else {
      this.elapsedTime = seconds + ' secondes';
    }
  }

  private cardListDeletedAfterSevenDays(
    days: number,
    pictureOfWeekCardList: PictureOfWeekCard[]
  ) {
    if (pictureOfWeekCardList.length > 0) {
      pictureOfWeekCardList.forEach((cards) => {
        let cardId = cards.id;
        if (cardId && days > 7) {
          this.pictureOfWeekCardService.deleteCard(cardId).subscribe();
        }
      });
    }
  }
}
