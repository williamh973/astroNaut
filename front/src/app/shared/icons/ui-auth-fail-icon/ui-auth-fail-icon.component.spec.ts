import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAuthFailIconComponent } from './ui-auth-fail-icon.component';

describe('UiAuthFailIconComponent', () => {
  let component: UiAuthFailIconComponent;
  let fixture: ComponentFixture<UiAuthFailIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAuthFailIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAuthFailIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
