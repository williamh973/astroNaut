import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDeleteIconComponent } from './ui-delete-icon.component';

describe('UiDeleteIconComponent', () => {
  let component: UiDeleteIconComponent;
  let fixture: ComponentFixture<UiDeleteIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDeleteIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDeleteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
