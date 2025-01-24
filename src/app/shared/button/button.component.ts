import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StyleButton, TypeButton } from '../../enums/button-type.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', '../../../assets/css/text.scss'],
  imports: [CommonModule]
})
export class ButtonComponent implements OnInit {
  @Input() typeButton!: string;
  @Input() style = StyleButton.PRIMARY;
  @Input() label = '';
  @Output() onClick: EventEmitter<void> = new EventEmitter()

  public typeButtonEnum = TypeButton;

  ngOnInit(): void {
    console.log(this.typeButton);
    
  }

  public clickButton(): void {
    this.onClick.emit();
  }
}
