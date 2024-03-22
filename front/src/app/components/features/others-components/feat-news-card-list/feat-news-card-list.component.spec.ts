import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatNewsCardListComponent } from './feat-news-card-list.component';

describe('FeatNewsCardListComponent', () => {
  let component: FeatNewsCardListComponent;
  let fixture: ComponentFixture<FeatNewsCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatNewsCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatNewsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
