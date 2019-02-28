import { Component, OnInit } from '@angular/core';

import { NowPlayingService } from 'src/app/shared/services/now-playing.service';
import { IMovieListings } from 'src/app/shared/models/movie-listing.interface';
import { IConfiguration } from 'src/app/shared/models/configuration.interface';
import { ConfigurationService } from './../../shared/services/configuration.service';
import { FilterListingsPipe } from './../../shared/pipes/filter-listings.pipe';
import { CONSTANTS } from './../../shared/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieListings: IMovieListings;
  configuration: IConfiguration;
  filterList: string;
  sortOptions = CONSTANTS.sortOptions;

  constructor(private nowPlayingService: NowPlayingService, private configurationService: ConfigurationService) { }

  ngOnInit() {
    Promise.all([this.nowPlayingService.getNowPlayingMovies(), this.configurationService.getDetails()])
      .then(
        (responses) => {
          this.movieListings = responses[0] as IMovieListings;
          this.configuration = responses[1] as IConfiguration;
        }
      );

    this.filterList = this.sortOptions[0].value;
  }
}
