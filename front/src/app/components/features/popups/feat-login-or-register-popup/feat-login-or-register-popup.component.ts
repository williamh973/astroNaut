import { Component } from '@angular/core';
import { LoginOrRegisterPopupService } from 'src/app/shared/services/login-or-register-popup/login-or-register-popup.service';

@Component({
  selector: 'app-feat-login-or-register-popup',
  templateUrl: './feat-login-or-register-popup.component.html',
  styleUrls: ['./feat-login-or-register-popup.component.scss'],
})
export class FeatLoginOrRegisterPopupComponent {
  isLoginOrRegisterPopupOpen: boolean = false;
  isLoginFormOpen: boolean = false;
  isRegisterFormOpen: boolean = false;

  constructor(
    public loginOrRegisterPopupService: LoginOrRegisterPopupService
  ) {}

  ngOnInit(): void {
    this.loginOrRegisterPopupService.isAccountPopupOpen$.subscribe(
      (isLoginOrRegisterPopupOpen: boolean) => {
        this.isLoginOrRegisterPopupOpen = isLoginOrRegisterPopupOpen;
      }
    );
  }

  onOpenLoginForm(isButtonClicked: boolean) {
    if (isButtonClicked) {
      this.isLoginFormOpen = true;
    }
  }

  onOpenRegisterForm(isButtonClicked: boolean) {
    if (isButtonClicked) {
      this.isRegisterFormOpen = true;
    }
  }

  onClosePopup(isCloseButtonActivated: boolean): void {
    if (isCloseButtonActivated) {
      this.loginOrRegisterPopupService.closePopup();
    }
  }

  onCloseLoginForm(isLoginFormOpen: boolean) {
    this.isLoginFormOpen = isLoginFormOpen;
  }

  onCloseRegisterForm(isRegisterFormOpen: boolean) {
    this.isRegisterFormOpen = isRegisterFormOpen;
  }
}
