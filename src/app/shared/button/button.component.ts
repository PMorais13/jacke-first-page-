import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StyleButton, TypeButton } from '../../enums/button-type.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', '../../../assets/css/text.scss'],
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() typeButton!: string;
  @Input() style = StyleButton.PRIMARY;
  @Input() label = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter()

  public typeButtonEnum = TypeButton;

  public clickButton(event?: any): void {
    this.onClick.emit(event);
  }
}
