import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatLocationsPageComponent } from './feat-locations-page.component';

describe('FeatLocationsPageComponent', () => {
  let component: FeatLocationsPageComponent;
  let fixture: ComponentFixture<FeatLocationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatLocationsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatLocationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
