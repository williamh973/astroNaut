import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatAdminContactReplyFormPopupComponent } from './feat-admin-contact-reply-form-popup.component';

describe('FeatAdminContactReplyFormPopupComponent', () => {
  let component: FeatAdminContactReplyFormPopupComponent;
  let fixture: ComponentFixture<FeatAdminContactReplyFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatAdminContactReplyFormPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatAdminContactReplyFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
