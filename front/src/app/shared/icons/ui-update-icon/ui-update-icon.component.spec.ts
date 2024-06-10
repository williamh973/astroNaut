import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUpdateIconComponent } from './ui-update-icon.component';

describe('UiUpdateIconComponent', () => {
  let component: UiUpdateIconComponent;
  let fixture: ComponentFixture<UiUpdateIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUpdateIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUpdateIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
