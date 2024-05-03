import { TestBed } from '@angular/core/testing';

import { PictureOfWeekCardService } from './picture-of-week-card.service';

describe('PictureOfWeekCardService', () => {
  let service: PictureOfWeekCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureOfWeekCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
