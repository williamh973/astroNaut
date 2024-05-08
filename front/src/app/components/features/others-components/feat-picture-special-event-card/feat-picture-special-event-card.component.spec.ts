import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPictureSpecialEventCardComponent } from './feat-picture-special-event-card.component';

describe('FeatPictureSpecialEventCardComponent', () => {
  let component: FeatPictureSpecialEventCardComponent;
  let fixture: ComponentFixture<FeatPictureSpecialEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPictureSpecialEventCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatPictureSpecialEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
