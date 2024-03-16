import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatNewsCardComponent } from './feat-news-card.component';

describe('FeatNewsCardComponent', () => {
  let component: FeatNewsCardComponent;
  let fixture: ComponentFixture<FeatNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatNewsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
