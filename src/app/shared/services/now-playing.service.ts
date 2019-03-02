import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ServiceUrls } from './../constants/service-urls.constant';
import { IMovieListings } from '../models/movie-listing.interface';
import { BuildUrl } from './../utils/buildUrl.util';
import { Config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {

  constructor(private http: HttpClient) { }

  getNowPlayingMovies(): Promise<IMovieListings> {
    const buildUrl = new BuildUrl();
    const url = buildUrl.fromPath(ServiceUrls.NOW_PLAYING_URL, Config.PAGE);
    const mockedUrl = ServiceUrls.MOCKED.NOW_PLAYING_URL;

    return this.http.get<IMovieListings>(url).toPromise();
  }

}
