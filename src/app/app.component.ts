import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { AuthenticateService } from './services/authenticate/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, LoginComponent, ContentComponent, MenuComponent],
})
export class AppComponent implements OnInit {
  title = 'jacke-first-page';
  public openMenu = false;
  public loggedIn = false;

  constructor(private readonly authenticateService: AuthenticateService) {}

  ngOnInit(): void {
    this.authenticateService.getInfoLogin().subscribe((res) => {
      this.loggedIn = res;
    })
  }

  public teste(): void {
    this.openMenu = true;
  }

  public closeMenu(event: any): void {
    this.openMenu = false;
    event.stopPropagation();
  }
}
