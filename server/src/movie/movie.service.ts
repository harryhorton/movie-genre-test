import { Injectable } from '@nestjs/common';
import { movie_mocks } from '../data/movie.mock';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  getMovies(): Movie[] {
    return movie_mocks;
  }

  getMovie(_id: string): Movie | undefined {
    return movie_mocks.find((movie) => movie._id === _id);
  }

  getMoviesByGenre(genre: string): Movie[] {
    return movie_mocks.filter((movie) => movie.genres.includes(genre));
  }
}
