import { Component } from '@angular/core';
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
    new Menu('Contact', '')
  ];

  rightMenuItemList: Menu[] = [
    new Menu('Mon espace', '/user-space')
  ];


  constructor(
    // private tokenService: TokenService,
    // public accountPopupService: AccountPopupService,
    private router: Router
    ) {}
 

    isMenuOpen: boolean = false;

    onOpenMenuToggle() {
      this.isMenuOpen = !this.isMenuOpen
    };

    onOpenContributePage() {
      // if (this.tokenService.isCheckTokenInLocalStorage()) {
    //     this.isEditCardFormOpen = !this.isEditCardFormOpen;
    //     this.accountPopupService.closePopup();
    //   } else {
    //     this.accountPopupService.openPopup();
    //   }
    };

    onContactPopupFormOpen() {
      // if (this.tokenService.isCheckTokenInLocalStorage()) {
      // this.isContactPopupFormOpen = !this.isContactPopupFormOpen;
      // } else {
      //   this.accountPopupService.openPopup();
      // }
    };  

    onMenuItemClick(menuItem: Menu) {
      switch (menuItem.label) {
        case 'Actualités':
          this.router.navigate(['/news']);
          break;
          case `Lieux d'observation`:
            this.router.navigate([`/locations`]);
          break;
          case 'Contribuer':
          this.onOpenContributePage();
          break;
          case 'A propos':
          this.router.navigate(['/about']);
          break;
          case 'Galerie':
            this.router.navigate(['/galery']);
          break;
          case 'Contact':
            this.onContactPopupFormOpen();
          break;
          case 'Mon espace':
            this.router.navigate(['/user-space']);
          break;
      }  
    };

}
