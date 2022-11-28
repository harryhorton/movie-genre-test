import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviePosterComponent } from '../../components/movie-poster.component';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  styleUrls: ['./movie-details.component.scss'],
  imports: [NgIf, NgSwitch, NgSwitchCase, NgFor, MoviePosterComponent],
  template: `<div>
    <div [ngSwitch]="status">
      <div *ngSwitchCase="'loading'">loading</div>
      <div *ngSwitchCase="'error'">{{ errorMessage }}</div>
      <div *ngSwitchCase="'done'">
        <movie-poster [movie]="movie"></movie-poster>
        <h1>{{ movie?.title ?? 'Title not found' }}</h1>
        <p *ngIf="movie?.runtime">Runtime: {{ movie?.runtime }} minutes</p>
        <p *ngIf="movie?.languages">Languages: {{ movie?.languages }}</p>
        <p *ngIf="movie?.rated">Rating: {{ movie?.rated }}</p>
        <P *ngIf="movie?.directors"
          >Directors: {{ movie?.directors?.join(', ') }}</P
        >
        <P *ngIf="movie?.writers">Writers: {{ movie?.writers?.join(', ') }}</P>
        <P *ngIf="movie?.cast">Cast: {{ movie?.cast?.join(', ') }}</P>
        <section *ngIf="movie?.plot">
          <h2>Plot</h2>
          <p>{{ movie?.fullplot }}</p>
        </section>
      </div>
    </div>
  </div>`,
})
export class MovieDetailsComponent implements OnInit {
  movieId: string | null = null;
  movie: Movie | null = null;
  status: 'error' | 'loading' | 'done' = 'loading';
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    public movieService: MovieService
  ) {}

  ngOnInit(): any {
    this.movieId = this.route.snapshot.paramMap.get('id');
    this.loadMovie();
  }

  async loadMovie() {
    if (!this.movieId) {
      this.status = 'error';
      return;
    }

    this.movie = await this.movieService.getMovie(this.movieId);
    console.log(this.movie);
    if (!this.movie) {
      this.status = 'error';
      this.errorMessage = 'Movie Not Found';
      return;
    }

    this.status = 'done';
  }
}
