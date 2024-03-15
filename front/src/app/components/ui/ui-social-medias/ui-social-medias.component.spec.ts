import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSocialMediasComponent } from './ui-social-medias.component';

describe('UiSocialMediasComponent', () => {
  let component: UiSocialMediasComponent;
  let fixture: ComponentFixture<UiSocialMediasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSocialMediasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSocialMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
