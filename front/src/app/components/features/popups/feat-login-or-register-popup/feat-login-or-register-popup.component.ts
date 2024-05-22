import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
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
  // private popupSubscription: Subscription;

  constructor(
    public loginOrRegisterPopupService: LoginOrRegisterPopupService
  ) {}

  ngOnInit(): void {
    // Subscribe to the observable to track the popup state
    this.loginOrRegisterPopupService.isAccountPopupOpen$.subscribe(
      (isOpen: boolean) => {
        this.isLoginOrRegisterPopupOpen = isOpen;
      }
    );
  }

  onOpenLoginForm() {
    this.isLoginFormOpen = true;
  }

  onOpenRegisterForm() {
    this.isRegisterFormOpen = true;
  }

  onClosePopup(): void {
    this.loginOrRegisterPopupService.closePopup();
  }
}
