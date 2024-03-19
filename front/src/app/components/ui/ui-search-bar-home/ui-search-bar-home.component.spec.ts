import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSearchBarHomeComponent } from './ui-search-bar-home.component';

describe('UiSearchBarHomeComponent', () => {
  let component: UiSearchBarHomeComponent;
  let fixture: ComponentFixture<UiSearchBarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSearchBarHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSearchBarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
