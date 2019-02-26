import { TestBed } from '@angular/core/testing';

import { MovieImagesService } from './movie-images.service';

describe('MovieImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieImagesService = TestBed.get(MovieImagesService);
    expect(service).toBeTruthy();
  });
});
