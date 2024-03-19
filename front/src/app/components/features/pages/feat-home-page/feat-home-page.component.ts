import { Component } from '@angular/core';
import { LoginOrRegisterPopupServiceService } from 'src/app/shared/services/login-or-register-popup-service.service';

@Component({
  selector: 'app-feat-home-page',
  templateUrl: './feat-home-page.component.html',
  styleUrls: ['./feat-home-page.component.scss']
})
export class FeatHomePageComponent {
  
  // isLoginOrRegisterPopupOpen: boolean = false;

  constructor(public loginOrRegisterPopupService: LoginOrRegisterPopupServiceService ) {}


}
