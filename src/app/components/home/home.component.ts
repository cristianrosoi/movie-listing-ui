import { Component, OnInit } from '@angular/core';

import { NowPlayingService } from './../../shared/services/now-playing.service';
import { ConfigurationService } from './../../shared/services/configuration.service';
import { GenresService } from './../../shared/services/genres.service';
import { IMovieListings } from './../../shared/models/movie-listing.interface';
import { IConfiguration } from './../../shared/models/configuration.interface';
import { IGenres } from './../../shared/models/genres.interface';
import { CONSTANTS } from './../../shared/constants/constants';
import { FilterListingsPipe } from './../../shared/pipes/filter-listings.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieListings: IMovieListings;
  configuration: IConfiguration;
  genres: IGenres;

  sortingList: string;
  filterTerm: string;

  sortOptions = CONSTANTS.sortOptions;

  constructor(private nowPlayingService: NowPlayingService,
              private configurationService: ConfigurationService,
              private genresService: GenresService) { }

  ngOnInit(): void {
    // get the movies data
    this.getData();

    // Set the default selected option
    this.sortingList = this.sortOptions[0].value;

    // Set the default filter rating
    this.filterTerm = CONSTANTS.defaultFilterTerm;
  }

  /**
   * Get the list of now playing movies
   * Get the configuration API which
   * is used to retrive the images
   */
  getData(): void {
    Promise.all(
      [
        this.nowPlayingService.getNowPlayingMovies(),
        this.configurationService.getDetails(),
        this.genresService.getMovieList()
      ]).then(
        (responses: any[]) => {
          // fake a loading time
          setTimeout(() => {
            this.movieListings = responses[0];
            this.configuration = responses[1];
            this.genres = responses[2];
          }, 1000);
        }
      );
  }
}
