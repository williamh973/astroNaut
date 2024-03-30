import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatVisitsCounterComponent } from './feat-visits-counter.component';

describe('FeatVisitsCounterComponent', () => {
  let component: FeatVisitsCounterComponent;
  let fixture: ComponentFixture<FeatVisitsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatVisitsCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatVisitsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
