import { Component } from '@angular/core';
import { PictureSpecialEventCard } from 'src/app/models/cards/picture-special-event-card.model';
import { PictureSpecialEventCardService } from 'src/app/shared/services/picture-special-event-card.service';

@Component({
  selector: 'app-feat-pictures-special-events-page',
  templateUrl: './feat-pictures-special-events-page.component.html',
  styleUrls: ['./feat-pictures-special-events-page.component.scss']
})
export class FeatPicturesSpecialEventsPageComponent {

  pictureSpecialEventCardList: PictureSpecialEventCard[] = [];
  isLeftMenuOpen: boolean = false;
  isLeftMenuAnimationWhenOpen: boolean = false;
  isLeftMenuItemsClickEnable:  boolean = false;
  

  constructor(private pictureSpecialEventCardService: PictureSpecialEventCardService) {}


  ngOnInit() {
    this.onGetPictureOfWeekCardList();
  }


  onGetPictureOfWeekCardList() {
    // this.pictureSpecialEventCardService.getCardList().subscribe(
    //   (cardListFromDatabase: PictureSpecialEventCard[]) => {
    //     this.pictureSpecialEventCardList = cardListFromDatabase;
    //     }
    // );
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

}
