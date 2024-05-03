import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCarouselNavComponent } from './ui-carousel-nav.component';

describe('UiCarouselNavComponent', () => {
  let component: UiCarouselNavComponent;
  let fixture: ComponentFixture<UiCarouselNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCarouselNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCarouselNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
