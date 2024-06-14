import { Component, Input } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactFormPopupService } from 'src/app/shared/services/contact-form-popup/contact-form-popup.service';
import { ContactService } from 'src/app/shared/services/contact/contact.service';
import { LoginOrRegisterPopupService } from 'src/app/shared/services/login-or-register-popup/login-or-register-popup.service';
import { TokenService } from 'src/app/shared/services/token/token.service';

@Component({
  selector: 'app-feat-contact-form-popup',
  templateUrl: './feat-contact-form-popup.component.html',
  styleUrls: ['./feat-contact-form-popup.component.scss'],
})
export class FeatContactFormPopupComponent {
  @Input() isAdminMod!: boolean;
  contactMessage: Contact = new Contact(
    '',
    '',
    '',
    '',
    new Date(),
    new User('', '', 'ROLE_USER', false, [], [], [])
  );
  isLoginOrRegisterPopupOpen: boolean = false;
  isSubmitButtonEnabled: boolean = false;
  isLoadingComposantActive: boolean = false;
  isContactTextCreatedSuccess: boolean = false;
  isContactTextCreatedError: boolean = false;
  isLeftMenuOpen: boolean = false;
  isLeftMenuAnimationWhenOpen: boolean = false;
  isLeftMenuItemsClickEnable: boolean = false;
  isContactFormOpen: boolean = true;
  role: string = '';
  userMail: string = '';

  constructor(
    private contactService: ContactService,
    private loginOrRegisterPopupService: LoginOrRegisterPopupService,
    private contactFormService: ContactFormPopupService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.onExtractRoleFromToken();
    this.onLoginOrRegisterFormSouscription();
    console.log(this.isAdminMod);
  }

  private onExtractRoleFromToken() {
    this.tokenService
      ._getTokenDetailsSubject$()
      .subscribe((decodedToken: any) => {
        if (decodedToken) {
          this.role = decodedToken.role;
          this.userMail = decodedToken.sub;
        }
      });
  }

  onLoginOrRegisterFormSouscription() {
    this.loginOrRegisterPopupService.isAccountPopupOpen$.subscribe((result) => {
      if (result) {
        this.isLoginOrRegisterPopupOpen = true;
      } else {
        this.isLoginOrRegisterPopupOpen = false;
      }
    });
  }

  onCheckTextareaCompleted() {
    this.isSubmitButtonEnabled =
      this.contactMessage.content.length > 5 &&
      this.contactMessage.content.length <= 65_000 &&
      this.contactMessage.email.length > 5 &&
      this.contactMessage.email.length < 255 &&
      this.contactMessage.subject.length > 1 &&
      this.contactMessage.subject.length < 255;
  }

  onSubmit() {
    this.isLoadingComposantActive = true;
    if (this.isAdminMod) {
    }
    this.createMessageFromUserToAdmin();
  }

  createMessageFromUserToAdmin() {
    this.contactService
      .createContact(this.contactMessage, this.userMail)
      .pipe(
        catchError(() => {
          this.isLoadingComposantActive = false;
          this.isContactTextCreatedError = true;
          setTimeout(() => {
            this.isContactTextCreatedError = false;
          }, 3000);
          return of(null);
        })
      )
      .subscribe((contactMessage) => {
        if (contactMessage) {
          this.isLoadingComposantActive = false;
          this.isContactTextCreatedSuccess = true;

          setTimeout(() => {
            this.isContactTextCreatedSuccess = false;
            this.resetFormFields();
          }, 3000);
        }
      });
  }

  private resetFormFields() {
    this.contactMessage.name = '';
    this.contactMessage.email = '';
    this.contactMessage.subject = '';
    this.contactMessage.content = '';
    this.contactFormService.closePopup();
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
