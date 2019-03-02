import { FilterListingsPipe } from './filter-listings.pipe';
import { TestBed } from '@angular/core/testing';
import { IMovie } from '../models/movie.interface';

describe('FilterListingsPipe', () => {
  let pipe: FilterListingsPipe;

  beforeEach(() => {
    pipe = new FilterListingsPipe();
  });


  it('create an instance', () => {
    expect(FilterListingsPipe).toBeTruthy();
  });

  it('should filter based on popularity', () => {
    const option = 'popularity';
    const movieList: Array<IMovie> = [
      {
        adult: false,
        backdrop_path: '',
        genre_ids: [10],
        id: 1,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 34.1245,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 8.7,
        vote_count: 10
      },
      {
        adult: false,
        backdrop_path: '',
        genre_ids: [10],
        id: 2,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 45.4443,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 8.7,
        vote_count: 10
      },
      {
        adult: false,
        backdrop_path: '',
        genre_ids: [10],
        id: 3,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 10.0023,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 8.7,
        vote_count: 10
      }
    ];

    const filteredList = pipe.transform(movieList, option);
    expect(filteredList.map(i => i.id)).toEqual([2, 1, 3]);
  });

  it('should filter based on rating', () => {
    const filterTerm = '5.5';
    const option = 'popularity';
    const movieList: Array<IMovie> = [
      {
        adult: false,
        backdrop_path: '',
        genre_ids: [10],
        id: 1,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 34.1245,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 8.70,
        vote_count: 10
      },
      {
        adult: false,
        backdrop_path: '',
        genre_ids: [10],
        id: 2,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 45.4443,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 1.75,
        vote_count: 10
      },
      {
        adult: false,
        backdrop_path: '',
        genre_ids: [10],
        id: 3,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 10.0023,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 3.34,
        vote_count: 10
      }
    ];

    const filteredList = pipe.transform(movieList, option, filterTerm);
    expect(filteredList.length).toBe(1);
  });
});
