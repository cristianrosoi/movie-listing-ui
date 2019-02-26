import { IDates } from './dates.interface';
import { IMovie } from './movie.interface';

export interface IMovieListings {
  dates: IDates;
  page: number;
  results: Array<IMovie>;
  total_pages: number;
  total_results: number;
}
