import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatTrackHttpStatusPopupComponent } from './feat-track-http-status-popup.component';

describe('FeatTrackHttpStatusPopupComponent', () => {
  let component: FeatTrackHttpStatusPopupComponent;
  let fixture: ComponentFixture<FeatTrackHttpStatusPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatTrackHttpStatusPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatTrackHttpStatusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
