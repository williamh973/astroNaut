import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatNewsCardDetailPageComponent } from './feat-news-card-detail-page.component';

describe('FeatNewsCardDetailPageComponent', () => {
  let component: FeatNewsCardDetailPageComponent;
  let fixture: ComponentFixture<FeatNewsCardDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatNewsCardDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatNewsCardDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
