import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/shared/models/movie.interface';
import { IConfiguration } from 'src/app/shared/models/configuration.interface';

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css']
})
export class MovieListingComponent implements OnInit {

  @Input() movie: IMovie;
  @Input() configuration: IConfiguration;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Retrieves the full image URL by using
   * information from the Configuration API and
   * Images API => base_url + poster_size + image_path
   */
  buildFullImagePath(path: string): string {
    if (this.configuration && this.configuration.images) {
      return `${this.configuration.images.base_url}${this.configuration.images.poster_sizes[2]}${path}`;
    }
  }

}
