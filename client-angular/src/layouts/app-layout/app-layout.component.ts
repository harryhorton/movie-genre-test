import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlideInMenuComponent } from '../../components/slide-in-menu.component';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  styleUrls: ['./app-layout.component.scss'],
  imports: [RouterLink, SlideInMenuComponent],
  template: ` <div class="app-wrapper">
    <slide-in-menu></slide-in-menu>
    <header>
      <button (click)="toggleMenu()">menu</button>
      <a routerLink="/" title="MFLIX" class="logo">
        <h1 class="logo__title">MFLIX</h1>
        <span class="logo__author">by Harry Horton</span>
      </a>
    </header>
    <main><ng-content></ng-content></main>
  </div>`,
})
export class AppLayout {
  constructor(private menuService: MenuService) {}

  toggleMenu() {
    console.log('toggled');
    this.menuService.toggleMenu();
  }
}
