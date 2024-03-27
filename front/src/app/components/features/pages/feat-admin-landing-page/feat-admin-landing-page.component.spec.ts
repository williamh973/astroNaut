import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatAdminLandingPageComponent } from './feat-admin-landing-page.component';

describe('FeatAdminLandingPageComponent', () => {
  let component: FeatAdminLandingPageComponent;
  let fixture: ComponentFixture<FeatAdminLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatAdminLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatAdminLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
