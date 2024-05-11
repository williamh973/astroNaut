import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPictureAuthorCardComponent } from './feat-picture-author-card.component';

describe('FeatPictureAuthorCardComponent', () => {
  let component: FeatPictureAuthorCardComponent;
  let fixture: ComponentFixture<FeatPictureAuthorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPictureAuthorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatPictureAuthorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
