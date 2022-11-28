import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie } from '../services/movie.service';

@Component({
  selector: 'movie-poster',
  standalone: true,
  imports: [NgIf],
  styleUrls: ['./movie-poster.component.scss'],
  template: ` <img
    class="movie-poster"
    *ngIf="movie && movie.poster"
    [src]="movie.poster"
    [alt]="movie.title"
  />`,
})
export class MoviePosterComponent {
  @Input() movie?: Movie | null = null;
}
