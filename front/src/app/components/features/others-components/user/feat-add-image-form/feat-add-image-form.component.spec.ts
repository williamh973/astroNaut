import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatAddImageToContributeComponent } from './feat-add-image-form.component';

describe('FeatAddImageToContributeComponent', () => {
  let component: FeatAddImageToContributeComponent;
  let fixture: ComponentFixture<FeatAddImageToContributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatAddImageToContributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatAddImageToContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
