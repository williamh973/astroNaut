import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu-model';

@Component({
  selector: 'app-ui-navbar',
  templateUrl: './ui-navbar.component.html',
  styleUrls: ['./ui-navbar.component.scss']
})
export class UiNavbarComponent {
  
  
  leftMenuItemList: Menu[] = [
    new Menu('Actualités', '/news'),
    new Menu(`Lieux d'observation`, '/location'),
    new Menu('Contribuer', ''),
    new Menu('A propos', '/about'),
    new Menu('Galerie', '/galery'),
    new Menu('Contact', ''),
    new Menu('Mon espace', '/user-space')
  ];

  galeryDropdownMenuItemList: Menu[] = [
    new Menu('Photos de la semaine', '/news'),
    new Menu(`Astres`, '/location'),
    new Menu('Nébuleuses', ''),
    new Menu('Galaxies', '/about'),
    new Menu('Aurores', '/galery'),
    new Menu('Événements spéciaux', '')
  ];

  @Input() isLeftMenuAnimationWhenOpen!: boolean;
  @Input() isLeftMenuItemsClickEnable!: boolean;
  @Output() isLeftMenuOpen = new EventEmitter<boolean>()
  
  isLoginOrRegisterPopupOpen: boolean = false;
  isGaleryDropdownMenuOpen: boolean = false;

  constructor(
    // private tokenService: TokenService,
    private router: Router
    ) {}

    onCloseLeftMenu() {
      this.isLeftMenuOpen.emit(false);
    }

    

    onOpenContributePage() {
      // const checkToken = this.tokenService.isCheckTokenInLocalStorage();
      // if (checkToken) {
        this.router.navigate(['/to-contribute']);
        // } else {
          // this.isLoginOrRegisterPopupOpen = true;
        // this.loginOrRegisterPopupService.openPopup();
      // }
    };

    onContactPopupFormOpen() {
      // if (this.tokenService.isCheckTokenInLocalStorage()) {
        this.router.navigate(['/contact']);
      // } else {
      //   this.accountPopupService.openPopup();
      // }
    };  

    onLeftMenuItemClick(menuItem: Menu) {
      switch (menuItem.label) {
        case 'Actualités':
          this.isLeftMenuOpen.emit(false);
          this.router.navigate(['/news']);
          break;
          case `Lieux d'observation`:
            this.isLeftMenuOpen.emit(false);
            this.router.navigate([`/locations`]);
          break;
          case 'Contribuer':
            this.isLeftMenuOpen.emit(false);
            this.onOpenContributePage();
          break;
          case 'A propos':
            this.isLeftMenuOpen.emit(false);
            this.router.navigate(['/about']);
          break;
          case 'Galerie':
            this.isLeftMenuOpen.emit(false);
            this.isGaleryDropdownMenuOpen = !this.isGaleryDropdownMenuOpen;
          break;
          case 'Contact':
            this.isLeftMenuOpen.emit(false);
            this.onContactPopupFormOpen();
          break;
          case 'Mon espace':
            this.isLeftMenuOpen.emit(false);
            this.router.navigate(['/user-space']);
          break;
      }  
    };

    onDropdownMenuItemClick(menuItem: Menu) {
      switch (menuItem.label) {
        case 'Photos de la semaine':
          this.router.navigate(['/pictures-of-the-week']);
          this.isGaleryDropdownMenuOpen = !this.isGaleryDropdownMenuOpen;
        break;
        case 'Astres':
          this.router.navigate(['/pictures-of-the-week']);
        break;
        case 'Nébuleuses':
          this.router.navigate(['/pictures-of-nebulae']);
        break;
        case 'Galaxies':
          this.router.navigate(['/pictures-of-galaxy']);
        break;
        case 'Aurores':
          this.router.navigate(['/pictures-of-auroras']);
        break;
        case 'Événements spéciaux':
          this.router.navigate(['/pictures-of-special-events']);
        break;
      }
    }
}
