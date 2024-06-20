import { Component, Input, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-feat-user-landing-page',
  templateUrl: './feat-user-landing-page.component.html',
  styleUrls: ['./feat-user-landing-page.component.scss'],
})
export class FeatUserLandingPageComponent {
  @Input() user!: User;
  isContactListOpen: boolean = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && this.user) {
    }
  }
}
