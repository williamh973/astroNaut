import { Component, EventEmitter, Output } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-ui-admin-landing-navbar',
  templateUrl: './ui-admin-landing-navbar.component.html',
  styleUrls: ['./ui-admin-landing-navbar.component.scss'],
})
export class UiAdminLandingNavbarComponent {
  adminMenuItemList: Menu[] = [
    new Menu('Ajouter une actualitée', ''),
    new Menu(`Cartes d'actualités`, ''),
    new Menu(`Boite de réception`, ''),
  ];

  @Output() isEditNewsCardFormOpen = new EventEmitter<boolean>();
  @Output() isNewsCardListOpen = new EventEmitter<boolean>();
  @Output() isContactListOpen = new EventEmitter<boolean>();

  onOpenEditNewsCardForm() {
    this.isEditNewsCardFormOpen.emit(true);
  }

  onOpenNewsCardList() {
    this.isNewsCardListOpen.emit(true);
  }

  onOpenContactList() {
    this.isContactListOpen.emit(true);
  }

  onAdminMenuItemClick(menuItem: Menu) {
    switch (menuItem.label) {
      case 'Ajouter une actualitée':
        this.onOpenEditNewsCardForm();
        break;
      case "Cartes d'actualités":
        this.onOpenNewsCardList();
        break;
      case 'Boite de réception':
        this.onOpenContactList();
        break;
    }
  }
}
