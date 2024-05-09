import { TestBed } from '@angular/core/testing';

import { ImageForPictureSpecialEventCardService } from './image-for-picture-special-event-card.service';

describe('ImageForPictureSpecialEventCardService', () => {
  let service: ImageForPictureSpecialEventCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageForPictureSpecialEventCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
