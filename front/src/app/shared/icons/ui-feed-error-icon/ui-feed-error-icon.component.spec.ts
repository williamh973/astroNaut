import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFeedErrorIconComponent } from './ui-feed-error-icon.component';

describe('UiFeedErrorIconComponent', () => {
  let component: UiFeedErrorIconComponent;
  let fixture: ComponentFixture<UiFeedErrorIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiFeedErrorIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFeedErrorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
