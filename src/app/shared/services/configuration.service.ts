import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ServiceUrls } from './../constants/service-urls.constant';
import { IConfiguration } from '../models/configuration.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  healthCheck(): void {
    console.log('Running ConfigurationService');
  }

  getDetails(): Promise<IConfiguration> {
    return this.http.get<IConfiguration>(ServiceUrls.CONFIGURATION_URL).toPromise();
  }
}
