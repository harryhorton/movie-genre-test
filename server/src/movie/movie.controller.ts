import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

@Controller('/api/movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get('/')
  getMovies(@Query('genre') genre?: string): Movie[] {
    if (genre) {
      return this.movieService.getMoviesByGenre(genre);
    }

    return this.movieService.getMovies();
  }

  @Get('/:id')
  getMovie(@Param('id') id: string): Movie {
    const movie = this.movieService.getMovie(id);

    if (!movie) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }
    return movie;
  }
}
