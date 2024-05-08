import { Component } from '@angular/core';
import { PictureOfWeekCard } from 'src/app/models/cards/picture-of-week-card.model';
import { PictureOfWeekCardService } from 'src/app/shared/services/picture-of-week-card.service';

@Component({
  selector: 'app-feat-pictures-authors-page',
  templateUrl: './feat-pictures-authors-page.component.html',
  styleUrls: ['./feat-pictures-authors-page.component.scss']
})
export class FeatPicturesAuthorsPageComponent {

 
  pictureOfWeekCardList: PictureOfWeekCard[] = [];
  isLeftMenuOpen: boolean = false;
  isLeftMenuAnimationWhenOpen: boolean = false;
  isLeftMenuItemsClickEnable:  boolean = false;
  // isPictureWeekPageOpen: boolean = false;

  constructor(private pictureOfWeekCardService: PictureOfWeekCardService) {}


  ngOnInit() {
    this.onGetPictureOfWeekCardList();
    // console.log(this.isPictureWeekPageOpen);
    
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

}
