import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatCommentComponent } from './feat-comment.component';

describe('FeatCommentComponent', () => {
  let component: FeatCommentComponent;
  let fixture: ComponentFixture<FeatCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
