import { Component } from '@angular/core';


@Component({
  selector: 'app-feat-login-or-register-form-popup',
  templateUrl: './feat-login-or-register-form-popup.component.html',
  styleUrls: ['./feat-login-or-register-form-popup.component.scss']
})
export class FeatLoginOrRegisterFormPopupComponent {

  // isLoginOrRegisterPopupOpen: boolean = false;
  // constructor(public loginOrRegisterPopupService: LoginOrRegisterPopupServiceService ) {}
  isLoginFormOpen: boolean = false;
  isRegisterFormOpen: boolean = false;

  constructor() {}

  onOpenLoginForm() {
    this.isLoginFormOpen = true;
  };

  onOpenRegisterForm() {
    this.isRegisterFormOpen = true;
  };

}
