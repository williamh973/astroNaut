import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatEditNewsCardFormStep2Component } from './feat-edit-news-card-form-step2.component';

describe('FeatEditNewsCardFormStep2Component', () => {
  let component: FeatEditNewsCardFormStep2Component;
  let fixture: ComponentFixture<FeatEditNewsCardFormStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatEditNewsCardFormStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatEditNewsCardFormStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
