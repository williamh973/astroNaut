import { Component } from '@angular/core';

@Component({
  selector: 'app-feat-pictures-of-week-page',
  templateUrl: './feat-pictures-of-week-page.component.html',
  styleUrls: ['./feat-pictures-of-week-page.component.scss']
})
export class FeatPicturesOfWeekPageComponent {
  
  // isPictureWeekPageOpen!: boolean;
  isLeftMenuOpen: boolean = false;
  isLeftMenuAnimationWhenOpen: boolean = false;
  isLeftMenuItemsClickEnable:  boolean = false;


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
