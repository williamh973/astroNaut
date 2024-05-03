import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ui-burger-menu-button',
  templateUrl: './ui-burger-menu-button.component.html',
  styleUrls: ['./ui-burger-menu-button.component.scss']
})
export class UiBurgerMenuButtonComponent {

  isPictureWeekPageOpen!: boolean

  private readonly _DELAY_BEFORE_MENU_ITEMS_CLICK_ENABLE: number = 1000;

  @Output() isLeftMenuOpen = new EventEmitter<boolean>()
  @Output() isLeftMenuAnimationWhenOpen = new EventEmitter<boolean>()
  @Output() isLeftMenuItemsClickEnable = new EventEmitter<boolean>()


  onOpenLeftMenu() {
    this.isLeftMenuOpen.emit(true);
    this.isLeftMenuAnimationWhenOpen.emit(true);
       setTimeout(() => {
         this.isLeftMenuItemsClickEnable.emit(true);
       }, this._DELAY_BEFORE_MENU_ITEMS_CLICK_ENABLE);
  }

}
