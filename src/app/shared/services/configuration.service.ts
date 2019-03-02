import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ServiceUrls } from './../constants/service-urls.constant';
import { IConfiguration } from '../models/configuration.interface';
import { BuildUrl } from './../utils/buildUrl.util';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  getDetails(): Promise<IConfiguration> {
    const buildUrl = new BuildUrl();
    const url = buildUrl.fromPath(ServiceUrls.CONFIGURATION_URL);
    const mockedUrl = ServiceUrls.MOCKED.CONFIGURATION_URL;

    return this.http.get<IConfiguration>(url).toPromise();
  }
}
