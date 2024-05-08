import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiThematicDropdownMenuComponent } from './ui-thematic-dropdown-menu.component';

describe('UiThematicDropdownMenuComponent', () => {
  let component: UiThematicDropdownMenuComponent;
  let fixture: ComponentFixture<UiThematicDropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiThematicDropdownMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiThematicDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
