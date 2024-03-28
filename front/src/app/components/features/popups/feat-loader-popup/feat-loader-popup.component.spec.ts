import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatLoaderPopupComponent } from './feat-loader-popup.component';

describe('FeatLoaderPopupComponent', () => {
  let component: FeatLoaderPopupComponent;
  let fixture: ComponentFixture<FeatLoaderPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatLoaderPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatLoaderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
