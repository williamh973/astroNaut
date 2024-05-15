import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatCommentListComponent } from './feat-comment-list.component';

describe('FeatCommentListComponent', () => {
  let component: FeatCommentListComponent;
  let fixture: ComponentFixture<FeatCommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatCommentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
