import { TestBed } from '@angular/core/testing';

import { MarkerDataService } from './MarkerData.service';

describe('MarkerDataService', () => {
  let service: MarkerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
