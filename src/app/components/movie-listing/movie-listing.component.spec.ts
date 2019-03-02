import { HeaderComponent } from './../header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListingComponent } from './movie-listing.component';

describe('MovieListingComponent', () => {
  let component: MovieListingComponent;
  let fixture: ComponentFixture<MovieListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build a full image path', () => {
    const path = '/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg';
    component.configuration = {
      images: {
        base_url: 'http://image.tmdb.org/t/p/',
        secure_base_url: '',
        backdrop_sizes: [''],
        logo_sizes: [''],
        poster_sizes: [
          'w92',
          'w154',
          'w185',
          'w342',
          'w500',
          'w780',
          'original'
        ],
        profile_sizes: [''],
        still_sizes: ['']
      },
      change_keys: ['']
    };

    const fullPath = component.buildFullImagePath(path);

    expect(fullPath).toBe(
      `${component.configuration.images.base_url}${component.configuration.images.poster_sizes[3]}${path}`
    );
  });
});
