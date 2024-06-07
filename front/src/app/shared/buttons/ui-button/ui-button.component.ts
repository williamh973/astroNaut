import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
})
export class UiButtonComponent {
  @Input() buttonName: string = '';
  @Input() isButtonEnabled!: boolean;

  @Output() isButtonClicked = new EventEmitter<boolean>();

  onButtonClicked() {
    this.isButtonClicked.emit(true);
  }
}
