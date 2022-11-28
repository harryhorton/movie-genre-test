import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MoviePosterComponent } from '../../components/movie-poster.component';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list-page',
  standalone: true,
  styleUrls: ['./movie-list-page.component.scss'],
  imports: [NgFor, NgIf, RouterLink, MoviePosterComponent],
  template: ` <div>
    <nav class="movie-list">
      <a
        class="movie-list__link"
        *ngFor="let movie of movies"
        [routerLink]="['/movie', movie._id]"
      >
        <movie-poster [movie]="movie"></movie-poster>
        <span class="movie-list__genres">{{ movie.genres.join(' | ') }}</span>
        <span class="movie-list__languages">{{
          movie.languages.join(' | ')
        }}</span>
        <span *ngIf="movie.imdb" class="movie-list__rating"
          >{{ movie.imdb.rating }}/10</span
        >
      </a>
    </nav>
  </div>`,
})
export class MovieListPageComponent implements OnInit {
  genre: string | null = null;
  movies: Movie[] = [];
  constructor(private movieService: MovieService) {
    movieService.$filtered.subscribe((list) => (this.movies = list));
  }

  ngOnInit(): void {
    this.loadMovies('Comedy');
  }

  async loadMovies(genre: string) {
    // this.movieService.setFilterdGenre('Comedy')
    console.log(this.movies);
  }
}
