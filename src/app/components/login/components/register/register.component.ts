import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { ControlerService } from '../../../../services/controler/controler.service';
import { ActivePage } from '../../../../enums/active-page.enum';
import { BaseComponent } from '../../../../core/base/base.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { dateValidator } from '../../../../shared/validators/date-validator';
import { CommonModule } from '@angular/common';
import { AuthenticateService } from '../../../../services/authenticate/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
})
export class RegisterComponent extends BaseComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private readonly controler: ControlerService,
    private readonly fb: FormBuilder,
    private readonly authenticateService: AuthenticateService
  ) {
    super();
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]], // Validation for phone number (10 or 11 digits)
      birthDate: ['', [Validators.required, dateValidator()]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    if (this.form.valid) {
      this.authenticateService.setInfoLogin(true);
    } else {
      console.log('Form is not valid');
    }
  }

  public back(): void {
    this.controler.setActivePage(ActivePage.INITIAL);
  }
}
