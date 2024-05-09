import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatAddSpecialEventImagesFormComponent } from './feat-add-special-event-images-form.component';

describe('FeatAddSpecialEventImagesFormComponent', () => {
  let component: FeatAddSpecialEventImagesFormComponent;
  let fixture: ComponentFixture<FeatAddSpecialEventImagesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatAddSpecialEventImagesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatAddSpecialEventImagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
