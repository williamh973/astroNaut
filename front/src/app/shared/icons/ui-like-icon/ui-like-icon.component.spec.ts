import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLikeIconComponent } from './ui-like-icon.component';

describe('UiLikeIconComponent', () => {
  let component: UiLikeIconComponent;
  let fixture: ComponentFixture<UiLikeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiLikeIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiLikeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
