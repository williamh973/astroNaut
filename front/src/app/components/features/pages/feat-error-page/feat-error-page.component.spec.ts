import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatErrorPageComponent } from './feat-error-page.component';

describe('FeatErrorPageComponent', () => {
  let component: FeatErrorPageComponent;
  let fixture: ComponentFixture<FeatErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatErrorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
