import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { TokenService } from 'src/app/shared/services/token/token.service';

@Component({
  selector: 'app-feat-user-landing-page',
  templateUrl: './feat-user-landing-page.component.html',
  styleUrls: ['./feat-user-landing-page.component.scss'],
})
export class FeatUserLandingPageComponent {
  constructor(
    private lsService: LocalStorageService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  role: string = '';
  userMail: string = '';
  isAddNewsCardFormOpen: boolean = false;

  ngOnInit() {
    this.onGetTokenAndExtractUserRole();
  }

  private onGetTokenAndExtractUserRole() {
    this.tokenService
      ._getTokenDetailsSubject$()
      .pipe(
        map((decodedToken: any) => ({
          role: decodedToken.role,
          sub: decodedToken.sub,
        }))
      )
      .subscribe((tokenDetails: any) => {
        this.role = tokenDetails.role;
        this.userMail = tokenDetails.sub;
      });
  }

  onLogout(): void {
    this.lsService.clearTokenAndUserEmail();
    this.tokenService.resetToken();
    this.router.navigate(['/astronaut/news']);
  }

  onAddNewsCardFormOpen() {
    this.isAddNewsCardFormOpen = !this.isAddNewsCardFormOpen;
  }
}
