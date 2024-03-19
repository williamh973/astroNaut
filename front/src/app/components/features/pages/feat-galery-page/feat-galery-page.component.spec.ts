import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatGaleryPageComponent } from './feat-galery-page.component';

describe('FeatGaleryPageComponent', () => {
  let component: FeatGaleryPageComponent;
  let fixture: ComponentFixture<FeatGaleryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatGaleryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatGaleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
