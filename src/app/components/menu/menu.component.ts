import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';
import { BaseComponent } from '../../core/base/base.component';
import { AuthenticateService } from '../../services/authenticate/authenticate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [ReactiveFormsModule, ButtonComponent]
})
export class MenuComponent extends BaseComponent {
  @Output() closeMenu: EventEmitter<any> = new EventEmitter<any>();
  public formMenu: FormGroup;

  constructor(private fb: FormBuilder, private readonly authenticateService: AuthenticateService) {
    super();
    this.formMenu = this.fb.group({
      name: [{ value: 'John Doe', disabled: true }],
      age: [{ value: '30', disabled: true }],
      email: [{ value: 'john.doe@example.com', disabled: true }],
      phone: [{ value: '(11) 98765-4321', disabled: true }],
      img: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Chuck_Norris_May_2015.jpg/330px-Chuck_Norris_May_2015.jpg']
    });
  }

  public goBack(event: any): void {
    this.closeMenu.emit(event);
  }

  public goExit(event: any): void {
    this.authenticateService.setInfoLogin(false);
    event.stopPropagation();
  }
}
