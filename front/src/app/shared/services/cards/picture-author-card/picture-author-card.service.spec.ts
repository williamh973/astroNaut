import { TestBed } from '@angular/core/testing';

import { PictureAuthorCardService } from './picture-author-card.service';

describe('PictureAuthorCardService', () => {
  let service: PictureAuthorCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureAuthorCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
