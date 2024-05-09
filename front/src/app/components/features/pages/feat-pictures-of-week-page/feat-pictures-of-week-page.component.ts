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
  
  constructor(private pictureOfWeekCardService: PictureOfWeekCardService) {}


  ngOnInit() {
    this.onGetPictureOfWeekCardList();
  }


  onGetPictureOfWeekCardList() {
    this.pictureOfWeekCardService.getCardList().subscribe(
      (cardListFromDatabase: PictureOfWeekCard[]) => {
        this.pictureOfWeekCardList = cardListFromDatabase;
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

  onRecevedSelectedIndex() {

  }

}
