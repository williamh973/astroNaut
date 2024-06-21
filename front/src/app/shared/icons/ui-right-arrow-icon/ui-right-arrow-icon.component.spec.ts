import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRightArrowIconComponent } from './ui-right-arrow-icon.component';

describe('UiRightArrowIconComponent', () => {
  let component: UiRightArrowIconComponent;
  let fixture: ComponentFixture<UiRightArrowIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiRightArrowIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiRightArrowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
