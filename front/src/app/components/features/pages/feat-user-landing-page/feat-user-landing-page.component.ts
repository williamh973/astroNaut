import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feat-user-landing-page',
  templateUrl: './feat-user-landing-page.component.html',
  styleUrls: ['./feat-user-landing-page.component.scss'],
})
export class FeatUserLandingPageComponent {
  @Input() role!: string;
  @Input() userMail!: string;
  isContactListOpen: boolean = true;

  ngOnInit() {}
}
