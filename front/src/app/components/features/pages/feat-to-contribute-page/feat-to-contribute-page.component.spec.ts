import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatToContributePageComponent } from './feat-to-contribute-page.component';

describe('FeatToContributePageComponent', () => {
  let component: FeatToContributePageComponent;
  let fixture: ComponentFixture<FeatToContributePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatToContributePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatToContributePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
