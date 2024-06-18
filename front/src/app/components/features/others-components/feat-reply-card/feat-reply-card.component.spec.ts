import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatReplyCardComponent } from './feat-reply-card.component';

describe('FeatReplyCardComponent', () => {
  let component: FeatReplyCardComponent;
  let fixture: ComponentFixture<FeatReplyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatReplyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatReplyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
