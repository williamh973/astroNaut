import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatContactPageComponent } from './feat-contact-page.component';

describe('FeatContactPageComponent', () => {
  let component: FeatContactPageComponent;
  let fixture: ComponentFixture<FeatContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatContactPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
