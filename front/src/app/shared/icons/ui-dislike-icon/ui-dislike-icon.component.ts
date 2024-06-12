import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-dislike-icon',
  templateUrl: './ui-dislike-icon.component.html',
  styleUrls: ['./ui-dislike-icon.component.scss'],
})
export class UiDislikeIconComponent {
  @Input() isNewsCardDisliked!: boolean;
}
