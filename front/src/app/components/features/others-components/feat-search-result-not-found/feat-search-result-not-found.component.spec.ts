import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatSearchResultNotFoundComponent } from './feat-search-result-not-found.component';

describe('FeatSearchResultNotFoundComponent', () => {
  let component: FeatSearchResultNotFoundComponent;
  let fixture: ComponentFixture<FeatSearchResultNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatSearchResultNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatSearchResultNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
