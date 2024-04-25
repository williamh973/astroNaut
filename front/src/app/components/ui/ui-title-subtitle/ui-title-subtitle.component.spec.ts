import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTitleSubtitleComponent } from './ui-title-subtitle.component';

describe('UiTitleSubtitleComponent', () => {
  let component: UiTitleSubtitleComponent;
  let fixture: ComponentFixture<UiTitleSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTitleSubtitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTitleSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
