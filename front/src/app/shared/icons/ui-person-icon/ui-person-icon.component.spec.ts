import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPersonIconComponent } from './ui-person-icon.component';

describe('UiPersonIconComponent', () => {
  let component: UiPersonIconComponent;
  let fixture: ComponentFixture<UiPersonIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPersonIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPersonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
