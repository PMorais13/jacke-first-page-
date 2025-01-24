import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { ControlerService } from '../../../../services/controler/controler.service';
import { ActivePage } from '../../../../enums/active-page.enum';
import { BaseComponent } from '../../../../core/base/base.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enter-account',
  templateUrl: './enter-account.component.html',
  styleUrls: ['./enter-account.component.scss'],
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
})
export class EnterAccountComponent extends BaseComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private readonly controler: ControlerService,
    private readonly fb: FormBuilder
  ) {
    super();
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email], // Validação de email
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)], // Senha com mínimo de 6 caracteres
      ],
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

  public back(): void {
    this.controler.setActivePage(ActivePage.INITIAL);
  }
}
