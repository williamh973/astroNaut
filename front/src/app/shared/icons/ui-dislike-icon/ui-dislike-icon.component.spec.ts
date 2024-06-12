import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDislikeIconComponent } from './ui-dislike-icon.component';

describe('UiDislikeIconComponent', () => {
  let component: UiDislikeIconComponent;
  let fixture: ComponentFixture<UiDislikeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDislikeIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDislikeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
