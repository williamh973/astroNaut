import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatEditNewsCardFormStep1Component } from './feat-edit-news-card-form-step1.component';

describe('FeatEditNewsCardFormStep1Component', () => {
  let component: FeatEditNewsCardFormStep1Component;
  let fixture: ComponentFixture<FeatEditNewsCardFormStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatEditNewsCardFormStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatEditNewsCardFormStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
