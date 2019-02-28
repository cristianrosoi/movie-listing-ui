import { Pipe, PipeTransform } from '@angular/core';

import { IMovie } from '../models/movie.interface';
import sortBy from 'lodash/sortBy';

@Pipe({
  name: 'filterListings'
})
export class FilterListingsPipe implements PipeTransform {

  transform(value: Array<IMovie>, option?: string): Array<IMovie> {
    return sortBy(value, option).reverse();
  }

}
