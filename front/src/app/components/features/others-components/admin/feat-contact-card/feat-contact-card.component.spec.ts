import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatContactCardComponent } from './feat-contact-card.component';

describe('FeatContactCardComponent', () => {
  let component: FeatContactCardComponent;
  let fixture: ComponentFixture<FeatContactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatContactCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
