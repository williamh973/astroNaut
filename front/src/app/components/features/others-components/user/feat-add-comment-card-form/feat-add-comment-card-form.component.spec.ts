import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatAddCommentCardFormComponent } from './feat-add-comment-card-form.component';

describe('FeatAddCommentCardFormComponent', () => {
  let component: FeatAddCommentCardFormComponent;
  let fixture: ComponentFixture<FeatAddCommentCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatAddCommentCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatAddCommentCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
