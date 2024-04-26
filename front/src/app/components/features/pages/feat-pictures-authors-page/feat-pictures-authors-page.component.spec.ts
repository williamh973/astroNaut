import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPicturesAuthorsPageComponent } from './feat-pictures-authors-page.component';

describe('FeatPicturesAuthorsPageComponent', () => {
  let component: FeatPicturesAuthorsPageComponent;
  let fixture: ComponentFixture<FeatPicturesAuthorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPicturesAuthorsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatPicturesAuthorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
