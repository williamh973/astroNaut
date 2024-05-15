import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatAddCommentFormComponent } from './feat-add-comment-form.component';

describe('FeatAddCommentFormComponent', () => {
  let component: FeatAddCommentFormComponent;
  let fixture: ComponentFixture<FeatAddCommentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatAddCommentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatAddCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
