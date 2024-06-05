import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatEditNewsCardFormComponent } from './feat-edit-news-card-form.component';

describe('FeatAddNewsCardFormComponent', () => {
  let component: FeatEditNewsCardFormComponent;
  let fixture: ComponentFixture<FeatEditNewsCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatEditNewsCardFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatEditNewsCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
