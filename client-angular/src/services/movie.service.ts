import { CurrencyPipe } from '@angular/common';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { movie_mocks } from '../data/movie_mocks';

export type Movie = typeof movie_mocks[number];

const SIMULATED_DELAY = 100;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  $filtered = new BehaviorSubject<Movie[]>([]);

  constructor() {
    this.setFilterdGenre('Comedy');
  }

  async getMovie(id: string): Promise<Movie | null> {
    return new Promise((resolve) => {
      // Simulate latency
      setTimeout(() => {
        resolve(movie_mocks.find((movie) => movie._id === id) || null);
      }, SIMULATED_DELAY);
    });
  }

  setFilterdGenre(genre: string) {
    this.$filtered.next(this.getMoviesByGenere(genre));
  }

  getMoviesByGenere(genre: string): Movie[] {
    return movie_mocks.filter((movie) => movie.genres.includes(genre));
  }

  getGenres() {
    return movie_mocks
      .reduce((prev, cur): string[] => {
        let newGenres: string[] = [];

        cur.genres.forEach((genre) => {
          if (!prev.includes(genre)) {
            newGenres.push(genre);
          }
        });

        return [...prev, ...newGenres];
      }, [] as string[])
      .sort();
  }
}
