import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { TokenService } from 'src/app/shared/services/token/token.service';

@Component({
  selector: 'app-feat-landing-page',
  templateUrl: './feat-landing-page.component.html',
  styleUrls: ['./feat-landing-page.component.scss'],
})
export class FeatLandingPageComponent {
  role: string = '';
  userMail: string = '';
  isLeftMenuOpen: boolean = false;
  isLeftMenuAnimationWhenOpen: boolean = false;
  isLeftMenuItemsClickEnable: boolean = false;

  constructor(
    private lsService: LocalStorageService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.onExtractRoleFromToken();
  }

  private onExtractRoleFromToken() {
    this.tokenService
      ._getTokenDetailsSubject$()
      .subscribe((decodedToken: any) => {
        if (decodedToken) {
          this.role = decodedToken.role;
          this.userMail = decodedToken.sub;
        } else {
          this.router.navigate(['/astronaut/news']);
        }
      });
  }

  onLogout(): void {
    this.lsService.clearTokenAndUserEmail();
    this.tokenService.resetToken();
    this.router.navigate(['/astronaut/news']);
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
