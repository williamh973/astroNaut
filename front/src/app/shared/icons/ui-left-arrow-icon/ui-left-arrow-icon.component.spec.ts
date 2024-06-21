import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLeftArrowIconComponent } from './ui-left-arrow-icon.component';

describe('UiLeftArrowIconComponent', () => {
  let component: UiLeftArrowIconComponent;
  let fixture: ComponentFixture<UiLeftArrowIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiLeftArrowIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiLeftArrowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
