import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatRegisterFormPopupComponent } from './feat-register-form-popup.component';

describe('FeatRegisterFormPopupComponent', () => {
  let component: FeatRegisterFormPopupComponent;
  let fixture: ComponentFixture<FeatRegisterFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatRegisterFormPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatRegisterFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
