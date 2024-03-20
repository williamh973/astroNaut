import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatAddLocationsToContributeComponent } from './feat-add-locations-form.component';

describe('FeatAddLocationsToContributeComponent', () => {
  let component: FeatAddLocationsToContributeComponent;
  let fixture: ComponentFixture<FeatAddLocationsToContributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatAddLocationsToContributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatAddLocationsToContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
