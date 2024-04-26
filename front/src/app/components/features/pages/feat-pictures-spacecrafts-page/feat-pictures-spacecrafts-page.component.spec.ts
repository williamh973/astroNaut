import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPicturesSpacecraftsPageComponent } from './feat-pictures-spacecrafts-page.component';

describe('FeatPicturesSpacecraftsPageComponent', () => {
  let component: FeatPicturesSpacecraftsPageComponent;
  let fixture: ComponentFixture<FeatPicturesSpacecraftsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPicturesSpacecraftsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatPicturesSpacecraftsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
