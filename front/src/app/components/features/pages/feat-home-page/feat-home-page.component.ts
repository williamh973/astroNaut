import { Component } from '@angular/core';
import { LoginOrRegisterPopupService } from 'src/app/shared/services/login-or-register-popup/login-or-register-popup.service';

@Component({
  selector: 'app-feat-home-page',
  templateUrl: './feat-home-page.component.html',
  styleUrls: ['./feat-home-page.component.scss'],
})
export class FeatHomePageComponent {
  isSearchResultNotFound: boolean = false;
  displayNotFoundMessage!: string;
  isLoginOrRegisterPopupOpen: boolean = false;

  constructor(
    private loginOrRegisterPopupService: LoginOrRegisterPopupService
  ) {}

  ngOnInit() {
    this.loginOrRegisterPopupService.isAccountPopupOpen$.subscribe((result) => {
      if (result) {
        this.isLoginOrRegisterPopupOpen = true;
      } else {
        this.isLoginOrRegisterPopupOpen = false;
      }
    });
  }

  onSearchResultChange(isSearchResultNotFound: boolean): void {
    this.isSearchResultNotFound = isSearchResultNotFound;
  }

  onNotFoundMessageResultChange(displayNotFoundMessage: string): void {
    this.displayNotFoundMessage = displayNotFoundMessage;
  }
}
