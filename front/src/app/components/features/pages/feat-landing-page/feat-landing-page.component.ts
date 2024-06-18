import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { TokenService } from 'src/app/shared/services/token/token.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-feat-landing-page',
  templateUrl: './feat-landing-page.component.html',
  styleUrls: ['./feat-landing-page.component.scss'],
})
export class FeatLandingPageComponent {
  user: User = new User(
    '',
    '',
    '',
    '',
    'ROLE_USER' || 'ROLE_ADMIN',
    false,
    [],
    [],
    []
  );
  role: string = '';
  userMail: string = '';
  isLeftMenuOpen: boolean = false;
  isLeftMenuAnimationWhenOpen: boolean = false;
  isLeftMenuItemsClickEnable: boolean = false;

  constructor(
    private lsService: LocalStorageService,
    private tokenService: TokenService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.onExtractRoleFromToken();
    this.onGetUserCurrentData();
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

  private onGetUserCurrentData() {
    this.userService.getCurrentUserData().subscribe(
      (user: User) => {
        this.user = user;
      },
      (error: any) => {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur :",
          error
        );
      }
    );
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
