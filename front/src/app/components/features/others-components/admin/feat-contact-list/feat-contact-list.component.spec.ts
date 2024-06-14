import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatContactListComponent } from './feat-contact-list.component';

describe('FeatContactListComponent', () => {
  let component: FeatContactListComponent;
  let fixture: ComponentFixture<FeatContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatContactListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
