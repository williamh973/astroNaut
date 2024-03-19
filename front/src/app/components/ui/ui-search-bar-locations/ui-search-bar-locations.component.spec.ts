import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSearchBarLocationsComponent } from './ui-search-bar-locations.component';

describe('UiSearchBarLocationsComponent', () => {
  let component: UiSearchBarLocationsComponent;
  let fixture: ComponentFixture<UiSearchBarLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSearchBarLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSearchBarLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
