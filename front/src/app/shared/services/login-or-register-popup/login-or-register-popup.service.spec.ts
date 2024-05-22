import { TestBed } from '@angular/core/testing';

import { LoginOrRegisterPopupService } from './login-or-register-popup.service';

describe('LoginOrRegisterPopupService', () => {
  let service: LoginOrRegisterPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginOrRegisterPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
