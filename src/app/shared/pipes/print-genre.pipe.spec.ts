import { PrintGenrePipe } from './print-genre.pipe';
import { IGenres } from '../models/genres.interface';

describe('PrintGenrePipe', () => {
  let pipe: PrintGenrePipe;

  beforeEach(() => {
    pipe = new PrintGenrePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should print the text of a genre based on id', () => {
    const ids: Array<number> = [28, 12, 16];
    const genres: IGenres = {
      genres: [
        {
          id: 28,
          name: 'Action'
        },
        {
          id: 12,
          name: 'Adventure'
        },
        {
          id: 16,
          name: 'Animation'
        }
      ]
    };

    expect(pipe.transform(ids, genres)).toEqual('Action, Adventure, Animation');
  });

  it('should search the genre name based on id and return a string', () => {
    const ids: Array<number> = [28, 12, 16];
    const genres: IGenres = {
      genres: [
        {
          id: 28,
          name: 'Action'
        },
        {
          id: 12,
          name: 'Adventure'
        },
        {
          id: 16,
          name: 'Animation'
        }
      ]
    };

    expect(typeof(pipe.getGenresByIDs(ids, genres)) === 'string').toBe(true);
  });
});
