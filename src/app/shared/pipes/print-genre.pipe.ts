import { Pipe, PipeTransform } from '@angular/core';
import { IGenres } from './../models/genres.interface';
import find from 'lodash/find';

@Pipe({
  name: 'printGenre'
})
export class PrintGenrePipe implements PipeTransform {

  // ids = [28, 12, 16]
  getGenresByIDs(idList: Array<number>, list: IGenres) {
    const result: Array<string> = [];

    for (const id of idList) {
      result.push(find(list.genres, ['id', id]).name);
    }

    return result.toString().replace(/,/g, ', ');
  }

  transform(genreIds: Array<number>, list?: IGenres): any {
    if (genreIds && list) {
      return this.getGenresByIDs(genreIds, list);
    }
  }

}
