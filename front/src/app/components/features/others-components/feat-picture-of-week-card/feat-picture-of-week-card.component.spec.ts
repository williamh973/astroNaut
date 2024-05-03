import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPictureOfWeekCardComponent } from './feat-picture-of-week-card.component';

describe('FeatPictureOfWeekCardComponent', () => {
  let component: FeatPictureOfWeekCardComponent;
  let fixture: ComponentFixture<FeatPictureOfWeekCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPictureOfWeekCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatPictureOfWeekCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
