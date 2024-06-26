import { Component } from '@angular/core';

@Component({
  selector: 'app-feat-to-contribute-page',
  templateUrl: './feat-to-contribute-page.component.html',
  styleUrls: ['./feat-to-contribute-page.component.scss'],
})
export class FeatToContributePageComponent {
  isAddImageFormOpen: boolean = false;
  isAddLocationFormOpen: boolean = false;
  isAddImageSpecialEventFormOpen: boolean = false;
  isLeftMenuOpen: boolean = false;
  isLeftMenuAnimationWhenOpen: boolean = false;
  isLeftMenuItemsClickEnable: boolean = false;
  buttonName: string = '';

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

  onOpenAddImageForm() {
    this.isAddImageFormOpen = true;
    this.isAddImageSpecialEventFormOpen = !this.isAddImageSpecialEventFormOpen;
    this.isAddLocationFormOpen = false;
  }

  onOpenAddLocationForm() {
    this.isAddLocationFormOpen = true;
    this.isAddImageFormOpen = false;
    this.isAddImageSpecialEventFormOpen = false;
  }

  onCloseAddImageFormAfterOperationCompleted(isAddImageFormOpen: boolean) {
    this.isAddImageFormOpen = isAddImageFormOpen;
  }

  onCloseAddLocationFormAfterOperationCompleted(
    isAddLocationFormOpen: boolean
  ) {
    this.isAddLocationFormOpen = isAddLocationFormOpen;
  }

  onCloseAddImageForm(isAddImageFormOpen: boolean) {
    this.isAddImageFormOpen = isAddImageFormOpen;
  }
}
