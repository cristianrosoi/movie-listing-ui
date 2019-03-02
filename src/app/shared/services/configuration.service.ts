import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ServiceUrls } from './../constants/service-urls.constant';
import { IConfiguration } from '../models/configuration.interface';
import { BuildUrl } from './../utils/buildUrl.util';
import { Config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  /**
   * Private method which gets the API URL
   * if there is an API_KEY defined in Config.ts
   * else gets the mocked data URL
   */
  private getUrl(): string {
    const buildUrl = new BuildUrl();

    if (Config.API_KEY && Config.API_KEY.length > 0) {
      return buildUrl.fromPath(ServiceUrls.CONFIGURATION_URL);
    }

    return ServiceUrls.MOCKED.CONFIGURATION_URL;
  }

  public getDetails(): Promise<IConfiguration> {
    return this.http.get<IConfiguration>(this.getUrl()).toPromise();
  }
}
