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

  userRegister: UserRegister = new UserRegister(
    '',
    '',
    '',
    '',
    '',
    'ROLE_USER'
  );
  isAnimationPopupSignInStatusActive: boolean = false;
  isTrackHttpStatusPopupOpen: boolean = false;
  isSubmitButtonEnabled: boolean = false;

  constructor(private httpS: AuthService) {}

  onSubmit(isButtonClicked: boolean) {
    if (isButtonClicked) {
      this.httpS.signUp(this.userRegister);
      this.isTrackHttpStatusPopupOpen = true;

      setTimeout(() => {
        this.isTrackHttpStatusPopupOpen = true;
        this.isRegisterFormOpen.emit(false);
      }, 2500);
    }
  }

  onClosePopup(isCloseButtonActivated: boolean) {
    if (isCloseButtonActivated) {
      this.isRegisterFormOpen.emit(false);
      this.isTrackHttpStatusPopupOpen = false;
    }
  }
}
