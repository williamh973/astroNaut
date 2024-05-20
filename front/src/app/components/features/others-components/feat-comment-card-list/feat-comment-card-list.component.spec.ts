import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatCommentCardListComponent } from './feat-comment-card-list.component';

describe('FeatCommentCardListComponent', () => {
  let component: FeatCommentCardListComponent;
  let fixture: ComponentFixture<FeatCommentCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatCommentCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatCommentCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
