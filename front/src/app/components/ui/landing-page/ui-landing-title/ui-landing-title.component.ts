import { Component, Input, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-ui-landing-title',
  templateUrl: './ui-landing-title.component.html',
  styleUrls: ['./ui-landing-title.component.scss'],
})
export class UiLandingTitleComponent {
  @Input() user!: User;
  admin: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      if (this.user && this.user.role === 'ROLE_ADMIN') {
        this.admin = 'administrateur';
      }
    }
  }
}
