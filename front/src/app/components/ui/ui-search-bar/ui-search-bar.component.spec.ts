import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSearchBarComponent } from './ui-search-bar.component';

describe('UiSearchBarComponent', () => {
  let component: UiSearchBarComponent;
  let fixture: ComponentFixture<UiSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
