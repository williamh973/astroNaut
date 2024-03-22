import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatLoginOrRegisterFormPopupComponent } from './feat-login-or-register-popup.component';

describe('FeatLoginOrRegisterFormPopupComponent', () => {
  let component: FeatLoginOrRegisterFormPopupComponent;
  let fixture: ComponentFixture<FeatLoginOrRegisterFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatLoginOrRegisterFormPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatLoginOrRegisterFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
