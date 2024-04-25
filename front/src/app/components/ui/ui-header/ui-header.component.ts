import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UiHeaderComponent {

  private readonly _DELAY_BEFORE_MENU_ITEMS_CLICK_ENABLE: number = 1000;

  isLeftMenuOpen: boolean = false;
  isLeftMenuAnimationWhenOpen: boolean = false;
  isLeftMenuItemsClickEnable:  boolean = false;

  onOpenLeftMenu() {
    this.isLeftMenuOpen = true;
    this.isLeftMenuAnimationWhenOpen = true;
       setTimeout(() => {
         this.isLeftMenuItemsClickEnable = true;
       }, this._DELAY_BEFORE_MENU_ITEMS_CLICK_ENABLE);
  }

  forCloseLeftMenu(isLeftMenuOpen: boolean) {
    this.isLeftMenuOpen = isLeftMenuOpen;
  }
}
