import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAuthSuccessIconComponent } from './ui-auth-success-icon.component';

describe('UiAuthSuccessIconComponent', () => {
  let component: UiAuthSuccessIconComponent;
  let fixture: ComponentFixture<UiAuthSuccessIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAuthSuccessIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAuthSuccessIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
