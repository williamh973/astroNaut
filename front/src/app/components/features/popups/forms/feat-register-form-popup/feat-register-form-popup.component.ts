import { Component, EventEmitter, Output } from '@angular/core';
import { UserRegister } from 'src/app/models/user/user-register.model';
import { AuthService } from 'src/app/shared/services/user/auth/auth.service';

@Component({
  selector: 'app-feat-register-form-popup',
  templateUrl: './feat-register-form-popup.component.html',
  styleUrls: ['./feat-register-form-popup.component.scss'],
})
export class FeatRegisterFormPopupComponent {
  @Output() isRegisterFormOpen = new EventEmitter<boolean>();

  userRegister: UserRegister = new UserRegister('', '', '', '', '');
  isAnimationPopupSignInStatusActive: boolean = false;
  isTrackHttpStatusPopupOpen: boolean = false;

  constructor(private httpS: AuthService) {}

  onSubmit() {
    this.httpS.signUp(this.userRegister);
    this.isTrackHttpStatusPopupOpen = true;

    setTimeout(() => {
      this.isRegisterFormOpen.emit(false);
    }, 2500);
  }

  onClosePopup() {
    this.isRegisterFormOpen.emit(false);
    this.isTrackHttpStatusPopupOpen = false;
  }
}
