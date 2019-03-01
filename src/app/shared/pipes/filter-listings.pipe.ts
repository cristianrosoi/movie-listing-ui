import { Pipe, PipeTransform } from '@angular/core';

import { IMovie } from '../models/movie.interface';
import sortBy from 'lodash/sortBy';
import find from 'lodash/find';

@Pipe({
  name: 'filterListings'
})
export class FilterListingsPipe implements PipeTransform {

  transform(value: Array<IMovie>, option?: string, filterTerm?: string): Array<IMovie> {
    /**
     * Sort the list whenever there is no filterTerm
     */
    if (value && !filterTerm) {
      return sortBy(value, option).reverse();
    }

    /**
     * filter first and then sort in order to enable sorting
     * on a filtered list
     */
    if (value && filterTerm) {
      const filtered = value.filter(item => item.vote_average >= parseInt(filterTerm, 10));
      return sortBy(filtered, option).reverse();
    }
  }

}
