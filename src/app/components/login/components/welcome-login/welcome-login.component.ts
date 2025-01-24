import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { ControlerService } from '../../../../services/controler/controler.service';
import { ActivePage } from '../../../../enums/active-page.enum';
import { TypeButton } from '../../../../enums/button-type.enum';
import { BaseComponent } from '../../../../core/base/base.component';

@Component({
  selector: 'app-welcome-login',
  templateUrl: './welcome-login.component.html',
  styleUrls: ['./welcome-login.component.scss'],
  imports: [ButtonComponent]
})
export class WelcomeLoginComponent extends BaseComponent implements OnInit {
  constructor(private readonly controler: ControlerService) {
    super();
  }

  ngOnInit() {
  }

  public redirect(activePage: ActivePage): void {
    this.controler.setActivePage(activePage);
  }

}
