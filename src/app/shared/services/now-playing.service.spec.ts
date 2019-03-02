import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NowPlayingService } from './now-playing.service';
import { IMovieListings } from '../models/movie-listing.interface';
import { ServiceUrls } from '../constants/service-urls.constant';

describe('NowPlayingService', () => {
  let service: NowPlayingService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NowPlayingService]
    });
  }));

  beforeEach(() => {
    service = TestBed.get(NowPlayingService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', async(() => {
    service.getNowPlayingMovies()
      .then(
        (result: IMovieListings) => {
          expect(result).toBeDefined();
        }
      );

    const req = httpMock.expectOne(ServiceUrls.MOCKED.NOW_PLAYING_URL);
    expect(req.request.method).toBe('GET');
  }));

  it('should return a list of movies', async(() => {
    service.getNowPlayingMovies()
      .then(
        (response: IMovieListings) => {
          expect(response.results.length).toBeGreaterThan(1);
        }
      );
  }));

  it('should have the movie title property', async(() => {
    service.getNowPlayingMovies()
      .then(
        (response: IMovieListings) => {
          const titles = response.results.map(movie => movie.title);
          expect(titles).toBeDefined();
          expect(titles.length).toBeGreaterThan(1);
        }
      );
  }));

  it('should have the movie popularity property', async(() => {
    service.getNowPlayingMovies()
      .then(
        (response: IMovieListings) => {
          const popularity = response.results.map(movie => movie.popularity);
          expect(popularity).toBeDefined();
          expect(popularity.length).toBeGreaterThan(1);
        }
      );
  }));

  it('should have the movie vote_average property', async(() => {
    service.getNowPlayingMovies()
      .then(
        (response: IMovieListings) => {
          const votes = response.results.map(movie => movie.vote_average);
          expect(votes).toBeDefined();
          expect(votes.length).toBeGreaterThan(1);
        }
      );
  }));

  it('should have the movie genre property', async(() => {
    service.getNowPlayingMovies()
      .then(
        (response: IMovieListings) => {
          const genres = response.results.map(movie => movie.genre_ids);
          expect(genres).toBeDefined();
          expect(genres.length).toBeGreaterThan(1);
        }
      );
  }));

});
