import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLandingTitleComponent } from './ui-landing-title.component';

describe('UiLandingTitleComponent', () => {
  let component: UiLandingTitleComponent;
  let fixture: ComponentFixture<UiLandingTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiLandingTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiLandingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
