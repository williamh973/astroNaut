import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatFeedbackMessagesPopupComponent } from './feat-feedback-messages-popup.component';

describe('FeatFeedbackMessagesPopupComponent', () => {
  let component: FeatFeedbackMessagesPopupComponent;
  let fixture: ComponentFixture<FeatFeedbackMessagesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatFeedbackMessagesPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatFeedbackMessagesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
