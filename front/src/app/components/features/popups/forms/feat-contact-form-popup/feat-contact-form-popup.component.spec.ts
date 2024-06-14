import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatContactFormPopupComponent } from './feat-contact-form-popup.component';

describe('FeatContactFormPopupComponent', () => {
  let component: FeatContactFormPopupComponent;
  let fixture: ComponentFixture<FeatContactFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatContactFormPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatContactFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
