export interface Movie {
  _id: string;
  awards: { wins: number; nominations: number; text: string }[];
  cast: string[];
  countries: string[];
  directors: string[];
  fullplot?: string;
  genres: string[];
  imdb: { rating: number; votes: number; id: number };
  languages: string[];
  lastupdated: string;
  lasupdated: string;
  num_mflix_comments?: number;
  plot: string;
  poster: string;
  rated?: string;
  released?: string;
  runtime: number;
  title: string;
  tomatoes: {
    viewer: { rating: number; numReviews: number; meter?: number };
    dvd?: string;
    website?: string;
    production?: string;
    lastUpdated: string;
  };
  type: string;
  writers?: string[];
  year: number;
}
