import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { NowPlayingService } from 'src/app/shared/services/now-playing.service';
import { IMovieListings } from 'src/app/shared/models/movie-listing.interface';
import { IConfiguration } from 'src/app/shared/models/configuration.interface';
import { ConfigurationService } from './../../shared/services/configuration.service';
import { FilterListingsPipe } from './../../shared/pipes/filter-listings.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FilterListingsPipe]
})
export class HomeComponent implements OnInit {

  movieListings: IMovieListings;
  configuration: IConfiguration;

  public sortOptions = [{text: 'popularity', value: 'popularity'}, {text: 'rating', value: 'vote_average'}];
  public filterList: string;

  constructor(private nowPlayingService: NowPlayingService, private configurationService: ConfigurationService) { }

  ngOnInit() {
   this.getNowPlayingMovies();
   this.getConfiguration();
   this.filterList = this.sortOptions[0].value;
  }

  public getNowPlayingMovies(): void {
    this.nowPlayingService.getNowPlayingMovies()
    .then(
      (response: IMovieListings) => {
        console.log(response);
        this.movieListings = response;
      }
    );
  }

  public getConfiguration(): void {
    this.configurationService.getDetails()
      .then(
        (response: IConfiguration) => {
          console.log(response);
          this.configuration = response;
        }
      );
  }

}
