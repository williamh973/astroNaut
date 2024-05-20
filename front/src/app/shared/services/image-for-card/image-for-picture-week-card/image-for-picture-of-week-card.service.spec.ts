import { TestBed } from '@angular/core/testing';

import { ImageForPictureOfWeekCardService } from './image-for-picture-of-week-card.service';

describe('ImageForPictureOfWeekCardService', () => {
  let service: ImageForPictureOfWeekCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageForPictureOfWeekCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
