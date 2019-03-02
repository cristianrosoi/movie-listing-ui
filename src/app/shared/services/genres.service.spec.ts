import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GenresService } from './genres.service';
import { BuildUrl } from '../utils/buildUrl.util';
import { Config } from 'src/app/config';
import { ServiceUrls } from '../constants/service-urls.constant';
import { IGenres } from '../models/genres.interface';

describe('GenresService', () => {
  let service: GenresService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GenresService]
    });
  }));

  beforeEach(() => {
    service = TestBed.get(GenresService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', async(() => {
    service.getMovieList()
      .then(
        (result: IGenres) => {
          expect(result.genres).toBeDefined();
        }
      );
    const buildUrl = new BuildUrl();
    let url: string;

    if (Config.API_KEY && Config.API_KEY.length > 0) {
      url = buildUrl.fromPath(ServiceUrls.GENRES_URL);
    } else {
      url = ServiceUrls.MOCKED.GENRES_URL;
    }

    const req = httpMock.expectOne(url);

    expect(req.request.method).toBe('GET');
  }));
});
