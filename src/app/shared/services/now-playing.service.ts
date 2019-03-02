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

  /**
   * Private method which gets the API URL
   * if there is an API_KEY defined in Config.ts
   * else gets the mocked data URL
   */
  private getUrl(): string {
    const buildUrl = new BuildUrl();

    if (Config.API_KEY && Config.API_KEY.length > 0) {
      return buildUrl.fromPath(ServiceUrls.NOW_PLAYING_URL, Config.PAGE);
    }

    return ServiceUrls.MOCKED.NOW_PLAYING_URL;
  }

  public getNowPlayingMovies(): Promise<IMovieListings> {
    return this.http.get<IMovieListings>(this.getUrl()).toPromise();
  }

}
