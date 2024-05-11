import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOurSolarSystemDropdownMenuComponent } from './ui-our-solar-system-dropdown-menu.component';

describe('UiOurSolarSystemDropdownMenuComponent', () => {
  let component: UiOurSolarSystemDropdownMenuComponent;
  let fixture: ComponentFixture<UiOurSolarSystemDropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiOurSolarSystemDropdownMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiOurSolarSystemDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
