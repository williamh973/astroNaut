import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAdminLandingNavbarComponent } from './ui-admin-landing-navbar.component';

describe('UiAdminLandingNavbarComponent', () => {
  let component: UiAdminLandingNavbarComponent;
  let fixture: ComponentFixture<UiAdminLandingNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAdminLandingNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAdminLandingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
