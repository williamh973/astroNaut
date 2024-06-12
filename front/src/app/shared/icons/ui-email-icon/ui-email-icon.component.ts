import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-email-icon',
  templateUrl: './ui-email-icon.component.html',
  styleUrls: ['./ui-email-icon.component.scss'],
})
export class UiEmailIconComponent {
  @Input() isContactPageOpen!: boolean;
}
