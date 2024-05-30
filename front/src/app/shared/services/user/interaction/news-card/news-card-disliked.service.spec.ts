import { TestBed } from '@angular/core/testing';

import { NewsCardDislikedService } from './news-card-disliked.service';

describe('NewsCardDislikedService', () => {
  let service: NewsCardDislikedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsCardDislikedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
