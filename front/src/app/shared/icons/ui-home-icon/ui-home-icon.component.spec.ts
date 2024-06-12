import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHomeIconComponent } from './ui-home-icon.component';

describe('UiHomeIconComponent', () => {
  let component: UiHomeIconComponent;
  let fixture: ComponentFixture<UiHomeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiHomeIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiHomeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
