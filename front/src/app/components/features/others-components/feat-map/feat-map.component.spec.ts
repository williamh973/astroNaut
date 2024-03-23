import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatMapComponent } from './feat-map.component';

describe('FeatMapComponent', () => {
  let component: FeatMapComponent;
  let fixture: ComponentFixture<FeatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
