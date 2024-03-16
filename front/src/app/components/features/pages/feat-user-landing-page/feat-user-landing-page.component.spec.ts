import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatUserLandingPageComponent } from './feat-user-landing-page.component';

describe('FeatUserLandingPageComponent', () => {
  let component: FeatUserLandingPageComponent;
  let fixture: ComponentFixture<FeatUserLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatUserLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatUserLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
