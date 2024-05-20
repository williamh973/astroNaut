import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatCommentCardComponent } from './feat-comment-card.component';

describe('FeatCommentCardComponent', () => {
  let component: FeatCommentCardComponent;
  let fixture: ComponentFixture<FeatCommentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatCommentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
