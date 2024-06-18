import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatReplyFormPopupComponent } from './feat-reply-form-popup.component';

describe('FeatReplyFormPopupComponent', () => {
  let component: FeatReplyFormPopupComponent;
  let fixture: ComponentFixture<FeatReplyFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatReplyFormPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatReplyFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
