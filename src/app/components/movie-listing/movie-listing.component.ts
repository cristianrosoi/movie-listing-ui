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

  buildFullImagePath(path: string): string {
    if (this.configuration && this.configuration.images) {
      return `${this.configuration.images.base_url}${this.configuration.images.poster_sizes[2]}${path}`;
    }
  }

}
