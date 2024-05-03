import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBurgerMenuButtonComponent } from './ui-burger-menu-button.component';

describe('UiBurgerMenuButtonComponent', () => {
  let component: UiBurgerMenuButtonComponent;
  let fixture: ComponentFixture<UiBurgerMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBurgerMenuButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiBurgerMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
