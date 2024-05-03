import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPictureOfWeekListThumbnailComponent } from './feat-picture-of-week-list-thumbnail.component';

describe('FeatPictureOfWeekListThumbnailComponent', () => {
  let component: FeatPictureOfWeekListThumbnailComponent;
  let fixture: ComponentFixture<FeatPictureOfWeekListThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPictureOfWeekListThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatPictureOfWeekListThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
