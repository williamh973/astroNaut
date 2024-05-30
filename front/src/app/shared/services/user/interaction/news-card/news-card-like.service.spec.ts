import { TestBed } from '@angular/core/testing';

import { NewsCardLikeService } from './news-card-like.service';

describe('NewsCardLikeService', () => {
  let service: NewsCardLikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsCardLikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
