import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFeedSuccessIconComponent } from './ui-feed-success-icon.component';

describe('UiFeedSuccessIconComponent', () => {
  let component: UiFeedSuccessIconComponent;
  let fixture: ComponentFixture<UiFeedSuccessIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiFeedSuccessIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFeedSuccessIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
