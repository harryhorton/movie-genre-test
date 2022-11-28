import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'slide-in-menu',
  styleUrls: ['./slide-in-menu.component.scss'],
  standalone: true,
  imports: [NgClass, NgFor, RouterLink],
  template: `
    <div
      [ngClass]="{
        'slide-in-menu': true,
        'slide-in-menu--active': isMenuOpen
      }"
    >
      <div class="slide-in-menu__wrapper">
        <nav class="slide-in-menu__nav">
          <h2 class="slide-in-menu__title">Genres</h2>
          <ul class="slide-in-menu__list">
            <li *ngFor="let genre of genres">
              <a
                class="slide-in-menu__link"
                [routerLink]="['/']"
                (click)="selectGenre(genre)"
              >
                {{ genre }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="slide-in-menu__close-area" (click)="toggleMenu()"></div>
      </div>
    </div>
  `,
})
export class SlideInMenuComponent {
  isMenuOpen: boolean = false;
  genres: string[] = [];

  constructor(
    private menuService: MenuService,
    private movieService: MovieService
  ) {
    menuService.$menuVisibility.subscribe((value) => {
      this.isMenuOpen = value;
    });
    this.genres = this.movieService.getGenres();
  }

  selectGenre(genre: string) {
    this.movieService.setFilterdGenre(genre);
    this.toggleMenu();
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
