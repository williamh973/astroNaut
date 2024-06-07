import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOpenFormButtonComponent } from './ui-open-form-button.component';

describe('UiOpenFormButtonComponent', () => {
  let component: UiOpenFormButtonComponent;
  let fixture: ComponentFixture<UiOpenFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiOpenFormButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiOpenFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
