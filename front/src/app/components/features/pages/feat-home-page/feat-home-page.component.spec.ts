import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatHomePageComponent } from './feat-home-page.component';

describe('FeatHomePageComponent', () => {
  let component: FeatHomePageComponent;
  let fixture: ComponentFixture<FeatHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
