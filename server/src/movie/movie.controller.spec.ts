import { Test, TestingModule } from '@nestjs/testing';
import { movie_mocks } from '../data/movie.mock';
import { MovieController } from './movie.controller';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

describe('MovieController', () => {
  let controller: MovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService],
      controllers: [MovieController],
    }).compile();

    controller = module.get<MovieController>(MovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getMovies', () => {
    it('should get movie', () => {
      const movies = controller.getMovies();

      expect(Array.isArray(movies)).toBe(true);
    });

    it('should get movies by genre', () => {
      const genre = 'Comedy';
      const movies = controller.getMovies(genre);

      expect(movies.every((movie) => movie.genres.includes(genre))).toBe(true);
    });
  });

  describe('getMovie', () => {
    it('should get movie', () => {
      const testMovie = movie_mocks[0];
      const movie = controller.getMovie('573a1390f29313caabcd516c');

      expect(movie).toMatchObject(testMovie);
    });

    it('should throw if movie not found', () => {
      expect(() => controller.getMovie('fakeId')).toThrow();
    });
  });
});
