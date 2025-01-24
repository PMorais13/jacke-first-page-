import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { WelcomeLoginComponent } from './components/welcome-login/welcome-login.component';
import { ControlerService } from '../../services/controler/controler.service';
import { ActivePage } from '../../enums/active-page.enum';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { EnterAccountComponent } from './components/enter-account/enter-account.component';
import { BaseComponent } from '../../core/base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    WelcomeLoginComponent,
    RegisterComponent,
    EnterAccountComponent,
  ],
})
export class LoginComponent extends BaseComponent implements OnInit, OnDestroy {
  @ViewChild('login') login!: ElementRef;
  public activePage = ActivePage.INITIAL;
  public heightElement = 0;

  constructor(private readonly controler: ControlerService) {
    super();
  }

  ngOnInit() {
    this.controler.getActivePage().subscribe((res) => {
      this.activePage = res;
    });
  }

  ngOnDestroy(): void {
    this.controler.setActivePage(this.activePage)
  }
}
