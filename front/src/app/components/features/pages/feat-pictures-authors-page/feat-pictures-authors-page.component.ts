import { Component } from '@angular/core';
import { PictureAuthorCard } from 'src/app/models/cards/picture-author-card.model';
import { PictureAuthorCardService } from 'src/app/shared/services/picture-author-card.service';

@Component({
  selector: 'app-feat-pictures-authors-page',
  templateUrl: './feat-pictures-authors-page.component.html',
  styleUrls: ['./feat-pictures-authors-page.component.scss']
})
export class FeatPicturesAuthorsPageComponent {

 
  pictureAuthorCardList: PictureAuthorCard[] = [];
  isLeftMenuOpen: boolean = false;
  isLeftMenuAnimationWhenOpen: boolean = false;
  isLeftMenuItemsClickEnable:  boolean = false;
  isPictureAuthorPageOpen: boolean = true;

  constructor(private pictureAuthorCardService: PictureAuthorCardService) {}


  ngOnInit() {
    this.onGetPictureAuthorCardList();
  }


  onGetPictureAuthorCardList() {
    this.pictureAuthorCardService.getCardList().subscribe(
      (cardListFromDatabase: PictureAuthorCard[]) => {
        this.pictureAuthorCardList = cardListFromDatabase;
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

}
