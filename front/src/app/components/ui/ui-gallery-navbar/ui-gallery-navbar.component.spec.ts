import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiGalleryNavbarComponent } from './ui-gallery-navbar.component';

describe('UiGalleryNavbarComponent', () => {
  let component: UiGalleryNavbarComponent;
  let fixture: ComponentFixture<UiGalleryNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiGalleryNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiGalleryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
