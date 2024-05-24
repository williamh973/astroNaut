import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  onLogout(): void {
    this.lsService.clearTokenAndUserEmail();
    this.tokenService.resetToken();
    this.router.navigate(['/astronaut/news']);
  }
}
