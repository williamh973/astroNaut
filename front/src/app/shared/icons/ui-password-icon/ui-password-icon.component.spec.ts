import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPasswordIconComponent } from './ui-password-icon.component';

describe('UiPasswordIconComponent', () => {
  let component: UiPasswordIconComponent;
  let fixture: ComponentFixture<UiPasswordIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPasswordIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPasswordIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
