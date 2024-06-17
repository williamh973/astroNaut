import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatReplyListComponent } from './feat-reply-list.component';

describe('FeatReplyListComponent', () => {
  let component: FeatReplyListComponent;
  let fixture: ComponentFixture<FeatReplyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatReplyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatReplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
