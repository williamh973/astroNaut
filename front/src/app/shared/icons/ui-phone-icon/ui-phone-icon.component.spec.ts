import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPhoneIconComponent } from './ui-phone-icon.component';

describe('UiPhoneIconComponent', () => {
  let component: UiPhoneIconComponent;
  let fixture: ComponentFixture<UiPhoneIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPhoneIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPhoneIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
