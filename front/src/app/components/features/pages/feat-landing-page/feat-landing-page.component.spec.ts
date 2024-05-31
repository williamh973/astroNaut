import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatLandingPageComponent } from './feat-landing-page.component';

describe('FeatLandingPageComponent', () => {
  let component: FeatLandingPageComponent;
  let fixture: ComponentFixture<FeatLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
