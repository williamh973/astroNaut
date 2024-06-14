import { TestBed } from '@angular/core/testing';

import { ContactFormPopupService } from './contact-form-popup.service';

describe('ContactFormPopupService', () => {
  let service: ContactFormPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFormPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
