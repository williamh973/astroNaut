import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiEmailIconComponent } from './ui-email-icon.component';

describe('UiEmailIconComponent', () => {
  let component: UiEmailIconComponent;
  let fixture: ComponentFixture<UiEmailIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiEmailIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiEmailIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
