import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGenres } from '../models/genres.interface';
import { ServiceUrls } from '../constants/service-urls.constant';
import { BuildUrl } from './../utils/buildUrl.util';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  healthCheck(): void {
    console.log('Running GenresService');
  }

  getDetails(): Promise<IGenres> {
    const buildUrl = new BuildUrl();
    const url = buildUrl.fromPath(ServiceUrls.GENRES_URL);

    return this.http.get<IGenres>(url).toPromise();
  }
}
