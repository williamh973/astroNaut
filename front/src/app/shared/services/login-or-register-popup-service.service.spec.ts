import { TestBed } from '@angular/core/testing';

import { LoginOrRegisterPopupServiceService } from './login-or-register-popup-service.service';

describe('LoginOrRegisterPopupServiceService', () => {
  let service: LoginOrRegisterPopupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginOrRegisterPopupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
