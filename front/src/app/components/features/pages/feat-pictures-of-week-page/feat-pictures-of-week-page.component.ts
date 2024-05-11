import { Component } from '@angular/core';
import { PictureOfWeekCard } from 'src/app/models/cards/picture-of-week-card.model';
import { PictureOfWeekCardService } from 'src/app/shared/services/picture-of-week-card.service';

@Component({
  selector: 'app-feat-pictures-of-week-page',
  templateUrl: './feat-pictures-of-week-page.component.html',
  styleUrls: ['./feat-pictures-of-week-page.component.scss']
})
export class FeatPicturesOfWeekPageComponent {

  
  pictureOfWeekCardList: PictureOfWeekCard[] = [];
  isLeftMenuOpen: boolean = false;
  isLeftMenuAnimationWhenOpen: boolean = false;
  isLeftMenuItemsClickEnable:  boolean = false;
  isPictureOfWeekPageOpen: boolean = true;
  elapsedTime: string = '';


  constructor(private pictureOfWeekCardService: PictureOfWeekCardService) {}


  ngOnInit() {
    this.onGetPictureOfWeekCardList();
  }
  

  onGetPictureOfWeekCardList() {
    this.pictureOfWeekCardService.getCardList().subscribe(
      (cardListFromDatabase: PictureOfWeekCard[]) => {
        this.pictureOfWeekCardList = cardListFromDatabase;
        
        if (this.pictureOfWeekCardList.length > 0) {
          this.calculateElapsedTime();
        }
      }
    );
  }

  onOpenLeftMenu(isLeftMenuOpen: boolean) {
    this.isLeftMenuOpen = isLeftMenuOpen;
  }

  startMenuAnimation(isLeftMenuAnimationWhenOpen: boolean) {
    this.isLeftMenuAnimationWhenOpen = isLeftMenuAnimationWhenOpen;
  }
  
  leftMenuItemsClickEnable(isLeftMenuItemsClickEnable: boolean) {
    this.isLeftMenuItemsClickEnable = isLeftMenuItemsClickEnable;
  }

  onCloseLeftMenu(isLeftMenuOpen: boolean) {
    this.isLeftMenuOpen = isLeftMenuOpen;
  }

  onToggleColorSvgBurgerButton(isPictureWeekPageOpen: boolean) {
    // this.isPictureWeekPageOpen = isPictureWeekPageOpen;
  }

 
  private calculateElapsedTime() {
      const currentTime = new Date().getTime();
      
      this.pictureOfWeekCardList.forEach((cards) => {
        const publishedTime = new Date(cards.timestamp).getTime();
        const elapsedTimeInMilliseconds = currentTime - publishedTime;
        
        const seconds = Math.floor(elapsedTimeInMilliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
    
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);
  
        this.showElapsedTime(
          seconds, 
          minutes, 
          hours, 
          days, 
          months, 
          years
          )
      })
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

    this.timeBeforeCardDeleted(days);
  } 

  private timeBeforeCardDeleted(days: number) {
    this.pictureOfWeekCardList.forEach((cards) => {
      cards.id;

      if (cards.id && days > 7) {
      console.log(cards);
 
      
        // this.pictureOfWeekCardService.deleteCard(this.pictureOfWeekCard.id).subscribe(
        //   () => {
        //     console.log('carte supprimée avec succès');
        //   },
        //   (error) => {
        //     console.log(error);
        //   }
        // );  
      }

    })
  }

}


