import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatAddNewsCardFormComponent } from './feat-add-news-card-form.component';

describe('FeatAddNewsCardFormComponent', () => {
  let component: FeatAddNewsCardFormComponent;
  let fixture: ComponentFixture<FeatAddNewsCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatAddNewsCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatAddNewsCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
