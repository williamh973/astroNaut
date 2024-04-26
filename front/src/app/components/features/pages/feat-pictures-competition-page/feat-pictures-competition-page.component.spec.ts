import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPicturesCompetitionPageComponent } from './feat-pictures-competition-page.component';

describe('FeatPicturesCompetitionPageComponent', () => {
  let component: FeatPicturesCompetitionPageComponent;
  let fixture: ComponentFixture<FeatPicturesCompetitionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPicturesCompetitionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatPicturesCompetitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
