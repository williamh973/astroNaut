import { TestBed } from '@angular/core/testing';

import { PictureSpecialEventCardService } from './picture-special-event-card.service';

describe('PictureSpecialEventCardService', () => {
  let service: PictureSpecialEventCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureSpecialEventCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
