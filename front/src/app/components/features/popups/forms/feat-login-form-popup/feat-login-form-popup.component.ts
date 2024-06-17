import { Component, EventEmitter, Output } from '@angular/core';
import { UserAuth } from 'src/app/models/user/user-auth.model';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { AuthService } from 'src/app/shared/services/user/auth/auth.service';

@Component({
  selector: 'app-feat-login-form-popup',
  templateUrl: './feat-login-form-popup.component.html',
  styleUrls: ['./feat-login-form-popup.component.scss'],
})
export class FeatLoginFormPopupComponent {
  @Output() isLoginFormOpen = new EventEmitter<boolean>();
  isTrackHttpStatusPopupOpen: boolean = false;
  isSubmitButtonEnabled: boolean = false;

  userAuth: UserAuth = new UserAuth('', '');

  constructor(
    private httpS: AuthService,
    private LsService: LocalStorageService
  ) {}

  onClosePopup(isCloseButtonActivated: boolean) {
    if (isCloseButtonActivated) {
      this.isLoginFormOpen.emit(false);
    }
  }

  onSubmitAuth(): void {
    this.LsService.clearTokenAndUserEmail();
    this.httpS.signIn(this.userAuth);

    setTimeout(() => {
      this.isTrackHttpStatusPopupOpen = true;

      setTimeout(() => {
        this.isTrackHttpStatusPopupOpen = false;
      }, 2_500);
    }, 500);
  }

  onCheckInputCompleted() {
    this.isSubmitButtonEnabled =
      this.userAuth.email.length > 0 && this.userAuth.password.length > 0;
  }
}
