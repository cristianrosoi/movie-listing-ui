import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ServiceUrls } from '../constants/service-urls.constant';
import { IGenres } from '../models/genres.interface';
import { BuildUrl } from './../utils/buildUrl.util';
import { Config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  /**
   * Private method which gets the API URL
   * if there is an API_KEY defined in Config.ts
   * else gets the mocked data URL
   */
  private getUrl(): string {
    const buildUrl = new BuildUrl();

    if (Config.API_KEY && Config.API_KEY.length > 0) {
      return buildUrl.fromPath(ServiceUrls.GENRES_URL);
    }

    return ServiceUrls.MOCKED.GENRES_URL;
  }

  getMovieList(): Promise<IGenres> {
    return this.http.get<IGenres>(this.getUrl()).toPromise();
  }
}
