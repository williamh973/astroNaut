import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu.model';
import { LoginOrRegisterPopupService } from 'src/app/shared/services/login-or-register-popup/login-or-register-popup.service';
import { TokenService } from 'src/app/shared/services/token/token.service';

@Component({
  selector: 'app-ui-navbar',
  templateUrl: './ui-navbar.component.html',
  styleUrls: ['./ui-navbar.component.scss'],
})
export class UiNavbarComponent {
  leftMenuItemList: Menu[] = [
    new Menu('Actualités', '/astronaut/news'),
    new Menu(`Lieux d'observation`, '/astronaut/location'),
    new Menu('Contribuer', ''),
    new Menu('A propos', '/astronaut/about'),
    new Menu('Galerie', '/astronaut/gallery/pictures-of-the-week'),
    new Menu('Contact', ''),
    new Menu('Mon espace', ''),
  ];

  @Input() isLeftMenuAnimationWhenOpen!: boolean;
  @Input() isLeftMenuItemsClickEnable!: boolean;
  @Output() isLeftMenuOpen = new EventEmitter<boolean>();

  isGaleryDropdownMenuOpen: boolean = false;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private loginOrRegisterPopupService: LoginOrRegisterPopupService
  ) {}

  onCloseLeftMenu() {
    this.isLeftMenuOpen.emit(false);
  }

  onOpenContributePage() {
    const token = this.tokenService.isCheckTokenInLocalStorage();
    if (token) {
      this.router.navigate(['/astronaut/to-contribute']);
    } else {
      this.loginOrRegisterPopupService.openPopup();
    }
  }

  onContactPopupFormOpen() {
    const token = this.tokenService.isCheckTokenInLocalStorage();
    if (token) {
      this.router.navigate(['/astronaut/contact']);
    } else {
      this.loginOrRegisterPopupService.openPopup();
    }
  }

  onMySpacePageOpen() {
    const token = this.tokenService.isCheckTokenInLocalStorage();
    if (token) {
      this.router.navigate(['/astronaut/landing-page']);
    } else {
      this.loginOrRegisterPopupService.openPopup();
    }
  }

  onLeftMenuItemClick(menuItem: Menu) {
    switch (menuItem.label) {
      case 'Actualités':
        this.isLeftMenuOpen.emit(false);
        this.router.navigate(['/astronaut/news']);
        break;
      case `Lieux d'observation`:
        this.isLeftMenuOpen.emit(false);
        this.router.navigate(['/astronaut/locations']);
        break;
      case 'Contribuer':
        this.isLeftMenuOpen.emit(false);
        this.onOpenContributePage();
        break;
      case 'A propos':
        this.isLeftMenuOpen.emit(false);
        this.router.navigate(['/astronaut/about']);
        break;
      case 'Galerie':
        this.isLeftMenuOpen.emit(false);
        this.router.navigate(['/astronaut/gallery/pictures-of-the-week']);
        break;
      case 'Contact':
        this.isLeftMenuOpen.emit(false);
        this.onContactPopupFormOpen();
        break;
      case 'Mon espace':
        this.isLeftMenuOpen.emit(false);
        this.onMySpacePageOpen();
        break;
    }
  }
}
