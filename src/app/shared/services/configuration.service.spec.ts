import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigurationService } from './configuration.service';
import { IConfiguration } from '../models/configuration.interface';
import { ServiceUrls } from '../constants/service-urls.constant';

describe('ConfigurationService', () => {
  let service: ConfigurationService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ConfigurationService],
    });
  }));

  beforeEach(() => {
    service = TestBed.get(ConfigurationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', async(() => {
    service.getDetails()
      .then(
        (result: IConfiguration) => {
          expect(result.images).toBeDefined();
        }
      );

    const req = httpMock.expectOne(ServiceUrls.MOCKED.CONFIGURATION_URL);
    expect(req.request.method).toBe('GET');
  }));

  it('should return the poster_sizes', async(() => {
    service.getDetails()
      .then(
        (result: IConfiguration) => {
          expect(result.images.poster_sizes).toBeDefined();
          expect(result.images.poster_sizes.length).toBeGreaterThan(1);
        }
      );
  }));


});
