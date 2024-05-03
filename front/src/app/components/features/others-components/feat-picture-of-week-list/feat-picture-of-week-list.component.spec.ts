import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPictureOfWeekListComponent } from './feat-picture-of-week-list.component';

describe('FeatPictureOfWeekListComponent', () => {
  let component: FeatPictureOfWeekListComponent;
  let fixture: ComponentFixture<FeatPictureOfWeekListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPictureOfWeekListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatPictureOfWeekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
