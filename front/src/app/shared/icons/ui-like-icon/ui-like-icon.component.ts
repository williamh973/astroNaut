import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ui-like-icon',
  templateUrl: './ui-like-icon.component.html',
  styleUrls: ['./ui-like-icon.component.scss'],
})
export class UiLikeIconComponent {
  @Input() isNewsCardLiked!: boolean;
}
