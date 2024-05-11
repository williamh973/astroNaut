import { TestBed } from '@angular/core/testing';

import { ImageForPictureAuthorCardService } from './image-for-picture-author-card.service';

describe('ImageForPictureAuthorCardService', () => {
  let service: ImageForPictureAuthorCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageForPictureAuthorCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
