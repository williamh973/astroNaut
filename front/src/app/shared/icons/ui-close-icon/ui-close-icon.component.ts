import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ui-close-icon',
  templateUrl: './ui-close-icon.component.html',
  styleUrls: ['./ui-close-icon.component.scss'],
})
export class UiCloseIconComponent {
  @Output() isCloseButtonActivated = new EventEmitter<boolean>();

  onCloseComponent() {
    this.isCloseButtonActivated.emit(true);
  }
}
