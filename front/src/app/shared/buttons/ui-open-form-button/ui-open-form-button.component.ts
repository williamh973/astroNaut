import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-open-form-button',
  templateUrl: './ui-open-form-button.component.html',
  styleUrls: ['./ui-open-form-button.component.scss'],
})
export class UiOpenFormButtonComponent {
  @Input() buttonName: string = '';
  @Output() isButtonOpenFormActived = new EventEmitter<boolean>();

  onButtonOpenFormActived() {
    this.isButtonOpenFormActived.emit(true);
  }
}
