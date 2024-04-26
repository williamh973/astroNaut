import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPicturesOfWeekPageComponent } from './feat-pictures-of-week-page.component';

describe('FeatPicturesOfWeekPageComponent', () => {
  let component: FeatPicturesOfWeekPageComponent;
  let fixture: ComponentFixture<FeatPicturesOfWeekPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPicturesOfWeekPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatPicturesOfWeekPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
