import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPicturesSpecialEventsPageComponent } from './feat-pictures-special-events-page.component';

describe('FeatPicturesSpecialEventsPageComponent', () => {
  let component: FeatPicturesSpecialEventsPageComponent;
  let fixture: ComponentFixture<FeatPicturesSpecialEventsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPicturesSpecialEventsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatPicturesSpecialEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
