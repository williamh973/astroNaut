import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatLoginFormPopupComponent } from './feat-login-form-popup.component';

describe('FeatLoginFormPopupComponent', () => {
  let component: FeatLoginFormPopupComponent;
  let fixture: ComponentFixture<FeatLoginFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatLoginFormPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatLoginFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
