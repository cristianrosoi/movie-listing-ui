import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ServiceUrls } from './../constants/service-urls.constant';
import { IMovieListings } from '../models/movie-listing.interface';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {

  constructor(private http: HttpClient) { }

  healthTest(): void {
    console.log('Running NowPlayingService');
  }

  getNowPlayingMovies(): Promise<IMovieListings> {
    return this.http.get<IMovieListings>(ServiceUrls.NOW_PLAYING_URL).toPromise();
  }

}
